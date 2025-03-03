'use client'
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const salesData = [
    { month: "Jan", sales: 5000 },
    { month: "Feb", sales: 7000 },
    { month: "Mar", sales: 6500 },
    { month: "Apr", sales: 8000 },
    { month: "May", sales: 12000 },
  ];

  const recentOrders = [
    { id: 201, customer: "Alice Brown", total: "$120", status: "Shipped" },
    { id: 202, customer: "Mark Smith", total: "$200", status: "Pending" },
    { id: 203, customer: "Emma Green", total: "$75", status: "Delivered" },
  ];

  const topProducts = [
    { id: 1, name: "Wireless Headphones", sales: 150 },
    { id: 2, name: "Smart Watch", sales: 120 },
    { id: 3, name: "Gaming Mouse", sales: 90 },
  ];

  const lowStock = [
    { id: 1, name: "USB-C Cable", stock: 3 },
    { id: 2, name: "Laptop Stand", stock: 5 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl mt-2">$45,678</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">New Orders</h2>
          <p className="text-2xl mt-2">38</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Total Customers</h2>
          <p className="text-2xl mt-2">2,345</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Pending Shipments</h2>
          <p className="text-2xl mt-2">14</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="mt-6 p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-bold mb-2">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-bold mb-2">Recent Orders</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top-Selling Products */}
      <div className="mt-6 p-4 bg-white shadow rounded-md">
        <h2 className="text-lg font-bold mb-2">Top-Selling Products</h2>
        <ul>
          {topProducts.map((product) => (
            <li key={product.id} className="p-2 border-b">
              {product.name} - {product.sales} sales
            </li>
          ))}
        </ul>
      </div>

      {/* Low Stock Alerts */}
      <div className="mt-6 p-4 bg-yellow-100 border border-yellow-500 text-yellow-900 rounded-md">
        <h2 className="text-lg font-bold">Low Stock Alerts</h2>
        {lowStock.length > 0 ? (
          <ul className="mt-2">
            {lowStock.map((item) => (
              <li key={item.id} className="p-1">
                ⚠ {item.name} - Only {item.stock} left in stock!
              </li>
            ))}
          </ul>
        ) : (
          <p>No low stock items.</p>
        )}
      </div>
    </div>
  );
}
