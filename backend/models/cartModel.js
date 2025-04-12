// models/Cart.js
const { Schema, model, Types } = require('../connection');


const cartSchema = Schema({
  
    name: { type: String },
    image: { type: [String]},
      material: { type: String},
      
      user: { type: Types.ObjectId, ref: 'user', require: true },
      price: { type: Number},
      offer: { type: Number},
      description: { type: String},
      category: { type: String},
      quantity: { type: Number },
      color: { type: String},
      size: { type: String },
      brand: { type: String},
      retunepolicy: { type: String },
      warranty: { type: String },
      feature: { type: String}
});

module.exports = model('cart', cartSchema);
