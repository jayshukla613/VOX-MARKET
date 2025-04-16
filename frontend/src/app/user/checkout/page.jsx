'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";
import useCartContext from "@/context/CartContext";

const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  country: Yup.string().required('Country is required'),
  paymentMethod: Yup.string().required('Please select a payment method'),
  cardNumber: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card number is required').matches(/^\d{16}$/, 'Card number must be 16 digits'),
  }),
  expiry: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'MM/YY format'),
  }),
  cvv: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits'),
  }),
});

export default function CheckoutPage() {
  const { cartItems, calculateTotalAmount, clearCart } = useCartContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      paymentMethod: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: async (values) => {
      try {
        setIsProcessing(true);
        toast.loading('Processing payment...');

        if (values.paymentMethod === 'card') {
          const { data: order } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/razorpay/create-order`, {
            amount: calculateTotalAmount() * 100, // Amount in paise
            currency: 'INR',
          });

          const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Vox Market',
            description: 'Order Payment',
            order_id: order.id,
            handler: async (response) => {
              try {
                const verifyResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/razorpay/verify-payment`, {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                });

                if (verifyResponse.data.success) {
                  toast.success('Payment successful!');
                  await placeOrder(values, 'success');
                } else {
                  toast.error('Payment verification failed!');
                }
              } catch (error) {
                console.error('Error verifying payment:', error);
                toast.error('Payment verification failed!');
              }
            },
            prefill: {
              name: values.fullName,
              email: 'test@example.com', // Replace with actual user email
              contact: '9999999999', // Replace with actual user phone
            },
            theme: {
              color: '#3399cc',
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        } else {
          await placeOrder(values, 'pending');
        }
      } catch (error) {
        console.error('Error during payment:', error);
        toast.error('Failed to process payment.');
      } finally {
        setIsProcessing(false);
      }
    },
  });

  const placeOrder = async (values, paymentStatus) => {
    try {
      const order = {
        shippingAddress: `${values.fullName}, ${values.address}, ${values.city}, ${values.postalCode}, ${values.country}`,
        paymentMethod: values.paymentMethod,
        items: cartItems,
        totalAmount: calculateTotalAmount(),
        status: paymentStatus,
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, order, {
        headers: {
          'x-auth-token': localStorage.getItem('user-token'),
        },
      });

      toast.success('Order placed successfully!');
      clearCart();
      router.replace('/user/thankyou');
    } catch (error) {
      console.error('Order error:', error);
      toast.error('Error placing order. Please try again.');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          className="w-full p-2 border rounded-md"
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="text-red-500">{formik.errors.fullName}</div>
        )}
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className="w-full p-2 border rounded-md"
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-500">{formik.errors.address}</div>
        )}
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="w-full p-2 border rounded-md"
        />
        {formik.touched.city && formik.errors.city && (
          <div className="text-red-500">{formik.errors.city}</div>
        )}
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
          className="w-full p-2 border rounded-md"
        />
        {formik.touched.postalCode && formik.errors.postalCode && (
          <div className="text-red-500">{formik.errors.postalCode}</div>
        )}
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
          className="w-full p-2 border rounded-md"
        />
        {formik.touched.country && formik.errors.country && (
          <div className="text-red-500">{formik.errors.country}</div>
        )}
        <div>
          <label>Payment Method</label>
          <div role="group" aria-labelledby="paymentMethod">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.paymentMethod === 'cod'}
              />
              {' '}Cash on Delivery
            </label><br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.paymentMethod === 'card'}
              />
              {' '}Credit/Debit Card (Mock)
            </label>
          </div>
          {formik.touched.paymentMethod && formik.errors.paymentMethod && (
            <div className="text-red-500">{formik.errors.paymentMethod}</div>
          )}
        </div>
        {formik.values.paymentMethod === 'card' && (
          <>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cardNumber}
              className="w-full p-2 border rounded-md"
            />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <div className="text-red-500">{formik.errors.cardNumber}</div>
            )}
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expiry}
              className="w-full p-2 border rounded-md"
            />
            {formik.touched.expiry && formik.errors.expiry && (
              <div className="text-red-500">{formik.errors.expiry}</div>
            )}
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cvv}
              className="w-full p-2 border rounded-md"
            />
            {formik.touched.cvv && formik.errors.cvv && (
              <div className="text-red-500">{formik.errors.cvv}</div>
            )}
          </>
        )}
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-700"
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}
