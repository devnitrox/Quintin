module.exports = {
    name: 'work',
    description: 'Work command for Quintin',
    execute(message, client, MessageEmbed, config, economy, fs){
        var jobs = ["๐ Stripper", "๐ธ Porn Director", "๐ง ATS Euromaster Mechanic", "๐ฎ E-Sports Gamer", "๐ฆ Cumslut", "โ๏ธ Telephone Scammer", "๐งจ Bomber", "๐บ Crematorium Worker"]
        var multiplier = [1, 1.2, 1.5, 2, 2.1, 2.5, 3]
        var selectedJob = jobs[Math.floor(Math.random() * jobs.length++)]
        var selectedMultiplier = multiplier[Math.floor(Math.random() * multiplier.length++)]
        var salary = Math.floor(Math.random() * 6)
        var finalSalary = Math.floor(Math.random() * salary * selectedMultiplier)

        economy[message.author.id].bal = economy[message.author.id].bal + finalSalary;
        fs.writeFile("PATH TO money.json", JSON.stringify(economy), (err) => {
            if (err) console.error(err)
        });

        var WorkEmbed = new MessageEmbed;
        WorkEmbed.setTitle("๐ต " + message.author.username + "'s Wage")
        WorkEmbed.setDescription("You worked as a `" + selectedJob + "` and earned `$" + finalSalary + "`.")
        WorkEmbed.setColor("#2F3136")
        message.reply( {embeds: [WorkEmbed], allowedMentions: [false]} )
    }
}