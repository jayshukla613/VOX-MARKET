const { Schema, model, Types } = require('../connection');
const orderSchema = Schema({
    user: { type: Types.ObjectId, ref: 'user', required: true },
    items: { type: Array },
    address: { type: String },
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

    status: { type: String, default: 'pending' },
    paymentMethod: { type: String, default: 'cod' },
    paymentStatus: { type: String, default: 'pending' },
    orderDate: { type: Date, default: Date.now() }
});

module.exports = model('order', orderSchema);