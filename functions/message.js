async function messageEveryone(message, content) {
    message.guild.members.fetch().then(members => {
        members.forEach(member => {
            if (member.user.bot) return;
            member.send(content)
        });
    })
}


async function messageUser(user, content, client, MessageEmbed, config) {
    client.users.fetch(user).then(member => {
        try {
            if (member.bot) return;
        } catch (e) {
            console.log(e)
            return;
        }
        member.send(content)
        var dmChannel = client.channels.cache.get('ID OF DM LOGGING CHANNEL')
        const dmEmbed2 = new MessageEmbed()
        dmEmbed2.setTitle("Message to " + member.tag)
        dmEmbed2.setDescription(content)
        dmEmbed2.setThumbnail(member.avatarURL())
        dmEmbed2.setColor("#2F3136")
        dmEmbed2.setFooter({text: "Quintin version: " + config.version})
        dmChannel.send( { embeds: [dmEmbed2] } )
    })
}

function logDM(client, message, MessageEmbed, config) {
    if (message.author.bot) return;
    var dmChannel = client.channels.cache.get('ID OF DM LOGGING CHANNEL')
    const dmEmbed = new MessageEmbed()
    dmEmbed.setTitle(message.author.username + "'s DMs with Quintin")
    dmEmbed.setDescription(message.content)
    dmEmbed.setThumbnail(message.author.avatarURL())
    dmEmbed.setColor("#2F3136")
    dmEmbed.setFooter({text: "Quintin version: " + config.version})
    dmChannel.send( { embeds: [dmEmbed] } )
    return;
}

module.exports = {messageEveryone, messageUser, logDM}