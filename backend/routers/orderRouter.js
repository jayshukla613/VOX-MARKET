const express = require("express");
const Model = require("../models/orderModel");
const verifytoken = require('../middlewares/verifytoken');
const router = express.Router();

let currentOrderId = 11111;

// Create a new order
router.post("/add", verifytoken, async (req, res) => {
  console.log('add order');
  
  try {
    const { items, address, city, postalCode, name, country, cardNumber, expiry, cvc, totalPrice } = req.body;
    const newOrder = new Model({
      user: req.user._id,
      items,
      address,
      city,
      postalCode,
      name,
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
   Model.find()
          .then((result) => {
              res.status(200).json(result);
          }).catch((err) => {
              console.log(err);
              res.status(500).json(err);
          });
  });


// Get all orders for a user
router.get("/user-orders", verifytoken, async (req, res) => {
  try {
    const orders = await Model.find({ user: req.user._id }); // ✅ corrected field
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
