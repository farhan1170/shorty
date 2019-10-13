const utils = require('./utils')

module.exports = {

  shortcodeResource: function (req, res, next) {
    try{
      let attributes = utils.checkJSONAndHeader(req);
      if(attributes.shortCode){

      } 
      req.controller = {
        shortCode: attributes.shortCode
      } 
      next();
    }catch(err){
      res.status(400).send('Bad request')
    }
  },
  statsResource: function (req, res, next) {
    // body...
  }
}