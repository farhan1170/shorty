const request = require('request')
const Promise = require('bluebird')

module.exports = {
  function requestServer(options) {
    let
    return new Promise(function (resolve, reject) {
      try{
        request(options, function (err, res, body) {
          if (err) {    
            reject(err);
          } else {        
            if(res.statusCode != 200) {
              return[];
            } else {
              resolve(body);
              return;
            }
          }
        })
      } catch(e) {
        
        return[];
      }
    }).then(function(data){
      return data
    }).catch(function(err){
      return [];
    })  
  }
}