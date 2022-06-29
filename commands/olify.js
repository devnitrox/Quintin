module.exports = {
    name: 'olify',
    description: 'Olify command for Quintin',
    execute(message, client, MessageEmbed, config, checkIfPng, olify, MessageAttachment){
        if (!message.attachments.size > 0) {
            message.reply( { content: "You need to upload a file for this to work!", allowedMentions: [false] })
            return;
        }
        if (!message.attachments.every(checkIfPng)){
            message.reply( { content: "Use a png or jpg file... nerd.", allowedMentions: [false] })
            return;
        }
        const OlifyEmbed1 = new MessageEmbed()
        OlifyEmbed1.setTitle("<a:loading:987743662257606657> Working...")
        OlifyEmbed1.setDescription("Getting your olified image")
        OlifyEmbed1.setColor("#2F3136")
        OlifyEmbed1.setFooter({text: "Quintin version: " + config.version})
        message.reply({ embeds: [OlifyEmbed1], allowedMentions: [false] }).then(msg =>
            olify(message).then(
                setTimeout(function(){
                    const attachment = new MessageAttachment('./new_image_2.png', 'olify.png')
                    const OlifyEmbed2 = new MessageEmbed()
                    OlifyEmbed2.setTitle(message.author.username + "'s olified image")
                    OlifyEmbed2.setDescription("Here is your olified image:")
                    OlifyEmbed2.setImage('attachment://olify.png')
                    OlifyEmbed2.setColor("#2F3136")
                    OlifyEmbed2.setFooter({text: "Quintin version: " + config.version})
                    msg.edit({ embeds: [OlifyEmbed2], files: [attachment], allowedMentions: [false] });
                }, 4000)
            )
        )
    }
}