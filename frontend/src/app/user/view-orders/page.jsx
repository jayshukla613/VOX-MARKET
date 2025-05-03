'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ViewOrderPage() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserOrders = async () => {
        const token = localStorage.getItem('user-token');
        if (!token) {
            toast.error('User not logged in!');
            return;
        }

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/user-orders`, {
                headers: { 'x-auth-token': token },
            });
            setOrders(response.data);
        } catch (err) {
            console.error('Error fetching user orders:', err);
            toast.error('Failed to fetch orders!');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserOrders();
    }, []);

    if (isLoading) {
        return <div>Loading orders...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-center text-gray-600">No orders found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-4 text-left">Order ID</th>
                                <th className="p-4 text-left">Order Date</th>
                                <th className="p-4 text-left">Delivery Date</th>
                                <th className="p-4 text-left">Total Price</th>
                                <th className="p-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="border-b hover:bg-gray-50">
                                    <td className="p-4">{order._id}</td>
                                    <td className="p-4">{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <p><strong></strong> {new Date(order.deliveryDate).toLocaleDateString() || 'N/A'}</p>
                                    <td className="p-4">Rs. {order.totalPrice}</td>
                                    <td className="p-4">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
