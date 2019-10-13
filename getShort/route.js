const express = require('express');
const app = express();
const port = 3002;
const resource = require('./resource');
const controller = require('./controller');

const router = express.Router();

//console.log(resource.shortenResource, controller.shortenController)

router.route('/shortcode') 
  .get(resource.shortcodeResource, controller.shortcodeController);

router.route('/shortcode/stats')
  .get(resource.statsResource, controller.statsController)

app.listen(port, () => console.log(`shorten app listening on port ${port}!`));
