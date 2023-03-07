var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res, next) {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then(function (response) {
      res.render('todos', { todos: response.data });
    });
});

module.exports = router;
