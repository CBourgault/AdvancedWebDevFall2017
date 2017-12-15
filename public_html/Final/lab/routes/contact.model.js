var mongoose = require('mongoose');

var Empl = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Number: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
});

var Contact = mongoose.model('Contact', Empl);

module.exports = Contact;