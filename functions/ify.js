const Jimp = require("jimp")
const fs = require("fs")

async function codify(message){
    pictureChoice = Math.floor(Math.random() * 4) + 1;
    if (pictureChoice == 3) {
        var bars = "./images/codify/3.png"
    } else if (pictureChoice == 2) {
        var bars = "./images/codify/2.png"
    } else if (pictureChoice == 1) {
        var bars = "./images/codify/1.png"
    }  else if (pictureChoice == 4) {
        var bars = "./images/codify/4.png"
    }
    var pfp = message.attachments.size > 0 ? message.attachments.first().url : null;
    var image = await Jimp.read(pfp)
    image.resize(380, 758)
    image.composite((await Jimp.read(bars)).resize(380, 758), 0, 0)
    image.write("new_image.png")
    return image;
}

async function olify(message){
    pictureChoice = Math.floor(Math.random() * 3) + 1;
    if (pictureChoice == 3) {
        var bars = "./images/olify/3.png"
    } else if (pictureChoice == 2) {
        var bars = "./images/olify/2.png"
    } else if (pictureChoice == 1) {
        var bars = "./images/olify/1.png"
    }
    var pfp = message.attachments.size > 0 ? message.attachments.first().url : null;
    var image = await Jimp.read(pfp)
    image.resize(380, 758)
    image.composite((await Jimp.read(bars)).resize(380, 758), 0, 0)
    image.write("new_image_2.png")
    return image;
}

async function reecify(message){
    pictureChoice = Math.floor(Math.random() * 4) + 1;
    if (pictureChoice == 3) {
        var bars = "./images/reecify/3.png"
    } else if (pictureChoice == 2) {
        var bars = "./images/reecify/2.png"
    } else if (pictureChoice == 1) {
        var bars = "./images/reecify/1.png"
    } else if (pictureChoice == 4) {
        var bars = "./images/reecify/4.png"
    }
    var pfp = message.attachments.size > 0 ? message.attachments.first().url : null;
    var image = await Jimp.read(pfp)
    image.resize(380, 758)
    image.composite((await Jimp.read(bars)).resize(380, 758), 0, 0)
    image.write("new_image_3.png")
    return image;
}

module.exports = {codify, olify, reecify}