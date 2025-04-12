const mongoose = require("mongoose");

const razorpaySchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: false, // Initially, this might be null until payment is completed
  },
  status: {
    type: String,
    enum: ["created", "completed", "failed"],
    default: "created",
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Razorpay", razorpaySchema);