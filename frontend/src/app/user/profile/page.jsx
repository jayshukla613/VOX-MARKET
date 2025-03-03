'use client'
import Footeruserpage from '@/components/Footeruserpage';
import Sidebaruser from '@/components/Sidebaruser';
import Link from 'next/link';

import React from 'react'

const userProfile = () => {

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
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700" htmlFor="first-name">
                      First Name *
                    </label>
                    <input
                      className="w-full p-2 border rounded-lg"
                      id="first-name"
                      placeholder="Enter First Name"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700" htmlFor="last-name">
                      Last Name *
                    </label>
                    <input
                      className="w-full p-2 border rounded-lg"
                      id="last-name"
                      placeholder="Enter Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    id="email"
                    placeholder="Enter Email"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    className="w-full p-2 border rounded-lg"
                    id="phone"
                    placeholder="Enter Phone Number"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-gray-700" htmlFor="gender">
                    Gender *
                  </label>
                  <select className="w-full p-2 border rounded-lg" id="gender">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    className="bg-green-600 text-white p-2 rounded-lg hover:bg-yellow-500"
                    type="submit"
                  >
                    Update Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footeruserpage />
      </div>
    </div>
  )
}

export default userProfile;