# testchunks

testchunks with app (suport express and koa)

## Install

```
$ npm i -D testchunks
```

## Usages

```
import test from 'ava'

const app = require('../app')

const http = require('http')
const request = require('request')
const testChunks = require('testchunks')

test.cb('GET /', t => {
  testChunks(app, '/', function(chunks, error, response, body){
    console.log(chunks)
    t.end()
  })
})
```

## Support Express and Koa

if Express

```
  testChunks(app.callback(), '/', function(chunks, error, response, body){
    console.log(chunks)
    t.end()
  })
```

if Koa

```
  testChunks(app.callback(), '/', function(chunks, error, response, body){
    console.log(chunks)
    t.end()
  })
```
