'use client';
import Footeruserpage from '@/components/Footeruserpage';
import Sidebaruser from '@/components/Sidebaruser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userdata, setuserdata] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const token = typeof window !== 'undefined' ? localStorage.getItem('user-token') : null;

  const getProfileData = async () => {
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getdetails`, {
        headers: { 'x-auth-token': token }
      });
      setuserdata(result.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    if (token) getProfileData();
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/user/updatedetails/${userdata._id}`, userdata, {
      headers: { 'x-auth-token': token }
    })
      
      .then((response) => {
        alert('Profile updated successfully!');
        //  getProfileData();
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
      });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
          <div className="flex mt-8">
            <Sidebaruser />
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <h2 className="text-xl font-semibold mb-4">Update Your Information</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userdata.name}
                  onChange={(e) => setuserdata({ ...userdata, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userdata.email}
                  onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={userdata.address}
                  onChange={(e) => setuserdata({ ...userdata, address: e.target.value })}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={userdata.phone}
                  onChange={(e) => setuserdata({ ...userdata, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded mb-4"
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                  Update Information
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footeruserpage />
      </div>
    </div>
  );
};

export default UserProfile;
