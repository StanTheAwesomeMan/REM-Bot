const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Evaluate javascript')
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.user.id != '539322589391093780') {
            await interaction.reply({content: 'Only <@539322589391093780> can do this!', ephemeral: true});
            return;
        }
        
        await interaction.reply({content: 'Awaiting code...', ephemeral: false});

        const collectorFilter = m => {
          return m.author.id === interaction.user.id;
        };

        const collector = interaction.channel.createMessageCollector({ filter: collectorFilter, max: 1, time: 60000 });
        collector.on('collect', message => {
          try {
            const codeblock = message.content.split('\n')
            codeblock.shift()
            codeblock.pop()
            const code = codeblock.join('\n')
            eval(code);
          } catch (x) {
            message.reply({content: `Error: \`\`\`\n${x}\n\`\`\``, ephemeral: false});            
          }
        })
    
    },
};
