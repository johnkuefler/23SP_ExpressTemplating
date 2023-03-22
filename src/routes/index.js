var express = require('express');
var router = express.Router();
const formController = require('../controllers/formController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  formController.form_post(req, res);
});

router.get('/advanced-form', function (req, res, next) {
  res.render('advanced-form');
});

router.post('/advanced-form', function (req, res, next) {
  formController.advanced_form_post(req, res);
});

module.exports = router;
