'use client';

import Footeruserpage from '@/components/Footeruserpage';
import Ordercard from '@/components/Ordercard';
import Sidebaruser from '@/components/Sidebaruser';
import React from 'react';

const ViewOrder = () => {
  
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
        <div className="flex mt-8">
          {/* Sidebar */}
          <Sidebaruser />

          <div className="max-w-7xl mx-auto p-4 grid grid-cols-3 ">
            {/* Orders Section */}
            <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Order #12345</h2>
          <span className="text-sm text-gray-500">2023-10-01</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Status:
            <span className="text-green-500">Shipped</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Payment:
            <span className="text-green-500">Paid</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Shipping Address: 123 Main St, Springfield
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Total: $150.00</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Items:</span>
          <ul className="list-disc list-inside">
            <li>Product 1 (x2)</li>
            <li>Product 2 (x1)</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Delivery Date: 2023-10-05
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onclick="showOrderDetails()"
          >
            View Details
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Reorder
          </button>
        </div>
      </div>
      {/* Repeat Order Card for each order */}
      {/* Order Card */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Order #12346</h2>
          <span className="text-sm text-gray-500">2023-09-25</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Status:
            <span className="text-yellow-500">Processing</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Payment:
            <span className="text-green-500">Paid</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Shipping Address: 123 Main St, Springfield
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Total: $75.00</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Items:</span>
          <ul className="list-disc list-inside">
            <li>Product 3 (x1)</li>
            <li>Product 4 (x2)</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Delivery Date: 2023-09-30
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onclick="showOrderDetails()"
          >
            View Details
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Reorder
          </button>
        </div>
      </div>
      {/* Repeat Order Card for each order */}
      {/* Order Card */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Order #12347</h2>
          <span className="text-sm text-gray-500">2023-09-20</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Status:
            <span className="text-red-500">Cancelled</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Payment:
            <span className="text-red-500">Failed</span>
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">
            Shipping Address: 123 Main St, Springfield
          </span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Total: $200.00</span>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Items:</span>
          <ul className="list-disc list-inside">
            <li>Product 5 (x1)</li>
            <li>Product 6 (x3)</li>
          </ul>
        </div>
        <div className="mb-2">
          <span className="text-sm text-gray-600">Delivery Date: N/A</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onclick="showOrderDetails()"
          >
            View Details
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Reorder
          </button>
        </div>
      </div>
      {/* Repeat Order Card for each order */}
    </div>
    {/* Detailed Order View Modal */}
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75  items-center justify-center "
      id="order-details-modal"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Order #12345 Details</h2>
          <button
            className="text-gray-500"
            onclick="document.getElementById('order-details-modal').classList.add('hidden')"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Items Ordered</h3>
          <div className="flex items-center mb-2">
            <img
              alt="Image of Product 1"
              className="w-12 h-12 mr-4"
              height={50}
              src="https://storage.googleapis.com/a1aa/image/HY2EHR1U2XVFrQcOg6AJb0fuMjtU9dziGme2GkzeAYo.jpg"
              width={50}
            />
            <div>
              <p className="text-sm">Product 1</p>
              <p className="text-sm text-gray-600">Quantity: 2</p>
              <p className="text-sm text-gray-600">Price: $50.00</p>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <img
              alt="Image of Product 2"
              className="w-12 h-12 mr-4"
              height={50}
              src="https://storage.googleapis.com/a1aa/image/9pnZoSbj6tFIH-TKsy0dGDsfFgrex-SVxuliISjBxCw.jpg"
              width={50}
            />
            <div>
              <p className="text-sm">Product 2</p>
              <p className="text-sm text-gray-600">Quantity: 1</p>
              <p className="text-sm text-gray-600">Price: $50.00</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Shipping Details</h3>
          <p className="text-sm text-gray-600">Shipping Method: Standard</p>
          <p className="text-sm text-gray-600">Tracking Number: 123456789</p>
          <p className="text-sm text-gray-600">Delivery Estimate: 2023-10-05</p>
          <p className="text-sm text-gray-600">
            Current Status: Out for Delivery
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Payment Information</h3>
          <p className="text-sm text-gray-600">
            Payment Method: **** **** **** 1234
          </p>
          <p className="text-sm text-gray-600">Payment Status: Paid</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Reorder
          </button>
        </div>
            

            {/* Footer */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <Footeruserpage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewOrder;
