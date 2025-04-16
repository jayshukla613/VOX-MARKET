'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import useCartContext from '@/context/CartContext';

const PaymentGateway = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const { calculateTotalAmount } = useCartContext();
  const [userData, setUserData] = useState(null);

  const getUserDetails = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
      headers: {
        'x-auth-token': localStorage.getItem('user-token'),
      },
    })
      .then((response) => {
        console.log('User details:', response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    setIsProcessing(true);
    toast.loading('Processing payment...');

    const {name, email, phone} = userData || {};

    try {
      // Step 1: Create an order on the server
      const { data } = await axios.post('http://localhost:5000/razorpay/create-order', {
        amount: calculateTotalAmount(), // Amount in INR (e.g., 500 INR)
        currency: 'INR',
      });

      const order = data;

      // Step 2: Open Razorpay payment gateway
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'Vox Market',
        description: 'Test Transaction',
        order_id: order.id,
        handler: async (response) => {
          console.log('Payment response:', response);

          // Step 3: Verify payment on the server
          const verifyResponse = await axios.post('http://localhost:5000/razorpay/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyResponse.data.success) {
            toast.success('Payment successful!');
          } else {
            toast.error('Payment verification failed!');
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options); // Use Razorpay from the browser SDK
      razorpay.open();
    } catch (error) {
      console.error('Error during payment:', error);
      toast.error('Failed to initiate payment.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Make a Payment</h1>
     
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentGateway;