var express = require('express');
var router = express.Router();
var debug = require('debug')('lab:index');

/* GET home page. */
router.get('/', function(req, res, next) {
  var results = [
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 10 },
      { number: 20 }
  ];
  var userResult;
  res.render('index', { title: 'Express', results : results, userResult:userResult });
});

router.post('/', function(req, res, next) {
  var results = [
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 10 },
      { number: 20 }
  ];
  var userResult = req.body.grid;
  res.render('index', { title: 'Express', results : results, userResult:userResult });
});


module.exports = router;
