const { Events } = require('discord.js');
const { uptime } = require('os');
const channelidfile = require('../../rebootchannel.json');

function getUptime() {

    var ut_sec = uptime();
    var ut_min = ut_sec / 60;
    var ut_hour = ut_min / 60;
    var ut_day = ut_hour / 24;

    ut_sec = Math.floor(ut_sec);
    ut_min = Math.floor(ut_min);
    ut_hour = Math.floor(ut_hour);
    ut_day = Math.floor(ut_day);

    ut_day = ut_day;
    ut_hour = ut_hour % 24;
    ut_min = ut_min % 60;
    ut_sec = ut_sec % 60;

    var days = `${ut_day} day${(ut_day === 1) ? "" : "s"}, `;
    days = (ut_day === 0) ? "" : days;
    var hours = `${ut_hour} hour${(ut_hour === 1) ? "" : "s"}, `;
    hours = (ut_hour === 0) ? "" : hours;

    return `${days}${hours}${ut_min} minute${(ut_min === 1) ? "" : "s"} and ${ut_sec} second${(ut_sec === 1) ? "" : "s"}`

}

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(bot) {
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

        bot.channels.cache.get(channelidfile.channel).send("Online!");

        bot.guilds.cache.forEach( async guild => {
            var msgString = `Guild: ${guild.name}\n`
            var allMembers = await guild.members.fetch();
            allMembers.forEach(member => {
                // var msgString = `${msgstring}    User: ${user.displayName}\n`
            })
            bot.channels.cache.get(channelidfile.channel).send(msgString)
        })

        // Set the Presence of the bot user
        bot.user.setPresence({ activities: [{ name: 'with Bea for ' + getUptime() }], status: 'online' });
        setInterval(() => {
            bot.user.setPresence({ activities: [{ name: 'with Bea for ' + getUptime() }], status: 'online' });
        }, 30000);

    }
};
