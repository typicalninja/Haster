## haster

* This project is made mainly focused around [haste.bluefoxhost.com](https://haste.bluefoxhost.com/)

**You can switch which haste server you want to this to work for | Read support other haste server**


## USAGE

```js
const { haste } = require('haster')

haste('This is a haste done from haster v1.0.0').then(console.log)
```
#### Results in the console

```js
Link {
  key: 'dayow',
  url: 'https://haste.bluefoxhost.com/documents',
  extension: '.js',
  link: 'https://haste.bluefoxhost.com/dayow.js',
  status: 200,
  path: 'documents'
}

```

#### Uploading a file


```js
const { hasteFile } = require('haster')

hasteFile('./README.md').then(console.log)

```


#### Results in the console

```js
Link {
  key: 'jezoc',
  url: 'https://haste.bluefoxhost.com/documents',
  extension: '.js',
  link: 'https://haste.bluefoxhost.com/jezoc.js',
  status: 200,
  path: 'documents'
}
```

### Support other haste server

*  You can Use the option `url` and `pathURL`

#### Example 

* Using hastebin instead of bluefox

**Hastebin is unavailable so it will most likely return service unavailable status code**

```js

const { haste } = require('haster')

haste('This is a haste done from haster v1.0.0', { url: 'https://hastebin.com'}).then(console.log)

```
* Done, should log the same thing as before if everything goes okay
