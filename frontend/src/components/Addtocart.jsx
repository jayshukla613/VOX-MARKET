'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const addtocart = () => {
    const token = localStorage.getItem('user-token')
    const [cart, setCart] = useState([])

    const fetchcartitems = async () => {
        axios.get('http://localhost:5000/cart/getbyuser', {
            headers: { 'x-auth-token': token }
        }).then((response) => {
            console.log(response.data)
            setCart(response.data)
            toast.success("Items fetched successfully")
        }).catch((error) => {
            console.log(error)
            toast.error("Error fetching items")
        })
    }

    useEffect(() => {
        if (token) fetchcartitems();
    }, [token]);

    // Function to calculate total price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold'>Add to Cart</h1>
            <div className='flex flex-col'>
                {cart.map((item) => (
                    <div key={item._id} className='flex items-center justify-between border-b py-2'>
                        <img src={item.image} alt={item.name} className='w-20 h-20 object-cover' />
                        <div className='flex flex-col ml-4'>
                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                            <p className='text-gray-600'>Price: ${item.price}</p>
                            <p className='text-gray-600'>Quantity: {item.quantity}</p>
                        </div>
                        <button className='bg-red-500 text-white px-4 py-2 rounded'>Remove</button>
                    </div>
                ))}
            </div>
            {/* Display total price */}
            <div className='mt-4'>
                <h2 className='text-xl font-bold'>Total Price: ${calculateTotalPrice()}</h2>
            </div>
        </div>
    )
}

export default addtocart
