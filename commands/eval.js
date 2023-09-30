const { SlashCommandBuilder, MessageCollector } = require('discord.js');
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
        
        const collector = new MessageCollector(interaction.channel, m => m.author.id === interaction.user.id, { time: 60000 });
        console.log(collector)
        collector.on('collect', message => {
          try {
            const response = eval(message.content);
            message.reply({content: `Result: \`\`\`\n${response}\n\`\`\``, ephemeral: false});
          } catch (x) {
            message.reply({content: `Error: \`\`\`\n${x}\n\`\`\``, ephemeral: false});            
          }
        })
    
    },
};
