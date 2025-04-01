'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';

// Sidebar Component
const Sidebar = () => (
  <div className="w-64 h-full bg-blue-900 text-white p-4 fixed left-0 top-0 shadow-lg flex flex-col z-50 md:block hidden">
    <h2 className="text-2xl font-bold text-center text-white mb-8">Admin Dashboard</h2>
    <ul className="space-y-4">
      <li>
        <Link
          to="/admindashboard"
          className="block text-lg hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/admin/manage-user"
          className="block text-lg hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200"
        >
          Manage Users
        </Link>
      </li>
      <li>
        <Link
          to="/admin/manage-seller"
          className="block text-lg hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200"
        >
          Manage Sellers
        </Link>
      </li>
    </ul>
  </div>
);

// Dashboard Page
const Dashboard = () => (
  <div className="ml-64 p-8">
    <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
    <p className="mt-4 text-lg">Welcome to the admin dashboard!</p>
  </div>
);

// Users Management Page
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching users!', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="ml-64 p-8">
      <h2 className="text-3xl font-semibold">Manage Users</h2>
      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user._id} className="border-b pb-2">
            <span className="font-semibold">{user.name}</span> - {user.email} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Sellers Management Page
const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sellers');
        setSellers(response.data);
      } catch (error) {
        console.error('There was an error fetching sellers!', error);
      }
    };
    fetchSellers();
  }, []);

  const handleDelete = async (sellerId) => {
    try {
      await axios.delete(`http://localhost:5000/api/sellers/${sellerId}`);
      setSellers(sellers.filter((seller) => seller._id !== sellerId));
      alert('Seller deleted successfully');
    } catch (error) {
      console.error('There was an error deleting the seller!', error);
      alert('Error deleting seller');
    }
  };

  return (
    <div className="ml-64 p-8">
      <h2 className="text-3xl font-semibold">Manage Sellers</h2>
      <ul className="mt-4 space-y-2">
        {sellers.map((seller) => (
          <li key={seller._id} className="border-b pb-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{seller.name}</span> - {seller.shopName}
              </div>
              <div className="space-x-2">
                <Link
                  to={`/sellers/${seller._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleDelete(seller._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Seller Detail Page
const SellerDetail = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/sellers/${id}`);
        setSeller(response.data);
        setLoading(false);
      } catch (error) {
        setError('There was an error fetching the seller details!');
        setLoading(false);
      }
    };
    fetchSellerDetails();
  }, [id]);

  if (loading) {
    return <div className="ml-64 p-8">Loading seller details...</div>;
  }

  if (error) {
    return <div className="ml-64 p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="ml-64 p-8">
      <h2 className="text-3xl font-semibold">Seller Details</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{seller.name}</h3>
        <p><strong>Shop Name:</strong> {seller.shopName}</p>
        <p><strong>Email:</strong> {seller.email}</p>
        <p><strong>Phone:</strong> {seller.phone}</p>
        <p><strong>Address:</strong> {seller.address}</p>
      </div>
    </div>
  );
};

// Main App Component
const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellers/:id" element={<SellerDetail />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
