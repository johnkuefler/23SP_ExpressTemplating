var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('patients/list');
});

router.get('/details', function (req, res, next) {
  res.render('patients/detail');
});

module.exports = router;
