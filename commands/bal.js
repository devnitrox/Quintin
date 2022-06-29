module.exports = {
    name: 'bal',
    description: 'Bal command for Quintin',
    execute(message, client, args, MessageEmbed, config, economy){
        if (args[1] == "gov") {
            var balance = economy["gov"].bal;
            var username = "👮 The Government";
            var avatarURL = "";
    
            const balEmbed = new MessageEmbed()
            balEmbed.setTitle(username + "'s Balance")
            balEmbed.setThumbnail(avatarURL)
            balEmbed.setColor("#2F3136")
            balEmbed.addField("Balance", "$" + balance)
            balEmbed.setFooter({text: "Quintin version: " + config.version})
            message.channel.send( { embeds: [balEmbed] } )
            return;
        }

        if (message.mentions.members.size > 0) {
            var user = message.mentions.members.first().id;
        } else {
            var user = message.author.id;
        }

        if (!economy[user]) {
            message.channel.send("This user does not exist in the money database. Please try again later.")
            return;
        }

        var balance = economy[user].bal;
        var username = client.users.cache.get(user).username;
        var avatarURL = client.users.cache.get(user).avatarURL();

        const balEmbed = new MessageEmbed()
        balEmbed.setTitle(username + "'s Balance")
        balEmbed.setThumbnail(avatarURL)
        balEmbed.setColor("#2F3136")
        balEmbed.addField("Balance", "$" + balance)
        balEmbed.setFooter({text: "Quintin version: " + config.version})
        message.channel.send( { embeds: [balEmbed] } )
    }
}