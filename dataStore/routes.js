const express = require('express');
const app = express();
const port = 3003;
const resource = require('./resource');
const controller = require('./controller');

const router = express.Router();

//console.log(resource.shortenResource, controller.shortenController)

router.route('/add') 
  .get(resource.addShort);



router.route('/get')
  .get(resource.getShort)

app.listen(port, () => console.log(`shorten app listening on port ${port}!`));
