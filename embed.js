const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, PermissionFlagsBits } = require('discord.js');
const { isModOrAdmin } = require('../../utils/permissions');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Créer un embed avec un formulaire')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    if (!isModOrAdmin(interaction.member)) {
      return interaction.reply({ content: 'Réservé aux admins et modérateurs.', ephemeral: true });
    }

    const modal = new ModalBuilder()
      .setCustomId('embedModal')
      .setTitle('Créer un Embed');

    const content = new TextInputBuilder().setCustomId('content').setLabel('Message au-dessus (optionnel)').setStyle(TextInputStyle.Paragraph).setRequired(false);
    const title = new TextInputBuilder().setCustomId('title').setLabel('Titre').setStyle(TextInputStyle.Short).setRequired(true);
    const description = new TextInputBuilder().setCustomId('description').setLabel('Description').setStyle(TextInputStyle.Paragraph).setRequired(true);
    const footer = new TextInputBuilder().setCustomId('footer').setLabel('Footer (optionnel)').setStyle(TextInputStyle.Short).setRequired(false);
    const color = new TextInputBuilder().setCustomId('color').setLabel('Couleur hex').setStyle(TextInputStyle.Short).setRequired(false).setPlaceholder('#FF6B00');

    modal.addComponents(
      new ActionRowBuilder().addComponents(content),
      new ActionRowBuilder().addComponents(title),
      new ActionRowBuilder().addComponents(description),
      new ActionRowBuilder().addComponents(footer),
      new ActionRowBuilder().addComponents(color)
    );

    await interaction.showModal(modal);
  }
};