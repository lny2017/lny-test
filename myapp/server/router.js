var express = require('express');
var router = express.Router();

var get = require('./routes/get');
var post = require('./routes/post');

router.get('/get', get);
router.post('/post', post);
module.exports = router;