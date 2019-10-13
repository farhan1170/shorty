module.exports = {
  checkJSONAndHeader: function (req, res) {
    let body = {}
    try{
      if(method === 'GET')
        body =  JSON.parse(req.quey)
      else if(method === 'POST')
        body = JSON.parse(req.body)

      if(!req.headers ||!req.headers['Content-Type'] ||req.headers['Content-Type']!= 'application/json' ){
        throw new Error('incorrect content type')
      }
    }
    catch(err){
      res.status(400).send('Bad request')
    }
  } 
}