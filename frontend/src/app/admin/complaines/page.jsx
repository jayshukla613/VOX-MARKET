'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const complainpage = () => {
    const [complain, setComplain] = useState([]); // Initialize as an empty array

    const fetchdata = async () => {
        try {
            const result = await axios.get('http://localhost:5000/contact/getall');
            setComplain(result.data);
            
            
        } catch (err) {
            console.log(err);
            toast.error("Failed to fetch user data!");
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

  return (
    <div>


      
        <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">complaines</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {complain.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="p-2 text-center">{user.name}</td>
                            <td className="p-2 text-center">{user.email}</td>
                            <td className="p-2 text-center">{user.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default complainpage
