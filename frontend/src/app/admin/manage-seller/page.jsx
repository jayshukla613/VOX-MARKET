'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DisplaySellers() {
  const [sellers, setSellers] = useState([]); // State to store sellers
  const router = useRouter(); // For navigation

  // Function to fetch sellers from the server
  const fetchSellers = async () => {
    try {
      const result = await axios.get("http://localhost:5000/seller/getall");
      setSellers(result.data); // Set the fetched sellers in state
      toast.success("Sellers fetched successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch sellers!");
    }
  };

  // Fetch sellers on component mount
  useEffect(() => {
    fetchSellers();
  }, []);

  // Function to handle "View" button click
  const getSellerDetails = (id) => {

    
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sellers List</h1>

      {/* Sellers Table */}
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
            {sellers.map((seller) => (
              <tr key={seller.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{seller.name || "N/A"}</td>
                <td className="p-3">{seller.email || "N/A"}</td>
                <td className="p-3">{seller.products || 0}</td>
                <td className="p-3">{seller.revenue || 0}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      seller.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {seller.status || "Inactive"}
                  </span>
                </td>
                <td className="p-3">
                <button onClick={fetchSellerDetails}>View Seller</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
