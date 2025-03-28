'use client'
import useCartContext from '@/context/CartContext';
import Ordercard from '@/components/Ordercard';
import React from 'react';

const Cart = () => {
  const { cartItems, removeItem, calculateTotalAmount } = useCartContext();

  return (
    <div>
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Ordercard key={item._id} item={item} removeItem={removeItem} />
          ))}
          <div className="mt-4">
            <h2 className="text-xl">Total: Rs.{calculateTotalAmount().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
