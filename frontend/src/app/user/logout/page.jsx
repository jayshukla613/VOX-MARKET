'use client'
import Footeruserpage from '@/components/Footeruserpage'
import Sidebaruser from '@/components/Sidebaruser'
import React from 'react'

<<<<<<< HEAD:frontend/src/app/user/logout/page.jsx
const logout = () => {
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
    <h1 className='text-bold text-black text-5xl'>LAGOUT</h1>
    <p className="mt-6">Are you Sure to logout this account ?</p>
    <button className='bg-green-800 text-white px-16 py-2 mt-6 rounded-3xl'>Yes , Lagout</button>
=======
const Logout = () => {
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      console.log("User logged out");
      // Add actual logout logic here (e.g., remove token, redirect)
    }
  };

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
              <h1 className='font-bold text-black text-5xl'>Logout</h1>
              <p className="mt-6">Are you sure you want to log out of this account?</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <Footeruserpage />
      </div>
>>>>>>> c95c9a25990da5c00999e431777dd7c8bb1f782f:frontend/src/app/user/lagout/page.jsx
    </div>
  );
};

<<<<<<< HEAD:frontend/src/app/user/logout/page.jsx
export default logout
=======
export default Logout;
>>>>>>> c95c9a25990da5c00999e431777dd7c8bb1f782f:frontend/src/app/user/lagout/page.jsx
