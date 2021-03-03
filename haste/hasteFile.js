const fs = require('fs')
const fetch = require("node-fetch");
const Link = require('../haste/link')

async function hasteFile(path, options = {}){
if(!fs.existsSync(path)) {
    throw new Error(`Path : ${path} does not exist`)
}
if(options.url) {
    if(typeof options.url !== 'string') {
        throw new Error(`Url option must send a string received ${typeof options.url}`)
    } else if(!stringIsAValidUrl(options.url)) {
        throw new Error(`Url option must send a url`)
    } else if(!options.pathURL){
       console.log(`[Blue-haste] : You did not provide pathUrl option, using the default /documents path`)
    }
}
if(options.pathURL) {
if(typeof options.pathURL !== 'string') {
    throw new Error(`pathURL must be a string! received ${typeof options.pathURL}`)
}
}
const pathURL = options.pathURL ? options.pathURL : 'documents'
const url = options.url ? options.url : 'https://haste.bluefoxhost.com'

const extension = options.ext ? options.ext : '.js'
pathURL.replace('/', '')

let content;
try {
 content = fs.readFileSync(path).toString()

} catch(err) {
throw new Error(`Error while reading the provided file  | ${err}`)
}


const request = await fetch(`${url}/${pathURL}`, {
    method: "POST",
    body: content,
    headers: { "Content-Type": "text/plain" }
});

if (!request.ok) throw new Error(request.statusText);
const r = await request.json()
return new Link(r, { ext: extension, url: url, pathURL: pathURL, raw: request })
}

module.exports = hasteFile