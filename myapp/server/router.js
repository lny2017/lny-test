var express = require('express');
var router = express.Router();

var get = require('./routes/get');
var post = require('./routes/post');
var addUser = require('./routes/addUser');

router.get('/get', get);
router.post('/post', post);
router.post('/addUser', addUser);
module.exports = router;