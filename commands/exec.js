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

        await interaction.reply({content: 'Executing...', ephemeral: true});

        const option = interaction.options.get('command');
        const command = option.value;

        try {
             const { stdout, stderr } = await exec(command);
             if (stdout != '') await interaction.editReply({content: `Output: \`\`\`${stdout}\`\`\``, ephemeral: true});
             if (stdout == '')await interaction.editReply({content: 'Command did not return an output.', ephemeral: true});
        } catch (x) {
            await interaction.editReply({content: `ERROR: \`\`\`${x}\`\`\``, ephemeral: true});
            return;
        }
    },
};
