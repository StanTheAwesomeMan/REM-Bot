const { SlashCommandBuilder } = require('discord.js');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exec')
        .setDescription('Executes a Shell command')
        .setDMPermission(false)
        .addStringOption(option =>
            option.setName('command')
            .setDescription('The command to Execute')
            .setRequired(true)
        ),
    async execute(interaction) {
        if (interaction.user.id != '539322589391093780') {
            await interaction.reply({content: 'Only <@539322589391093780> can do this!', ephemeral: true});
            return;
        }

        const option = interaction.options.get('command');
        const command = option.value;

        const { stdout, stderr } = await exec(command);

        await interaction.reply({content: `Output: ${stdout}`, ephemeral: true});
    },
};
