// models/Cart.js
const mongoose = require('../connection');


const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  






  
 
  
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
