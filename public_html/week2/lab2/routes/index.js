var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Page' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form Page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.post('/results', function(req, res, next) {
  res.render('results', { title: 'Results Page', name: req.body.Name, email: req.body.Email, comments: req.body.Comments});
});

module.exports = router;
