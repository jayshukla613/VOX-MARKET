
'use client'
import React from 'react'
import Addtocart from '@/Components/Addtocart'
import useCartContext from '@/context/CartContext'

const demo = () => {
  const { cartItems, removeItemFromCart, calculateTotalAmount, addItemToCart } = useCartContext();
  return (
    <div>
        <Addtocart />
        <div className="mt-4">

<div className="     w-full  lg:w-1/2">
  <div className="bg-white shadow rounded-lg p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Order Summary
    </h3>
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">Subtotal</span>
      <span className="text-gray-800 font-semibold">RS: {calculateTotalAmount().toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">Shipping</span>
      <span className="text-gray-800 font-semibold">Rs: 100</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-600">Tax</span>
      <span className="text-gray-800 font-semibold">Rs:150</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-gray-800 font-semibold">Total</span>
      <span className="text-gray-800 font-semibold">RS: {calculateTotalAmount().toFixed(2)}</span>
    </div>
    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Proceed to Checkout
    </button>
  </div>
</div>
</div>
      
    </div>
  )
}

export default demo
