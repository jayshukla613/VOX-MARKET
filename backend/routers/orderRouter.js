const express = require("express");
const Model = require("../models/orderModel");
const verifytoken = require('../middlewares/verifytoken');
const router = express.Router();
const jwt = require("jsonwebtoken");

let currentOrderId = 11111;

// Create a new order
router.post("/add", verifytoken, async (req, res) => {
  console.log(req.body);
  
  try {
    const { items, shippingAddress,status,orderId,deliveryDate,email,phone, city, postalCode, name, country, cardNumber, expiry, cvc, totalPrice } = req.body;
    const newOrder = new Model({
      user: req.user._id,
      items,
      shippingAddress,
      city,
      email,
      phone,
      postalCode,
      name,
      status,
      deliveryDate,
      orderId,
      country,
      cardNumber,
      expiry,
      cvc,
      totalPrice
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order", details: error.message });
  }
}
);  


router.get("/getall",  async (req, res) => {

   Model.find(req.body.save)
          .then((result) => {
              res.status(200).json(result);
          }).catch((err) => {
              console.log(err);
              res.status(500).json(err);
          });
  });


const verifyUserToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // Extract user ID from token
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Route to fetch orders for a user
router.get('/user-orders', verifyUserToken, async (req, res) => {
    try {
        const orders = await Model.find({ user: req.userId }).populate('items.seller', 'name').populate('user', 'email');
        res.json(orders);
    } catch (err) {
        console.error('Error fetching user orders:', err);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});




router.get("/seller-orders", verifytoken, async (req, res) => {
  try {
    const orders = await Model.find({ seller: req.seller._id }); // ✅ corrected field
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders", details: error.message });
  }
});

// Get a specific order by ID
router.get("/buy/:id", async (req, res) => {
  try {
    const order = await Model.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order", details: error.message });
  }
});

// Delete an order by ID
router.delete("/:id", verifytoken, async (req, res) => {
  try {
    const order = await Model.findByIdAndDelete(req.params._id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order", details: error.message });
  }
});

router.get('/generate-order-id', (req, res) => {
  const orderId = currentOrderId++;
  res.json({ orderId });

});

router.get('/order/:id', async (req, res) => {
  try {
    const order = await Model.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
});



module.exports = router;
