const express = require("express");
const Review = require("../models/reviewModel");
const verifytoken = require('../middlewares/verifytoken');

const router = express.Router();

// Create a new review
router.post('/reviews', verifytoken,  async (req, res) => {
  req.body.user = req.user._id;
   console.log(req.body);
      new Review(req.body).save()
          .then((result) => {
              res.status(200).json(result);
  
          }).catch((err) => {
              console.log(err);
              res.status(500).json(err);
          });
});

// GET route to fetch all reviews
router.get('/reviews', verifytoken,  async (req, res) => {
    Review.find({ user: req.user._id })
          .then((result) => {
              res.status(200).json(result);
          }).catch((err) => {
              console.log(err);
              res.status(500).json(err);
          });
});

module.exports = router;
