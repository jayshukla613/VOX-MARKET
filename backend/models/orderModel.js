const { Schema, model, Types } = require('../connection');
const orderSchema = Schema({
    seller: { type: Types.ObjectId, ref: 'seller', require: true },
    user: { type: Types.ObjectId, ref: 'user', require: true },
    items: { type: Array },
    shippingAddress: { type: String },
    city: { type: String},
    postalCode: { type: String},
    name: { type: String},
    country: { type: String},
    cardNumber: { type: String },
    expiry: { type: String },
    cvc: { type: String },
    totalPrice: { type: Number},
    email: { type: String},
    phone: { type: String },


    paymentMethod: { type: String },
    status: { type: String },
    orderDate: { type: Date, default: Date.now() },
    deliveryDate: { type: Date },
    deliveryStatus: { type: String, default: 'pending' },

    orderId: { type: String }
    
});

module.exports = model('order', orderSchema);