const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reboot')
        .setDescription('Reboots the Bot')
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.user.id != '539322589391093780') {
            await interaction.reply({content: 'Only <@539322589391093780> can do this!', ephemeral: true});
            return;
        }

        var obj = {
            channel: `${interaction.channel.id}`
        };

        var json = JSON.stringify(obj);
        var callback;

        await fs.writeFileSync('../rebootchannel.json', json);

        await interaction.reply('Restarting...');
        process.exit();
    },
};
