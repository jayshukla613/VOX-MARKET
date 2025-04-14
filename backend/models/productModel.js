const { Schema, model, Types } = require('../connection');

const myschema = Schema({
    name: { type: String },
    image: { type: [String]},
    material: { type: String},
    seller: { type: Types.ObjectId, ref: 'seller', require: true },
    user: { type: Types.ObjectId, ref: 'user', require: true },
    price: { type: Number},
    offer: { type: Number},
    description: { type: String},
    category: { type: String},
    
    color: { type: String},
    size: { type: String },
    brand: { type: String},
    retunepolicy: { type: String },
    warranty: { type: String },
    feature: { type: String}
})
module.exports = model('product', myschema);