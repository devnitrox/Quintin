const config = require("./config/config.json");
const pubConfig = require("./config/pubconfig.json")
const economy = require("./databases/money.json")
const { Client, Intents, DiscordAPIError, MessageEmbed, MessageAttachment, Collection } = require('discord.js');
const client = new Client( { intents: [config.intents], partials: config.partials } )
const fs = require("fs")

const ifyFunctions = require("./functions/ify.js")
const randomFunctions = require("./functions/random.js")
const messageFunctions = require("./functions/message.js")
const activityFunctions = require("./functions/activity.js")
const miscFunctions = require("./functions/misc.js")
const economyFunctions = require("./functions/economy.js")

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.on('ready', function(e) {
    activityFunctions.setActivity(client, config, randomFunctions, pubConfig)
})

client.on("messageCreate", (message) => {
    if (message.channel.type == "DM") messageFunctions.logDM(client, message, MessageEmbed, config);
    if (!message.content.startsWith(config.prefix)) return;
    if (!message.guild) return;
    if (message.author.bot) return;
    if (activityFunctions.isMaintenance(message, config) == "yes") return;
    economyFunctions.checkIfBank(message, economy, fs)
    const args = message.content.slice(config.prefix.length).split(" ");
    switch (args[0]) {
        case 'help':
            client.commands.get('help').execute(message, client, MessageEmbed, config)
        break;
        case 'codify':
            client.commands.get('codify').execute(message, client, MessageEmbed, config, miscFunctions.checkIfPng, ifyFunctions.codify, MessageAttachment)
        break;
        case 'olify':
            client.commands.get('olify').execute(message, client, MessageEmbed, config, miscFunctions.checkIfPng, ifyFunctions.olify, MessageAttachment)
        break;
        case 'reecify':
            client.commands.get('reecify').execute(message, client, MessageEmbed, config, miscFunctions.checkIfPng, ifyFunctions.reecify, MessageAttachment)
        break;
        case 'toggle':
            client.commands.get('toggle').execute(message, client, MessageEmbed, config, args, pubConfig, randomFunctions.randomEveryone, randomFunctions.randomPingCody, fs)
        break;
        case "dm":
            client.commands.get('dm').execute(message, client, args, messageFunctions.messageUser, MessageEmbed, config)
        break;
        case "bal":
            client.commands.get('bal').execute(message, client, args, MessageEmbed, config, economy)
        break;
        case "tax":
            client.commands.get('tax').execute(message, client, args, MessageEmbed, pubConfig, economyFunctions, economy, fs)
        break;
        case "pay":
            client.commands.get('pay').execute(message, args, MessageEmbed, economyFunctions, economy, fs)
        break;
        case "work":
            client.commands.get('work').execute(message, client, MessageEmbed, config, economy, fs)
        break;
    }
})

client.login(config.token)