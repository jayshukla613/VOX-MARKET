const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: {type:String},
    email: { type: String, unique: true},
    password: { type: String, required: true },
    
    phone: { type: Number, required: true },
    address: { type: String, required: true },

    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);
