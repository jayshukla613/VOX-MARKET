'use client'
// Frontend (UserManagement.js - React Component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', role: '', status: 'Active' });
    const [editingUser, setEditingUser] = useState(null);
    let [getuserdetails, setGetuserdetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
    }, []);

    
    const updateUser = () => {
        axios.put(`http://localhost:5000/users/${editingUser._id}`, form).then(res => {
            setUsers(users.map(user => user._id === editingUser._id ? res.data : user));
            setEditingUser(null);
            setForm({ name: '', email: '', role: '', status: 'Active' });
        });
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`).then(() => {
            setUsers(users.filter(user => user._id !== id));
        });
    };

    const editUser = (user) => {
        setEditingUser(user);
        setForm(user);
    };

    const userdata = (e)=>{
        axios.get(`http://localhost:5000/user/getall`)
        .then((result) => {
            setUsers(result.data);
            toast.success("User data fetched successfully!");
            
        }).catch((err) => {
            console.log(err);
            toast.error("Failed to fetch user data!");
        });

    }

    useEffect(() => {
        userdata();
    }, []);

   getuserdetails = (id) => {
        axios.get(`http://localhost:5000/user/getbyid/${id}`)
            .then((result) => {
                setForm(result.data);
                toast.success("User details fetched successfully!");
            }).catch((err) => {
                console.log(err);
                toast.error("Failed to fetch user details!");
            });
    }
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Admin - Manage Users</h2>
            <div className="grid grid-cols-4 gap-4 mb-4">
                {/* <input className="p-2 border border-gray-300 rounded" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                <input className="p-2 border border-gray-300 rounded" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <select name="role" className="p-2 border border-gray-300 rounded" value={form.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                    <option value="Seller">Seller</option>
                </select>
                <select name="status" className="p-2 border border-gray-300 rounded" value={form.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select> */}
                {/* {editingUser ? (
                    <button className="col-span-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={updateUser}>Update User</button>
                ) : (
                    <button className="col-span-4 bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={addUser}>Add User</button>
                )} */}
            </div>
            <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="p-2 text-center">{user.name}</td>
                            <td className="p-2 text-center">{user.email}</td>
                            <td className="p-2 text-center">{user.role}</td>
                            <td className="p-2 text-center">{user.status}</td>
                            <td className="p-2 text-center">
                                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2" onClick={() => editUser(user)}>Edit</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
