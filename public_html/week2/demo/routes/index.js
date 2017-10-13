var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chace' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Chace' });
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email });
});

module.exports = router;
