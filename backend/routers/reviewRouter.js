const express = require("express");
const Review = require("../models/reviewModel");

const router = express.Router();

// Create a new review
router.post("/Rating", async (req, res) => {
  try {
    const { name, comment, rating } = req.body;
    if (!name || !comment || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReview = new Review({ name, comment, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
  }
});

// Get all reviews
router.get("/GetRating", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

module.exports = router;
