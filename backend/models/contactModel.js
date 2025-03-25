const  {Schema, model} = require('../connection');

const contactSchema = new Schema({
    name: { type: String, require: true},
    email:{ type: String, unique: true},
    message: { type: String, require: true},
    Createdat: { type: Date, default: Date.now}
})

module.exports = model('contact', contactSchema);