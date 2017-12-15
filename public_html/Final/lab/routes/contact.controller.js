var Contact = require('./contact.model');
var debug = require('debug')('lab:contact');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.contactsReadAll = function(req, res) {
        
    debug('Getting all contacts');
    Contact
     .find()
     .exec()
     .then(function(results){
        sendJSONresponse(res, 200, results);
     })
     .catch(function(err){
        sendJSONresponse(res, 404, err);         
     });
    
};

module.exports.contactsCreate = function(req, res) {
    
    debug('Creating a contact with data ', req.body);
    
    Contact.create({
          Name: req.body.Name,
          Number: req.body.Number,
          Type: req.body.Type
    })
    .then(function(dataSaved){
        debug(dataSaved);
        sendJSONresponse(res, 201, dataSaved);
    })
    .catch(function(err){ 
        debug(err);
        sendJSONresponse(res, 400, err);
    });
     
};

