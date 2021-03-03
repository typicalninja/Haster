class Link {
    constructor(response, options) {
     
        this.key = response.key
        this.url = options.raw.url
        this.extension = options.ext
        this.link = `${options.url}/${response.key}${options.ext ? `${options.ext}` : ""}`
        this.status = options.raw.status
        this.path = options.pathURL
    }
}

module.exports = Link