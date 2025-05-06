const  {Schema, model} = require('../connection');
const contactSchema = new Schema({
    name: {type: String},
    email: {type: String},
    subject: {type: String},
    message: {type: String},
    createdAt: {type: Date, default: Date.now}

});

module.exports = model('Contact', contactSchema);