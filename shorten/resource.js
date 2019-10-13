const utils = require('./utils')

module.exports = {

  shortenResource: function (req, res, next) {
    try{
      let attributes = utils.checkJSONAndHeader(req);
      if(attributes.url){
        res.status(400).send('url not present')
      }
      req.controller = {
        url: attributes.url,
        shortCode: attributes.shortCode
      } 
      next();
    }catch(err){
      res.status(400).send('Bad request')
    }
    
  }
}