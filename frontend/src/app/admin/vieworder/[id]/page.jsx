'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';

const OrderDetailspage = () => {
    const [orderDetails, setOrderDetails] = useState(null); // Initialize as null
    const { id } = useParams(); // Get the dynamic route parameter

    const fetchOrderDetails = async (id) => {
        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/order/${id}`);
            console.log(result.data);
            setOrderDetails(result.data);
            toast.success("Order details fetched successfully");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (id) {
            fetchOrderDetails(id);
        }
    }, [id]);

    
        

    if (!orderDetails) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Order Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Order Information</h2>
                <p><strong>Order ID:</strong> {orderDetails._id}</p>
                <p><strong>User ID:</strong> {orderDetails.user || 'N/A'}</p>
                
                <p><strong>Payment Method:</strong> {orderDetails.paymentMethod || 'N/A'}</p>

                <p><strong>Status:</strong> {orderDetails.status || 'N/A'}</p>
                <p><strong>Address:</strong> {orderDetails.shippingAddress || 'N/A'}</p>
                
                <p><strong>Order Date:</strong> {new Date(orderDetails.orderDate).toLocaleDateString()}</p>
                <p><strong>Delivery Date:</strong> {new Date(orderDetails.deliveryDate).toLocaleDateString() || 'N/A'}</p>
                <p><strong>Delivery Status:</strong> {orderDetails.deliveryStatus || 'N/A'}</p>
                <p><strong>Total Price:</strong> RS {orderDetails.totalPrice || 'N/A'}</p>

            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Items</h2>
                {orderDetails.items && orderDetails.items.length > 0 ? (
                    <table className="w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="p-2">SellerID</th>
                                <th className="p-2">Product Name</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Quantity</th>
                                
                                <th className="p-2">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.items.map((item, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-2">{item.seller}</td>
                                    <td className="p-2 text-center">{item.name || 'N/A'}</td>
                                    <td className="p-2 text-center">RS {item.price || 'N/A'}</td>

                                    <td className="p-2 text-center">{item.quantity || 'N/A'}</td>
                                   
                                    <td className="p-2 text-center">
                                        {item.image ? (
                                            <img
                                                src={item.image[0]}
                                                alt={item.name || 'Product'}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                        ) : (
                                            'No Image'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No items found in this order.</p>
                )}
            </div>
        </div>
    );
};

export default OrderDetailspage;
