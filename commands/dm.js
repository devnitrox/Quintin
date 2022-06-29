module.exports = {
    name: 'dm',
    description: 'DM command for Quintin',
    execute(message, client, args, messageUser, MessageEmbed, config){
        var user = args[1]
        message.delete()
        var messageContent = args.slice(2).join(" ");
        messageUser(user, messageContent, client, MessageEmbed, config);
        try {
            
        } catch (e) {
            console.log(e)
        }
    }
}