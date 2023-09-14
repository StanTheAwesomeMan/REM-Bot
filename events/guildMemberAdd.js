const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        //Log the newly joined member to console
        console.log('User ' + member.user.tag + ' has joined the server!');
    }
}
