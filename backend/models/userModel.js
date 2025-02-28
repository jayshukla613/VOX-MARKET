const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: {type:String},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    phone: { type: Number, unique: true, required: true, minlength: 10, maxlength: 12 },
    address: { type: String, required: true },

    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);
