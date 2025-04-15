require('dotenv').config();
const Razorpay = require("razorpay");
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
    });

const express = require("express");
// const { createOrder, verifyPayment } = require("../controllers/razorpayController");

const router = express.Router();

router.post("/create-order",async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const options = {
            amount: amount * 100, // Amount in paise
            currency: currency,
            receipt: `receipt_${Math.random()}`,
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
}
);

router.get("/verify-payment", async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.query;

    const generated_signature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if (generated_signature === razorpay_signature) {
        res.json({ success: true });
    } else {
        res.status(400).json({ error: "Payment verification failed" });
    }
});

module.exports = router;

