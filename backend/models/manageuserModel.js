const  {Schema, model ,Types} = require('../connection');

const mySchema =  Schema({
name: { type: String },
email:  { type: String },
role:  { type: String },
status: { type: String, default: 'Active' },
createdAt: { type: Date, default: Date.now }
})

module.exports = model('manageuser', mySchema);