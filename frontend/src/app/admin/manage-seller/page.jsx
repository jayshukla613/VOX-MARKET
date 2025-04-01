'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ManageSellers() {
  const [sellers, setSellers] = useState([]); // State to store sellers
  const [editingSeller, setEditingSeller] = useState(null); // State for the seller being edited
  const [newName, setNewName] = useState(""); // State for the new name
  const [newEmail, setNewEmail] = useState(""); // State for the new email

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

  // Function to delete a seller
  const deleteSeller = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/seller/delete/${id}`);
      setSellers(sellers.filter((seller) => seller.id !== id)); // Remove seller from state
      toast.success("Seller deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete seller!");
    }
  };

  // Function to open the edit form for a specific seller
  const openEditForm = (seller) => {
    setEditingSeller(seller);
    setNewName(seller.name);
    setNewEmail(seller.email);
  };

  // Function to save the edited seller
  const saveEditedSeller = async () => {
    if (!newName || !newEmail) {
      toast.error("Name and email are required!");
      return;
    }

    try {
      // Update the seller on the server
      await axios.put(`http://localhost:5000/seller/update/${editingSeller.id}`, {
        name: newName,
        email: newEmail,
      });

      // Update the seller locally
      setSellers((prevSellers) =>
        prevSellers.map((seller) =>
          seller.id === editingSeller.id
            ? { ...seller, name: newName, email: newEmail }
            : seller
        )
      );

      toast.success("Seller updated successfully!");
      setEditingSeller(null); // Close the edit form
    } catch (err) {
      console.error(err);
      toast.error("Failed to update seller!");
    }
  };

  // Function to cancel editing
  const cancelEdit = () => {
    setEditingSeller(null);
  };

  // Fetch sellers on component mount
  useEffect(() => {
    fetchSellers();
  }, []);

  useEffect(() => {
    console.log("Sellers data:", sellers); // Debugging: Log the sellers array
  }, [sellers]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Sellers</h1>

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
                <td className="p-3">{seller.name}</td>
                <td className="p-3">{seller.email}</td>
                <td className="p-3">{seller.products}</td>
                <td className="p-3">{seller.revenue}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      seller.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {seller.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openEditForm(seller)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
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

      {/* Edit Seller Form */}
      {editingSeller && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Edit Seller</h2>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={saveEditedSeller}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
