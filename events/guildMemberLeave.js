const { Events } = require('discord.js');

module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member) {
    //Log the member to console
    console.log('User ' + member.user.tag + ' has left the server...');
  }
}
