'use client'
import Adminsidebar from '@/components/Adminsidebar'
import React from 'react'

const Admindashboard = () => {
  return (
    <div>
       <div className="flex h-screen">
        <Adminsidebar/>
        <div className="flex-1 p-10">
      <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-users text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p className="text-gray-600">1,234</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-user-tie text-green-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Sellers</h2>
              <p className="text-gray-600">567</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fas fa-box text-yellow-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Products</h2>
              <p className="text-gray-600">3,456</p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <i className="fas fa-shopping-cart text-red-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Orders</h2>
              <p className="text-gray-600">789</p>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-chart-line text-purple-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Revenue</h2>
              <p className="text-gray-600">$123,456</p>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <i className="fas fa-chart-pie text-indigo-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Total Profit</h2>
              <p className="text-gray-600">$45,678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Admindashboard
