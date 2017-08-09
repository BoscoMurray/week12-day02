var express = require('express');
var router = express.Router();

router.use('/api', require('./api.js'));
router.use('/prices', require('./prices.js'));


module.exports = router;