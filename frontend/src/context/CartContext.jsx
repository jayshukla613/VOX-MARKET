'use client';

import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const token = typeof window !== 'undefined' ? localStorage.getItem('user-token') : null;

    const updateCart = () => {
        if (token) {
            axios.put(`${process.env.NEXT_PUBLIC_API_URL}/cart/update`, { cartItems }, {
                headers: {
                    'x-auth-token': token,
                }})
                .then((response) => {
                    console.log('Cart updated successfully:', response.data);
                })
                .catch((error) => console.error('Error updating cart:', error));
        }
    }

    const [cartItems, setCartItems] = useState(() => {
        // Initialize cartItems from localStorage if available
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Sync cartItems with localStorage whenever it changes
    useEffect(() => {
        updateCart();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add an item to the cart
    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Function to remove an item from the cart
    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems
                .map((cartItem) =>
                    cartItem._id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0)
        );
    };

    const deleteItemFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem._id !== itemId));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems"); // Optionally clear cart from localStorage
    };

    // Function to calculate the total amount
    const calculateTotalAmount = () => {
        return cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                deleteItemFromCart,
                addItemToCart,
                removeItemFromCart,
                calculateTotalAmount,
                clearCart, // Add clearCart to the context
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => useContext(CartContext);

export default useCartContext;
