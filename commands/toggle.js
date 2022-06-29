module.exports = {
    name: 'toggle',
    description: 'Toggle command for Quintin',
    execute(message, client, MessageEmbed, config, args, pubConfig, randomEveryone, randomPingCody, fs){
        if (args[1] == "wakeywakey"){
            if (pubConfig['random-everyone'] == "enabled") {
                pubConfig['random-everyone'] = "disabled"
                fs.writeFile("PATH TO pubconfig.json", JSON.stringify(pubConfig), (err) => {
                    if (err) console.error(err)
                });
                message.channel.send(":no_entry_sign: **Wakey Wakey** has been disabled.")
            } else {
                pubConfig['random-everyone'] = "enabled"
                fs.writeFile("PATH TO pubconfig.json", JSON.stringify(pubConfig), (err) => {
                    if (err) console.error(err)
                });
                message.channel.send("✅ **Wakey Wakey** has been enabled.")
                randomEveryone(pubConfig, client)
            }
        }  if (args[1] == "wakeupcody") {
            if (message.author.id == "676422368792674334") {
                message.channel.send("Nice try Cody, enjoy my pings.")
                return;
            }
            if (pubConfig['random-cody'] == "enabled") {
                pubConfig['random-cody'] = "disabled"
                fs.writeFile("PATH TO pubconfig.json", JSON.stringify(pubConfig), (err) => {
                    if (err) console.error(err)
                });
                message.channel.send(":no_entry_sign: **Wake Up Cody** has been disabled.")
            } else {
                pubConfig['random-cody'] = "enabled"
                fs.writeFile("PATH TO pubconfig.json", JSON.stringify(pubConfig), (err) => {
                    if (err) console.error(err)
                });
                message.channel.send("✅ **Wake Up Cody** has been enabled.")
                randomPingCody(pubConfig, client)
            }
        } else if (args[1] == "help") {
            const ToggleEmbed = new MessageEmbed()
            ToggleEmbed.setTitle("Toggle Command Help")
            ToggleEmbed.setDescription("The toggle command allows the public to be able to turn certain features on and off.")
            ToggleEmbed.setThumbnail(client.user.avatarURL())
            ToggleEmbed.setColor("#2F3136")
            ToggleEmbed.addField("Options:", "`q!toggle wakeywakey` - Toggle 'Wakey Wakey', the constant everyone ping.\n`q!toggle wakeupcody` - Constantly ping Cody randomly.")
            ToggleEmbed.setFooter({text: "Quintin version: " + config.version})
            message.channel.send( { embeds: [ToggleEmbed] } )
        } else {
            message.channel.send("<:weary:987742593695752282> Unrecognised option! Do `q!toggle help` to view all options.")
        }
    }
}