async function checkIfBank(message, economy, fs) {
    if (message.author.bot) return;
    if (!economy[message.author.id]) {
        economy[message.author.id] = {
            bal: 0
        }
        fs.writeFile("PATH TO money.json", JSON.stringify(economy), (err) => {
            if (err) console.error(err)
        });
    }
}

async function taxThePoor(message, pubConfig, economy, economyFunctions, fs) {
    let amount = 0;
    message.guild.members.fetch().then(members => {
        members.forEach(member => {
            if (!economy[member.id]) return;
            if (economy[member.id].bal == 0) return;
            var newBal = economy[member.id].bal - pubConfig.tax;
            economy[member.id].bal = newBal;
            fs.writeFileSync("PATH TO money.json", JSON.stringify(economy), (err) => {
                if (err) console.error(err)
            });
            amount = amount + 1;
        });
        var codyAmount = pubConfig.tax * amount;
        economy['ID OF USER RECIEVING TAX'].bal = economy['ID OF USER RECIEVING TAX'].bal + codyAmount;
        fs.writeFile("PATH TO money.json", JSON.stringify(economy), (err) => {
            if (err) console.error(err)
        });
    })
}

module.exports = {checkIfBank, taxThePoor}