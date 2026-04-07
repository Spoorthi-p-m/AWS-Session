const express = require("express");
const app = express();
const { resolve } = require("path");
const Razorpay = require("razorpay"); // 1. Change Stripe to Razorpay
require("dotenv").config();

const port = process.env.PORT || 3000;

// 2. Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for HTML files (Keep these as they are)
app.get("/", (req, res) => res.sendFile(resolve(process.env.STATIC_DIR + "/index.html")));
app.get("/success", (req, res) => res.sendFile(resolve(process.env.STATIC_DIR + "/success.html")));
app.get("/cancel", (req, res) => res.sendFile(resolve(process.env.STATIC_DIR + "/cancel.html")));

// 3. Updated Checkout Route
app.post("/create-checkout-session/:pid", async (req, res) => {
  try {
    const amount = 50000; // Amount in paise (e.g., 50000 = ₹500)
    
    const options = {
      amount: amount, 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    // Inside your server.js route
    res.json({
     id: order.id,                  // The order ID from Razorpay
     amount: order.amount,          // The amount in Paise
     key_id: process.env.RAZORPAY_KEY_ID // Your Public Key
});
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

