const token = process.env.TOKEN;
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations
    ]
});

global.bot = bot;

const fs = require("fs");
const path = require('path');

// ID shenanigans
bot.guildId = process.env.GUILDID;

bot.embedColorList = [
    0xf5e0dc,
    0xf2cdcd,
    0xf5c2e7,
    0xcba6f7,
    0xf38ba8,
    0xeba0ac,
    0xfab387,
    0xf9e2af,
    0xa6e3a1,
    0x94e2d5,
    0x89cdeb,
    0x74c7ec,
    0x89b4fa
];

// Load Commands
bot.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        bot.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

// Load Events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        bot.once(event.name, (...args) => event.execute(...args));
    } else {
        bot.on(event.name, (...args) => event.execute(...args));
    }
}

// E
bot.login(token);
