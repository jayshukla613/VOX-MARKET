const {Schema, model} = require('../connection');

const UserSchema = new Schema({
    fullname: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String,},
    username: {type: String, },
    createdAt:{type: Date, default: Date.now}
});

module.exports = model('User', UserSchema);



