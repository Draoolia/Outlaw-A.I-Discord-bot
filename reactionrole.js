const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, PermissionFlagsBits } = require('discord.js');
const { isModOrAdmin } = require('../../utils/permissions');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reactionrole')
    .setDescription('Créer un message de rôles-réaction')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  async execute(interaction) {
    if (!isModOrAdmin(interaction.member)) {
      return interaction.reply({ content: 'Réservé aux admins et modérateurs.', ephemeral: true });
    }

    const modal = new ModalBuilder()
      .setCustomId('reactionRoleModal')
      .setTitle('Créer des Rôles-Réaction');

    const title = new TextInputBuilder().setCustomId('title').setLabel('Titre du message').setStyle(TextInputStyle.Short).setRequired(true);
    const description = new TextInputBuilder().setCustomId('description').setLabel('Description').setStyle(TextInputStyle.Paragraph).setRequired(false);
    const roles = new TextInputBuilder().setCustomId('roles').setLabel('Rôles (emoji roleId)').setStyle(TextInputStyle.Paragraph).setRequired(true).setPlaceholder('🎮 123456789012345678\n🔥 987654321098765432');

    modal.addComponents(
      new ActionRowBuilder().addComponents(title),
      new ActionRowBuilder().addComponents(description),
      new ActionRowBuilder().addComponents(roles)
    );

    await interaction.showModal(modal);
  }
};