const utils = require('./utils')
const services = require('services')
module.exports = {

  shortcodeController: function (req, res, next) {
    try{
        let options = {
          url: 'http://localhost:3003/get',
          body: {},
          method : 'POST'
        }
      let attributes = req.controller;
      options.body.shortCode = attributes.shortCode;
      services.requestServer(options).then(function (data) {
        let data = data.data
        if(!data.shortCode){
          res.status(404).send('shortCode not found')
        }
        else{
         res.status(301).send({Location: data.url}) 
        }
      })
    }
    catch(err){
      res.status(500).send('Something went wrong')
    }
  },
  statsController: function (req, res, next) {
    try{
        let options = {
          url: 'http://localhost:3003/get',
          body: {},
          method : 'POST'
        }
      let attributes = req.controller;
      options.body.shortCode = attributes.shortCode;
      services.requestServer(options).then(function (data) {
        let data = data.data
        if(!data.shortCode){
          res.status(404).send('shortCode not found')
        }
        else{
         res.status(302).send({startDate: data.startDate, lastSeenDate: data.lastSeenDate, redirectCount: data.redirectCount}) 
        }
      })
    }
    catch(err){
      res.status(400).send()
    }
  }
}