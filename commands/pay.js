module.exports = {
    name: 'pay',
    description: 'Pay command for Quintin',
    execute(message, args, MessageEmbed, economyFunctions, economy, fs){
        if (!message.mentions.members.size > 0) {
            message.channel.send("You need to specify a user to pay!")
            return;
        }

        if (!args[2]) {
            message.channel.send("You need to specify an amount!")
            return;
        }

        if (isNaN(args[2])) {
            message.channel.send("The amount must be a numerical number!")
            return;
        }

        var user = message.mentions.members.first();
        var amount = Number(args[2])

        if (amount < 0) {
            message.channel.send("The ammount cannot be below $**0**!")
            return;
        }

        if (amount > economy[message.author.id].bal) {
            message.channel.send("You do not have enough money for this transaction.")
            return;
        }

        economy[message.author.id].bal = economy[message.author.id].bal - amount;
        fs.writeFileSync("C:/Users/Ben/Documents/QuintinBot/databases/money.json", JSON.stringify(economy), (err) => {
            if (err) console.error(err)
        });

        economy[user.id].bal = economy[user.id].bal + amount;
        fs.writeFileSync("C:/Users/Ben/Documents/QuintinBot/databases/money.json", JSON.stringify(economy), (err) => {
            if (err) console.error(err)
        });

        message.channel.send("Successfuly paid $**" + amount + "** to <@" + user.id + ">!")

        console.log(message.author.tag + " paid $" + amount + " to " + user.user.tag)
    }
}