var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express is cool',
    content: 'This is my test content',
    author: 'John Kuefler',
    hasPhd: true,
  });
});

module.exports = router;
