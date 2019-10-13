const express = require('express');
const app = express();
const port = 3001;
const resource = require('./resource');
const controller = require('./controller');

const router = express.Router();

//console.log(resource.shortenResource, controller.shortenController)

router.route('/shorten')
  .post(resource.shortenResource, controller.checkShort,controller.shortenController);

app.listen(port, () => console.log(`shorten app listening on port ${port}!`));
