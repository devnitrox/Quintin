async function randomEveryone(pubConfig, client) {
    if (pubConfig['random-everyone'] !== "enabled") return;
    var everyoneChannel = client.channels.cache.get("ID OF CHANNEL FOR PINGS")
    var nextTime = Math.floor(Math.random() * 7200) + 1;
    var nextTime = nextTime * 1000;
    var logsChannel = client.channels.cache.get("ID OF CHANNEL FOR PING LOGS")
    logsChannel.send("Next everyone ping in: **" + nextTime / 1000 + "** seconds...")
    setTimeout(function(){
        everyoneChannel.send("@everyone")
        randomEveryone(pubConfig, client)
    }, nextTime)
}

async function randomPingCody(pubConfig, client) {
    if (pubConfig['random-cody'] !== "enabled") return;
    var pingChannel = client.channels.cache.get("ID OF CHANNEL FOR PINGS")
    var nextPing = Math.floor(Math.random() * 7200) + 1;
    var nextPing = nextPing * 1000;
    var logsChannel = client.channels.cache.get("ID OF CHANNEL FOR PING LOGS")
    logsChannel.send("Next Cody ping in: **" + nextPing / 1000 + "** seconds...")
    setTimeout(function(){
        pingChannel.send("<@ ID OF USER TO PING >")
        randomPingCody(pubConfig, client)
    }, nextPing)
}

module.exports = {randomEveryone, randomPingCody}