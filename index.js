'use strict'

const http = require('http')
const request = require('request')
const debug = require('debug')('testchunks')

const defaultConfig = { 
  method: 'GET'
  , gzip: true
}

module.exports = function(app, path, cb, opts){
  let chunks = []
  
  http.createServer(app).listen(function() {
    let port = this.address().port
    
    let url = 'http://127.0.0.1:' + port + path
    defaultConfig.url = url 
    
    opts = Object.assign(defaultConfig, opts)
    
    debug(opts)
    
    // 访问路径
    request(opts
    , function (error, response, body) {
        debug('error: ' + error)
        debug('response: ' + response)
        debug('body: ' + body)
        debug('chunks array: ' + chunks)
        cb(chunks, error, response, body)
      }
    ).on('data', function(data) {
      // decompressed data as it is received
      debug('decoded chunk: ' + data)
      chunks.push(data.toString())
    })
  })
}
