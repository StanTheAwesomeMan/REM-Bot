const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('times someone out for 1 minute')
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.user.id != '539322589391093780') {
            await interaction.reply({content: 'Only <@539322589391093780> can do this!', ephemeral: true});
            return;
        }

        await interaction.reply(`user: ${interaction.mentions.members.first().nickname}`);
    },
};
