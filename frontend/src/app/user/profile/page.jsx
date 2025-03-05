'use client'
import Footeruserpage from '@/components/Footeruserpage';
import Sidebaruser from '@/components/Sidebaruser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const userProfile = () => {
  const [userdata, setuserdata] = useState(null);
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

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <img
              alt="User profile picture"
              className="rounded-full w-24 h-24"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/HEv9_rN3FbmKGTIj9V7z1MXrwTuXDn1ysi2No41PJ_A.jpg"
              width={100}
            />
          </div>
          <div className="text-center mt-4 text-2xl font-semibold">My Account</div>
          <div className="flex mt-8">
            <Sidebaruser />

            <div className="w-3/4 pl-8">
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
            </div>
          </div>
        </div>
        <Footeruserpage />
      </div>
    </div>
  );
};

export default userProfile;
