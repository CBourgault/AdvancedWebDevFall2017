var express = require('express');
var router = express.Router();
var ctrlContacts = require('./contact.controller');

//router.get('/', ctrlContacts.contactsCreate);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Final created by Chace'});
});

router.post('/index', ctrlContacts.contactsCreate);


module.exports = router;
