function setActivity(client, config, randomFunctions, pubConfig) {
    console.log(`Logged in as ${client.user.tag}!`)
    if (config.maintenance == "yes") {
        client.user.setActivity("maintenance...", {
            type: "WATCHING"
        });
        client.user.setStatus('dnd')
    } else {
        client.user.setActivity("with your tax rates.", {
            type: "PLAYING"
        });
        client.user.setStatus('online')
        randomFunctions.randomEveryone(pubConfig, client)
        randomFunctions.randomPingCody(pubConfig, client)
    }
}

function isMaintenance(message, config) {
    if (config.maintenance == "yes") {
        if (message.author.id !== "267016454900023306") {
            message.channel.send(":warning: **Under Maintenance** :warning:\nCheck <#988079045898035220> for maintenance updates.")
            return config.maintenance;
        }
    }
}

module.exports = {setActivity, isMaintenance}