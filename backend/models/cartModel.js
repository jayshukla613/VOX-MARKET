// models/Cart.js
const { Schema, model, Types } = require('../connection');


const cartSchema = Schema({

  user: { type: Types.ObjectId, ref: 'user', require: true },
  cartItems: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = model('cartdata', cartSchema);
