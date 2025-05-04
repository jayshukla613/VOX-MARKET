'use client'
import { useState, useEffect } from "react";
import Sellerdashboard from "@/components/Sellerdashboard";
import axios from "axios";

export default function SellerProfile() {
  const [sellerdata, setsellerdata] = useState(null);
  const [product, setproduct] = useState([]);
  const [orderdata, setorderdata] = useState([]);
  const token = typeof window !== 'undefined' ? localStorage.getItem('seller-token') : null;

  const getsellerProfileData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seller/getdetails`, {
      headers: { 'x-auth-token': token }
    })
      .then((result) => {
        console.log("API Response:", result.data);
        setsellerdata(result.data);
      })
      .catch((err) => console.log("Error fetching profile data:", err));
  };

  useEffect(() => {
    if (token) getsellerProfileData();
    
  }, [token]);

  const fetchproductdata = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyseller`, {
      headers: { 'x-auth-token': token }
    })
      .then((result) => {
        console.log('API Response:', result.data);
        setproduct(result.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) fetchproductdata();
  }, [token]);

  const fetchorderdata = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/seller-orders`, {
      headers: { 'x-auth-token': token }  
      })
      .then((result) => {
        console.log('API Response:', result.data);
        setorderdata(result.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) fetchorderdata();
  }, [token]);





  // Function to truncate product name
  const truncateName = (name, maxLength = 30) => {
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sellerdashboard />
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Seller Account</h1>
        </header>
        {/* Seller Information */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div>
              {sellerdata ? (
                <>
                  <h1 className="text-gray-600 text-xl font-semibold"> Name : {sellerdata.name}</h1>
                  <h1 className="text-gray-600 text-xl font-semibold">Email Account: {sellerdata.email}</h1>
                  <h1 className="text-gray-600 text-xl font-semibold">Phone Number: {sellerdata.phone}</h1>
                  <h1 className="text-gray-600 text-xl font-semibold">Store Name: {sellerdata.storeName}</h1>
                  <h3 className="text-xl font-semibold text-gray-700">Account created: {new Date(sellerdata.createdAt).toLocaleDateString()}</h3>
                  <h1 className="text-gray-600 text-xl font-semibold">Address: {sellerdata.address}</h1>
                </>
              ) : (
                <><h1>Loading...</h1></>
              )}
            </div>
          </div>
        </section>
        {/* Seller Statistics */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold mt-2">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Products Listed</h3>
            <p className="text-2xl font-bold mt-2">{product.length}</p> {/* Display product count */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Orders Received</h3>
            <p className="text-2xl font-bold mt-2">1,234</p>
          </div>
        </section>
        {/* Recent Orders */}
        <section className="mt-6 b p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orderdata.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow-md text-center col-span-3">
                <p className="text-gray-600">No recent orders found.</p>
              </div>
            ) :orderdata.map((order, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Order ID: {order._id}</h4>
                <p className="text-gray-600 mb-2">Customer: {order.customerName}</p>
                <p className="text-gray-600 mb-2">Total Amount: Rs. {order.totalAmount}</p>
                <p className="text-gray-600 mb-2">Status: {order.status}</p>
              </div>
            ))}
          </div>  
             
            
         
        </section>
        {/* Product Listings */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Product Listings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">{truncateName(product.name)}</h4>
                <img
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                  height={200}
                  src={product.image[0]}
                  width={300}
                />
                <p className="text-gray-600 font-bold mb-2">Price:Rs. {product.price} </p>
                <p className="text-gray-600 mb-2 font-bold">Category: {product.category}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

