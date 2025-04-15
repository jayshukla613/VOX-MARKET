'use client'
import React from "react";
import { useRouter } from "next/navigation";
import yup from "yup"
import { useFormik } from "formik";
import { useState } from "react";


export default function PaymentPage() {


  const router = useRouter();
  const handlePaymentSuccess = () => {
    router.push("/user/payment-success");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Side - Form Sections */}
      <div className="flex-1 space-y-6">
        {/* Billing Address */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="text" placeholder="Street Address" className="input col-span-2" />
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="Postal Code" className="input" />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" />
            <input type="text" placeholder="Street Address" className="input col-span-2" />
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="Postal Code" className="input" />
          </div>
        </div>

        {/* Saved Payment Methods */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Saved Payment Methods</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="accent-gray-600" />
              <span>Visa ending in 1234</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="accent-gray-600" />
              <span>MasterCard ending in 5678</span>
            </label>
          </div>
        </div>

        {/* Credit/Debit Card Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Cardholder Name" className="input col-span-2" />
            <input type="text" placeholder="Card Number" className="input col-span-2" />
            <input type="text" placeholder="MM/YY" className="input" />
            <input type="text" placeholder="CVV" className="input" />
          </div>
        </div>
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-md h-fit sticky top-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$89.99</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$4.99</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$94.98</span>
          </div>
        </div>
        <button 
        onClick={handlePaymentSuccess}
        type="submit"
        
        className="mt-6 w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition">
          Pay Now
        </button>
      </div>
    </div>

    
  );
}

// Tailwind utility class for inputs
// Add this inside your global CSS or use @apply in Tailwind
// .input {
//   @apply border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400;
// }
