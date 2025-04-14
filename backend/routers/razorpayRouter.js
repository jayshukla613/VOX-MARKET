import express from "express";
import { createOrder, verifyPayment } from "../controllers/razorpayController.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
    });

const express = require("express");
const { createOrder, verifyPayment } = require("../controllers/razorpayController");

const router = express.Router();

// Route to create a Razorpay order
router.post("/create-order", createOrder);

// Route to verify Razorpay payment
router.post("/verify-payment", verifyPayment);

module.exports = router;

