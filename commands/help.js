module.exports = {
    name: 'help',
    description: 'Help command for Quintin',
    execute(message, client, MessageEmbed, config){
        const HelpEmbed = new MessageEmbed()
        HelpEmbed.setTitle("<a:explode:987743659195777065> Quintin Help")
        HelpEmbed.setDescription("Most of the commands used in Quintin that you can use right now.")
        HelpEmbed.setThumbnail(client.user.avatarURL())
        HelpEmbed.setColor("#2F3136")
        HelpEmbed.addField("Generic:", "`q!help` - Shows this message.\n`q!lib [names/places/both] [small/medium/large]` - Generate funny messages.")
        HelpEmbed.addField("Image Editing:", "`q!codify` - Put Cody in awkward scenarios.\n`q!olify` - Put Oliver in awkward scenarios.\n`q!reecify` - Put Reece in awkward scenarios.")
        HelpEmbed.addField("Submission Commands:", "`q!submit` - Submit an image for the '-ify' commands.")
        HelpEmbed.addField("Economy:", "`q!bal [user/none]` - View self and other people's balance.\n`q!pay [user] [amount]` - Give a user some of your money.\n`q!tax [none/now/amount]` - View current tax rate, tax people or set tax rate.\n`q!work` - Work for money.")
        HelpEmbed.addField("Utility:", "`q!toggle [option]` - Enable and disable certain features.")
        HelpEmbed.setFooter({text: "Quintin version: " + config.version})
        message.channel.send( { embeds: [HelpEmbed] } )
    }
}