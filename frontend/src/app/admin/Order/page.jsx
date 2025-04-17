'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Orderdetailspage = () => {
    const [orders, setOrders] = useState([]);
    const router = useRouter();

    const fetchOrders = async () => {
        try {
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`);
            console.log('Fetched Orders:', result.data);
            setOrders(result.data); // Ensure the backend response contains the correct structure
            toast.success('Orders fetched successfully!');
        } catch (err) {
            console.error('Error fetching orders:', err);
            toast.error('Failed to fetch order data!');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Order Details</h1>
            <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="p-2">Order ID</th>
                        <th className="p-2">Product Image</th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Order Date</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">payment  Method</th>
                        <th className="p-2">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        order.items.map((item, itemIndex) => (
                            <tr key={`${index}-${itemIndex}`} className="border-t">
                                <td className="p-2 text-center">{order._id || 'Unknown Order ID'}</td>
                                <td className="p-2 text-center">
                                    <img
                                        src={item.image[0] || '/placeholder.png'}
                                        alt={item.name || 'No Image'}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="p-2 text-center">{item.name || 'Unknown Product'}</td>
                                <td className="p-2 text-center">{item.quantity || '0'}</td>
                                <td className="p-2 text-center">RS {item.price || '0.00'}</td>
                                <td className="p-2 text-center">
                                    {order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'No Date'}
                                </td>
                                <td className="p-2 text-center">
                                    <span
                                        className={`px-2 py-1 text-sm rounded ${
                                            order.status === 'Delivered'
                                                ? 'bg-green-200 text-green-800'
                                                : 'bg-yellow-200 text-yellow-800'
                                        }`}
                                    >
                                        {order.status || 'Pending'}
                                    </span>
                                </td>
                                <td className="p-2 text-center">{order.paymentMethod || 'Unknown Payment Method'}</td>
                                <td className="p-2 text-center" >
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1  rounded" 
                                    
                                    onClick={() => {
                                        router.push(`/admin/vieworder/${order._id}`, '_blank');
                                    }
                                    }>
                                        View 
                                    </button>
                                </td>
                                    
                                   
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orderdetailspage;
