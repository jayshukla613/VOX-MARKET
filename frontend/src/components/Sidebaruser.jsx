'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Sidebaruser = () => {
    const router=useRouter();
  return (
    <div>
         <div className="mx-auto p-6">
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500" onClick={()=>{
                router.push('/user/profile')
              }}>
                Personal Information
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-200 p-2 rounded-lg hover:bg-yellow-500" onClick={()=>{
                router.push('/user/view-orders')
                
              }}>
                
                My Orders
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-200 p-2 rounded-lg hover:bg-yellow-500">
                Manage Address
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-200 p-2 rounded-lg hover:bg-yellow-500">
                Payment Method
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-200 p-2 rounded-lg hover:bg-yellow-500">
                Password Manager
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-200 p-2 rounded-lg hover:bg-yellow-500" 
              onClick={()=>{
                router.push('/user/lagout')
              }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Sidebaruser
