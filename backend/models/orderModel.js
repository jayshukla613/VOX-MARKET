const { Schema, model, Types } = require('../connection');
const orderSchema = Schema({
    user: { type: Types.ObjectId, ref: 'user', require: true },
    items: { type: Array },
    address: { type: String, require: true },
    status: { type: String, default: 'pending' },
    paymentMethod: { type: String, default: 'cod' },
    paymentStatus: { type: String, default: 'pending' },
    orderDate: { type: Date, default: Date.now() }
});

module.exports = model('order', orderSchema);