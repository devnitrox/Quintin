module.exports = {
    name: 'reecify',
    description: 'Reecify command for Quintin',
    execute(message, client, MessageEmbed, config, checkIfPng, reecify, MessageAttachment){
        if (!message.attachments.size > 0) {
            message.reply( { content: "You need to upload a file for this to work!", allowedMentions: [false] })
            return;
        }
        if (!message.attachments.every(checkIfPng)){
            message.reply( { content: "Use a png or jpg file... nerd.", allowedMentions: [false] })
            return;
        }
        const ReecifyEmbed1 = new MessageEmbed()
        ReecifyEmbed1.setTitle("<a:loading:987743662257606657> Working...")
        ReecifyEmbed1.setDescription("Getting your reecified image")
        ReecifyEmbed1.setColor("#2F3136")
        ReecifyEmbed1.setFooter({text: "Quintin version: " + config.version})
        message.reply({ embeds: [ReecifyEmbed1], allowedMentions: [false] }).then(msg =>
            reecify(message).then(
                setTimeout(function(){
                    const attachment = new MessageAttachment('./new_image_3.png', 'reecify.png')
                    const ReecifyEmbed2 = new MessageEmbed()
                    ReecifyEmbed2.setTitle(message.author.username + "'s reecified image")
                    ReecifyEmbed2.setDescription("Here is your reecified image:")
                    ReecifyEmbed2.setImage('attachment://reecify.png')
                    ReecifyEmbed2.setColor("#2F3136")
                    ReecifyEmbed2.setFooter({text: "Quintin version: " + config.version})
                    msg.edit({ embeds: [ReecifyEmbed2], files: [attachment], allowedMentions: [false] });
                }, 4000)
            )
        )
    }
}