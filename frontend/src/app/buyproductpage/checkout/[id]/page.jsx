'use client';

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage({  }) {
    const [product, setproduct] = useState([]);
    const {id}=useParams()


  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Handle checkout logic here (e.g., send data to the server)
    alert("Order placed successfully!");
  };


  const fetchProduct=async(id)=>{
    axios.get(`http://localhost:5000/product/getbyid/${id}`)
    .then((response) => {
        console.log(response.data);
        setproduct(data)
        })
        .catch((error) => {
            console.error(error);
            });
            }
            useEffect(() => {
                fetchProduct();
                }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Product Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="border p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover mb-4"
          />
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Total:</strong> ${product.price * product.quantity}</p>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingDetails.name}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingDetails.email}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingDetails.state}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={shippingDetails.zip}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            PayPal
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Place Order
      </button>
    </div>
  );
}