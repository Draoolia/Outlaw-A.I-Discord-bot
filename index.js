const { Client, GatewayIntentBits, Collection, Partials, Events, ActivityType, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const { getUserLanguage, t } = require('./utils/i18n');
const { askGemini } = require('./utils/gemini');
const db = require('./utils/database');
const cron = require('node-cron');
const Parser = require('rss-parser');

const parser = new Parser();
if (!config.token) {
  console.error('DISCORD_TOKEN manquant');
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
for (const folder of fs.readdirSync(foldersPath)) {
  const commandsPath = path.join(foldersPath, folder);
  if (!fs.statSync(commandsPath).isDirectory()) continue;
  for (const file of fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))) {
    const command = require(path.join(commandsPath, file));
    if (command.data && command.execute) {
      client.commands.set(command.data.name, command);
      console.log('Commande chargee : ' + command.data.name);
    }
  }
}

const eventsPath = path.join(__dirname, 'events');
if (fs.existsSync(eventsPath)) {
  for (const file of fs.readdirSync(eventsPath).filter(f => f.endsWith('.js'))) {
    const event = require(path.join(eventsPath, file));
    if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
    else client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.on(Events.InteractionCreate, async interaction => {
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.execute(interaction, client);
    } catch (e) {
      console.error(e);
      const msg = { content: 'Erreur', ephemeral: true };
      if (interaction.replied || interaction.deferred) await interaction.followUp(msg).catch(() => {});
      else await interaction.reply(msg).catch(() => {});
    }
  }

  if (!interaction.isModalSubmit()) return;

  if (interaction.customId === 'embedModal') {
    const content = interaction.fields.getTextInputValue('content') || null;
    const title = interaction.fields.getTextInputValue('title');
    const description = interaction.fields.getTextInputValue('description');
    const footer = interaction.fields.getTextInputValue('footer') || null;
    const color = interaction.fields.getTextInputValue('color') || '#FF6B00';

    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor(color)
      .setTimestamp();
    if (footer) embed.setFooter({ text: footer });

    await interaction.channel.send({ content, embeds: [embed] });
    return interaction.reply({ content: 'Embed envoyé !', ephemeral: true });
  }

  if (interaction.customId === 'reactionRoleModal') {
    const title = interaction.fields.getTextInputValue('title');
    const description = interaction.fields.getTextInputValue('description') || '';
    const rolesText = interaction.fields.getTextInputValue('roles');

    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description + '\n\nRéagis avec l\'emoji pour obtenir le rôle :')
      .setColor(0xFF6B00);

    const msg = await interaction.channel.send({ embeds: [embed] });

    const lines = rolesText.split('\n').filter(l => l.trim());
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length < 2) continue;
      const emoji = parts[0];
      const roleId = parts[1];
      try {
        await msg.react(emoji);
        db.addReactionRole(msg.id, emoji, roleId, interaction.guildId);
      } catch (e) {
        console.error('Erreur réaction:', e.message);
      }
    }

    return interaction.reply({ content: 'Message de rôles-réaction créé !', ephemeral: true });
  }
});

client.on(Events.MessageCreate, async message => {
  if (message.author.bot || !message.guild) return;
  if (message.mentions.has(client.user) && !message.mentions.everyone) {
    const question = message.content.replace(/<@!?(\d+)>/g, '').trim();
    if (!question) return;
    const thinking = await message.reply('...');
    try {
      const answer = await askGemini(message.author.id, question, getUserLanguage(message.member));
      await thinking.edit(answer.length > 1900 ? answer.slice(0, 1900) : answer);
    } catch {
      await thinking.edit('Erreur IA');
    }
  }
});

client.on(Events.MessageReactionAdd, async (reaction, user) => {
  if (user.bot) return;
  if (reaction.partial) try { await reaction.fetch(); } catch { return; }
  const emoji = reaction.emoji.id ? `<:${reaction.emoji.name}:${reaction.emoji.id}>` : reaction.emoji.name;
  const data = db.getReactionRole(reaction.message.id, emoji) || db.getReactionRole(reaction.message.id, reaction.emoji.name);
  if (data) {
    const member = await reaction.message.guild.members.fetch(user.id).catch(() => null);
    if (member) await member.roles.add(data.role_id).catch(() => {});
  }
});

client.on(Events.MessageReactionRemove, async (reaction, user) => {
  if (user.bot) return;
  if (reaction.partial) try { await reaction.fetch(); } catch { return; }
  const emoji = reaction.emoji.id ? `<:${reaction.emoji.name}:${reaction.emoji.id}>` : reaction.emoji.name;
  const data = db.getReactionRole(reaction.message.id, emoji) || db.getReactionRole(reaction.message.id, reaction.emoji.name);
  if (data) {
    const member = await reaction.message.guild.members.fetch(user.id).catch(() => null);
    if (member) await member.roles.remove(data.role_id).catch(() => {});
  }
});

client.on(Events.GuildMemberAdd, async member => {
  const lang = getUserLanguage(member);
  const map = {
    fr: '1293478072967893003',
    en: '1293478192874786837',
    pt: '1547707030368821268',
    ru: '1547706423990034442',
    es: '1564256356456734861'
  };
  const channel = member.guild.channels.cache.get(map[lang] || map.en);
  if (channel) {
    const messages = {
      fr: `Bienvenue ${member} sur Gaming Outlaws !`,
      en: `Welcome ${member} to Gaming Outlaws!`,
      es: `Bienvenido ${member} a Gaming Outlaws!`,
      pt: `Bem-vindo ${member} ao Gaming Outlaws!`,
      ru: `Добро пожаловать ${member} в Gaming Outlaws!`
    };
    await channel.send(messages[lang] || messages.en).catch(() => {});
  }
});

cron.schedule('*/10 * * * *', async () => {
  for (const yt of db.getYoutubeChannels()) {
    try {
      const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${yt.youtube_id}`);
      if (!feed.items || !feed.items.length) continue;
      const latest = feed.items[0];
      const videoId = latest.id.replace('yt:video:', '');
      if (yt.last_video_id === videoId) continue;
      const channel = await client.channels.fetch(yt.channel_id).catch(() => null);
      if (channel) await channel.send(`@everyone New video is out!\n\n**${latest.title}**\n${latest.link}`);
      db.updateLastVideo(yt.youtube_id, yt.guild_id, videoId);
    } catch {}
  }
});

cron.schedule('0 9 * * *', async () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  for (const [guildId] of client.guilds.cache) {
    const channelData = db.getBirthdayChannel(guildId);
    if (!channelData) continue;
    const channel = await client.channels.fetch(channelData.channel_id).catch(() => null);
    if (!channel) continue;
    const birthdays = db.getUpcomingBirthdays(guildId, 100);
    const todayBirthdays = birthdays.filter(b => b.day === day && b.month === month);
    for (const b of todayBirthdays) {
      await channel.send(`Joyeux anniversaire <@${b.user_id}> !`).catch(() => {});
    }
  }
});

client.once(Events.ClientReady, async () => {
  console.log('Bot pret : ' + client.user.tag);
  try {
    const cmds = [];
    client.commands.forEach(c => cmds.push(c.data.toJSON()));
    await client.application.commands.set(cmds);
    console.log(cmds.length + ' commandes sync');
  } catch (e) { console.error(e); }
  client.user.setActivity('Gaming Outlaws | /help', { type: ActivityType.Watching });
});

client.login(config.token);