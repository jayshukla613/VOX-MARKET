'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('user123'); // You can dynamically set this based on logged-in user

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cart/get/${userId}`);
        setCart(response.data.products);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [userId]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete('http://localhost:5000/api/cart/remove', {
        data: { userId, productId },
      });
      setCart(cart.filter(item => item.productId._id !== productId));
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.productId._id} className="cart-item">
              <h3>{item.productId.name}</h3>
              <p>Price: ${item.productId.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemove(item.productId._id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
