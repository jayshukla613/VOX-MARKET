'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';

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

    const redirectToGmail = (email) => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Complaints</th>
                    </tr>
                </thead>
                <tbody>
                    {complain.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="p-2 text-center">{user.name}</td>
                            <td className="p-2 text-center">
                                <button
                                    className="text-blue-500 underline"
                                    onClick={() => redirectToGmail(user.email)}
                                >
                                    {user.email}
                                </button>
                            </td>
                            <td className="p-2 text-center">{user.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default complainpage;
