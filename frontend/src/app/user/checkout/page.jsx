'use client';

import axios from "axios";
import useCartContext from "@/context/CartContext";
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';


const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Required'),

  address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must be less than 100 characters')
    .required('Required'),

  city: Yup.string()
    .min(2, 'City name too short')
    .max(50, 'City name too long')
    .required('Required'),

  state: Yup.string()
    .min(2, 'State name too short')
    .max(50, 'State name too long')
    .required('Required'),

  pincode: Yup.string()
    .matches(/^\d{5,6}$/, 'Pincode must be 5 or 6 digits')
    .required('Required'),

  country: Yup.string()
    .min(2, 'Country name too short')
    .max(56, 'Country name too long')
    .required('Required'),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems,calculateTotalAmount} = useCartContext();
   


  

  const formikform = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    },
    onSubmit: async (values) => {
      console.log(values);
      

      

    },
    validationSchema: validation
  });



  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, {
        ...formikform.values,
        cartItems,
        totalAmount: calculateTotalAmount(),
      });
      toast.success('Order placed successfully!');
      router.push('/user/order');
      console.log('Order response:', response.data);
      
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order!');
    }
  }
  const handleSubmit = async () => {
    
    formikform.handleSubmit();
    handlePlaceOrder();
   





  };




  return (
    <div>
     <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Checkout</h1>
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Billing Details */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">shipping Details</h2>
        <form onSubmit={formikform.handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="first-name"
                type="text"
                name="name"
                onChange={formikform.handleChange}
                value={formikform.values.name}
              />
              {formikform.touched.name && formikform.errors.name ? (
                <div className="text-red-500 text-sm">{formikform.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="last-name"
              >
                Phone Number
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                name="phone"
                onChange={formikform.handleChange}
                value={formikform.values.phone}

                type="number"
              />
              {formikform.touched.phone && formikform.errors.phone ? (
                <div className="text-red-500 text-sm">{formikform.errors.phone}</div>
              ) : null}
            </div>
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="email"
                name="email"
                onChange={formikform.handleChange}
                value={formikform.values.email}
                type="email"
              />
              {formikform.touched.email && formikform.errors.email ? (
                <div className="text-red-500 text-sm">{formikform.errors.email}</div>
              ) : null}
            </div>
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="address"
                type="text"
                name="address"
                onChange={formikform.handleChange}
                value={formikform.values.address}

              />
              {formikform.touched.address && formikform.errors.address ? (
                <div className="text-red-500 text-sm">{formikform.errors.address}</div>
              ) : null}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="city"
                name="city"
                onChange={formikform.handleChange}
                value={formikform.values.city}
                type="text"
              />
              {formikform.touched.city && formikform.errors.city ? (
                <div className="text-red-500 text-sm">{formikform.errors.city}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="state"
              >
                State
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="state"
                name="state"
                onChange={formikform.handleChange}
                value={formikform.values.state}

                type="text"
              />
              {formikform.touched.state && formikform.errors.state ? (
                <div className="text-red-500 text-sm">{formikform.errors.state}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="zip"
              >
                Zip Code
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="zip"
                name="pincode"
                onChange={formikform.handleChange}
                value={formikform.values.pincode}

                type="text"
              />

              {formikform.touched.pincode && formikform.errors.pincode ? (
                <div className="text-red-500 text-sm">{formikform.errors.pincode}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="country"
                name="country"
                onChange={formikform.handleChange}
                value={formikform.values.country}

                type="text"
              />
              {formikform.touched.country && formikform.errors.country ? (
                <div className="text-red-500 text-sm">{formikform.errors.country}</div>
              ) : null}

            </div>
          </div>
          
        </form>
      </div>
      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex flex-col gap-4">
         
         
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600">RS..{item.price}</p>
                </div>
              </div>
              <p className="text-lg font-medium">Quantity{item.quantity}</p>
            </div>
          ))}
          {/* Total Amount */}






          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Subtotal</p>
              <p className="text-lg font-medium">Rs.. {calculateTotalAmount().toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Shipping</p>
              <p className="text-lg font-medium">RS..20.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Total</p>
              <p className="text-lg font-bold">RS...{calculateTotalAmount().toFixed(2)}</p>
            </div>
          </div>
          <button type="submit"  onClick={ ()=>{
            handleSubmit();
            formikform.resetForm();
          

          }} className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
