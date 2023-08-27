const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        //Log the newly joined member to console
        console.log('User ' + member.user.tag + ' has joined the server!');

        // Random Welcome Messages
        var WelcomeMessages = [
            'Welcome <@' + member.user.id + '>! Rev your engines and let\'s get started!',
            'Welcome <@' + member.user.id + '>! Get ready to burn rubber and push your limits in our server.',
            'Welcome <@' + member.user.id + '>! Join in on the action and show off your driving skills.',
            'Welcome <@' + member.user.id + '>! Let\'s race to the finish line!',
            'Welcome <@' + member.user.id + '>! Get ready to push your limits and race to the top.'
        ];
        var WelcomeMessage = WelcomeMessages[Math.floor(Math.random() * WelcomeMessages.length)];

        //Find a channel named general and send a Welcome message
        member.guild.channels.cache.find(c => c.name === "general").send(WelcomeMessage)
        member.roles.add('1066425725864910928')
    }
}
