module.exports = {
    name: 'codify',
    description: 'Codify command for Quintin',
    execute(message, client, MessageEmbed, config, checkIfPng, codify, MessageAttachment){
        if (!message.attachments.size > 0) {
            message.reply( { content: "You need to upload a file for this to work!", allowedMentions: [false] })
            return;
        }
        if (!message.attachments.every(checkIfPng)){
            message.reply( { content: "Use a png or jpg file... nerd.", allowedMentions: [false] })
            return;
        }
        const CodifyEmbed1 = new MessageEmbed()
        CodifyEmbed1.setTitle("<a:loading:987743662257606657> Working...")
        CodifyEmbed1.setDescription("Getting your codified image")
        CodifyEmbed1.setColor("#2F3136")
        CodifyEmbed1.setFooter({text: "Quintin version: " + config.version})
        message.reply({ embeds: [CodifyEmbed1], allowedMentions: [false] }).then(msg =>
            codify(message).then(
                setTimeout(function(){
                    const attachment = new MessageAttachment('./new_image.png', 'codify.png')
                    const CodifyEmbed2 = new MessageEmbed()
                    CodifyEmbed2.setTitle(message.author.username + "'s codified image")
                    CodifyEmbed2.setDescription("Here is your codified image:")
                    CodifyEmbed2.setImage('attachment://codify.png')
                    CodifyEmbed2.setColor("#2F3136")
                    CodifyEmbed2.setFooter({text: "Quintin version: " + config.version})
                    msg.edit({ embeds: [CodifyEmbed2], files: [attachment], allowedMentions: [false] });
                }, 4000)
            )
        )
    }
}