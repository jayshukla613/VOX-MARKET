'use client'
// Frontend (UserManagement.js - React Component)
import React, { useState, useEffect } from 'react';

import useAppContext from "@/context/AppContext";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UserManagement = () => {
    const router = useRouter();

    const { userLoggedIn, logout } = useAppContext();
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', role: '', status: 'Active' });
    const [editingUser, setEditingUser] = useState(null);






    useEffect(() => {
        axios.get('http://localhost:5000/users/').then(res => setUsers(res.data));
    }, []);




    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`).then(() => {
            setUsers(users.filter(user => user._id !== id));
        });
    };

   const removeuser=() =>   {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user-token');
        toast.success('user remove successfully');
    }
   };

    const userdata = (e) => {
        axios.get(`http://localhost:5000/user/getall`)
            .then((result) => {
                setUsers(result.data);


            }).catch((err) => {
                console.log(err);
                toast.error("Failed to fetch user data!");
            });

    }

    useEffect(() => {
        userdata();

    }, []);


    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Admin - Manage Users</h2>

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

                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 text-sm rounded ${user.status === "Active"
                                        ? "bg-green-200 text-green-800"
                                        : "bg-red-200 text-red-800"
                                        }`}
                                >
                                    {user.status || "Inactive"}
                                </span>
                            </td>
                            <td className="p-2 text-center">
                                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2" onClick={() => router.push(`/admin/viewuser/${user._id}`)}>View</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteUser(user._id)}>Delete</button>

                                <button className="bg-red-500 text-white px-3 ml-2 py-1 rounded hover:bg-red-600" onClick={removeuser}>Remove</button>

                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
