const utils = require('./utils')
const services = require('./services')
const dataStore = require('./dataStore')


function insertShort(shortCode, url){
  let obj = {
    url: url,
    shortCode: shortCode,
    startData = new Date(),
    lastSeen: new Date(),
    redirectCount = 0
  }
  return obj
}



module.exports = {
  checkShort: function (req, res, next) {
    let attributes = req.controller;
    let options = {
      url: 'http://localhost:3002/get',
      body: {shortCode: req.controller.shortCode},
      method : 'POST'
    }
    services.requestServer(options).then(function (data) {
      res.status(409).send('The the desired shortcode is already in use. Shortcodes are case-sensitive.')
    }).catch(function (err) {
      res.status(400).send('Error in creating short Code')
    })

  }
  shortenController: function (req, res, next) {
    try{
      let options = {
        url: 'http://localhost:3003/add',
        body: {},
        method : 'POST'
      }
      let attributes = req.controller;
      if(!dataStore.shortData[attributes.shortCode]){
        options.body = insertShort(attributes.shortCode, attributes.url)
      }
      services.requestServer(options).then(function (data) {
        res.status(201).send({shortCode: attributes.shortCode})
      })
    }catch(err){
      res.status(400).send('Error in creating short Code')
    }
  }
}