'use client'
import useCartContext from '@/context/CartContext';
import Ordercard from '@/Components/Ordercard';
import React from 'react';
import Link from 'next/link';

const Cart = () => {
  const { cartItems, removeItemFromCart, calculateTotalAmount, addItemToCart } = useCartContext();

  // Calculate subtotal, shipping, tax, and total amount
  const subtotal = calculateTotalAmount();
  const shipping = subtotal * 0.05;
  const tax = subtotal * 0.1;
  const totalAmount = (subtotal + shipping + tax).toFixed(2);

  return (
    <div>
      <h2 className="text-2xl text-center p-4 font-bold text-gray-800 ">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className=''>
          <div className=''>
            <Ordercard />
          </div>
          <div>
            <div className="mt-4">
              <div className="p-4 w-full">
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Order Summary
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-semibold">RS: {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800 font-semibold">RS: {shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800 font-semibold">RS: {tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-800 font-semibold">Total</span>
                    <span className="text-gray-800 font-semibold">RS: {totalAmount}</span>
                  </div>
                  <div className='flex justify-between mb-4'>
                    <Link href={'/user/checkout'} className="w-full text-center font-bold bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
