const ds = require('./ds')
module.exports = {
  addShort: function (req, res, next) {
    try{
      let shortObj = req.body
      ds.shortData[req.body.shortCode] = req.body
      res.status(200).send({status: true})
    }
    catch(err){
      res.status(400).send({status: false})
    }
    
  },
  getShort: function (req, res, next) {
    try{
      let shortObj = req.body
      let data = ds.shortData[shortObj.shortCode]
      res.status(200).send({status: true, data: data})
    }
    catch(err){
      res.status(400).send({status: false})
    }
    
  }
}