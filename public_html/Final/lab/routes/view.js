var express = require('express');
var router = express.Router();
var ctrlContacts = require('./contact.controller');

router.get('/view', ctrlContacts.contactsReadAll);

module.exports = router;

