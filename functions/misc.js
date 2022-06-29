function checkIfPng(attachment) {
    var url = attachment.url;
    if (url.indexOf("png", url.length - "png".length /*or 3*/) !== -1) {
        return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
    } else if (url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1) {
        return url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
    }
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

module.exports = {catPerson, checkIfPng}