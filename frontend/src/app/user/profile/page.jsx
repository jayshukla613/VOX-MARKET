'use client'
import Footeruserpage from '@/components/Footeruserpage';
import Sidebaruser from '@/components/Sidebaruser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const userProfile = () => {
  const [userdata, setuserdata] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const token = typeof window !== 'undefined' ? localStorage.getItem('user-token') : null;

  const getProfileData = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getdetails`, {
      headers: { 'x-auth-token': token }
    })
      .then((result) => {
        console.log("API Response:", result.data);
        setuserdata(result.data);
      })
      .catch((err) => console.log("Error fetching profile data:", err));
  };

  useEffect(() => {
    if (token) getProfileData();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
          
          <div className="flex mt-8">
            <Sidebaruser />

            {/* <div className="w-3/4 pl-8">
              {userdata ? (
                <div>
                  <h1>{userdata._id}</h1>
                  <h1>{userdata.name}</h1>
                  <h1>{userdata.email}</h1>
                  <h1>{userdata.phone}</h1>
                </div>
              ) : (
                <h2>Loading...</h2>
              )}
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    alt="Profile picture of the user"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="https://placehold.co/50x50"
                    width={50}
                  />
                  <div>
                    <h2 className="text-lg font-semibold">Upload a New Photo</h2>
                   
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                  Update
                </button>
              </div>
              <h3 className="text-xl font-semibold mb-4">Change User Information here</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      type="text"
                      
                      value={userdata.name}
                      onChange={(e) => setuserdata({ ...userdata, name: e.target.value })}

                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      type="email"
                     
                      value={userdata.email}
                      onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}
                      
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address*
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    type="text"
                    
                    value={userdata.address}
                    
                    onChange={(e) => setuserdata({ ...userdata, address: e.target.value })}

                   
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      phone number
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      type="number"
                    
                      value={userdata.phone}
                      onChange={(e) => setuserdata({ ...userdata, phone: e.target.value })}
                      

                      
                    />
                  </div>
                 
                </div>
                
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  type="submit"
                >
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

export default userProfile;
