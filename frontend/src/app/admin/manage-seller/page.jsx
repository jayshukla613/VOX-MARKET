'use client'

import { useState } from "react";

const sellersData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", products: 25, revenue: "$5000" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", products: 10, revenue: "$1200" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Active", products: 30, revenue: "$7500" },
];

export default function ManageSellers() {
  const [sellers, setSellers] = useState(sellersData);
  const [search, setSearch] = useState("");

  const deleteSeller = (id) => {
    setSellers(sellers.filter((seller) => seller.id !== id));
  };

  const toggleStatus = (id) => {
    setSellers(
      sellers.map((seller) =>
        seller.id === id
          ? { ...seller, status: seller.status === "Active" ? "Inactive" : "Active" }
          : seller
      )
    );
  };

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Sellers</h1>
      
      <input
        type="text"
        placeholder="Search sellers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Products</th>
              <th className="p-3 border-b">Revenue</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSellers.map((seller) => (
              <tr key={seller.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{seller.name}</td>
                <td className="p-3">{seller.email}</td>
                <td className="p-3">{seller.products}</td>
                <td className="p-3">{seller.revenue}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-sm rounded ${
                    seller.status === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  }`}>
                    {seller.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => toggleStatus(seller.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Toggle Status
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button 
                    onClick={() => deleteSeller(seller.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
