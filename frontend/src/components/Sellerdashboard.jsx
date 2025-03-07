import Link from 'next/link'
import React from 'react'
// import Sellerdashboard from Sellerdashboard
import  { useState, useEffect } from "react";


const Sellerdashboard = () => {
  return (
    <div>
        <aside className="w-full md:w-64 bg-white h-auto md:h-screen shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Seller Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="px-4 py-2">
            <Link
              className="text-gray-700 hover:text-gray-900 flex items-center"
              href="/seller/profile"
            >
              
             Seller Account
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              className="text-gray-700 hover:text-gray-900 flex items-center"
              href="/seller/add-product"
            >
              Add Product 
              
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              className="text-gray-700 hover:text-gray-900 flex items-center"
              href="/seller/manage-product"
            >
       
             Manage Order
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              className="text-gray-700 hover:text-gray-900 flex items-center"
              href="/seller/logout"
            >
              
             Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
      
    </div>
  )
}

export default Sellerdashboard;
