module.exports = {
    name: 'tax',
    description: 'Tax command for Quintin',
    execute(message, client, args, MessageEmbed, pubConfig, economyFunctions, economy, fs){
        var taxPeople  = ["ID OF PEOPLE WHO CAN SET TAX RATES"]
        var newTax = args[1];

        if (!newTax) {
            message.channel.send("The tax rate is currently $**" + pubConfig.tax + "**!")
            return;
        }

        if (!taxPeople.includes(message.author.id)) {
            message.channel.send("Mate you can't do this command... only Lord Ginge IV can.")
            return;
        }

        if (newTax == "now") {
            economyFunctions.taxThePoor(message, pubConfig, economy, economyFunctions, fs)
            message.channel.send("Successfully taxed the poor. Check your balance to see if you have recieved your money, Lord Ginge IV.")
            return;
        }

        if (isNaN(newTax)) {
            message.channel.send("The new tax rate has to be a number!")
            return;
        }
        
        if (Number(newTax) > 1000) {
            message.channel.send("The new tax rate cannot be above $**1000**!")
            return;
        }

        if (Number(newTax) <= 0) {
            message.channel.send("The new tax rate cannot be below or equal to $**0**!")
            return;
        }

        pubConfig.tax = Number(newTax)
        fs.writeFile("PATH TO pubconfig.json", JSON.stringify(pubConfig), (err) => {
            if (err) console.error(err)
        });

        message.channel.send("The new tax rate is now $**" + newTax + "**!")
    }
}