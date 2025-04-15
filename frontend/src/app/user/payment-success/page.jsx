import React from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">
        <CheckCircle className="mx-auto text-green-500" size={64} />
        <h1 className="text-2xl font-bold mt-4">Payment Successful</h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase! Your order has been placed successfully.
        </p>
        <div className="mt-6 space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Order Number:</span>
            <span>#123456</span>
          </div>
          <div className="flex justify-between">
            <span>Total Paid:</span>
            <span>$94.98</span>
          </div>
        </div>
        <button className="mt-6 bg-gray-800 text-white py-3 px-6 rounded-xl hover:bg-gray-700 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
