var express = require('express');
var index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.render('index', { title: 'FRIENDS - API Server' });
});

module.exports = index;
