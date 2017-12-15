var express = require('express');
var router = express.Router();
var ctrlEmployees = require('./employee.controller');

router.all('/', ctrlEmployees.home);
router.all('/index', ctrlEmployees.home);
router.all('/update/:employeeid?', ctrlEmployees.update);
router.all('/view', ctrlEmployees.view);
router.all('/delete/:employeeid?', ctrlEmployees.delete);

module.exports = router;