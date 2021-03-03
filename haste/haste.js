const URL = require("url").URL;
const fetch = require("node-fetch");
const Link = require('../haste/link')

const stringIsAValidUrl = (s) => {
  try {
    new URL(s);
    return true;
  } catch (err) {
    return false;
  }
};

async function haste(text, options = {}) {
    if(!text) throw new Error('Missing content')
    if(options.url) {
        if(typeof options.url !== 'string') {
            throw new Error(`Url option must send a string received ${typeof options.url}`)
        } else if(!stringIsAValidUrl(options.url)) {
            throw new Error(`Url option must send a url `)
        } else if(!options.pathURL){
            console.log(`[Blue-haste] : You did not provide pathUrl option, using the default /documents path`)
         }
    }

    if(options.pathURL) {
        if(typeof options.pathURL !== 'string') {
            throw new Error(`pathURL must be a string! received ${typeof options.pathURL}`)
        }
        }

const url = options.url ? options.url : 'https://haste.bluefoxhost.com'
let pathURL = options.pathURL ? options.pathURL : 'documents'
const extension = options.ext ? options.ext : '.js'
pathURL.replace('/', '')

const request = await fetch(`${url}/${pathURL}`, {
    method: "POST",
    body: text,
    headers: { "Content-Type": "text/plain" }
});

if (!request.ok) throw new Error(request.statusText);
const r = await request.json()
if(!r.key) throw new Error('No key found in the returned body!!, make sure the url is correct')
return new Link(r, { ext: extension, url: url, pathURL: pathURL, raw: request })
}

module.exports = haste