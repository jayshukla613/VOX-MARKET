'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const paymentpage = () => {
    const router=useRouter();

    

  return (
    <div className=' flex justify-center '>
        <form>
        <div className="mb-6">
  <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
  <div className="space-y-4">
    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-2 border rounded-md"
    />
    <input
      type="email"
      placeholder="Email Address"
      className="w-full p-2 border rounded-md"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full p-2 border rounded-md"
    />
    <input
      type="text"
      placeholder="Street Address"
      className="w-full p-2 border rounded-md"
    />
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="City"
        className="w-1/2 p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="State/Province"
        className="w-1/2 p-2 border rounded-md"
      />
    </div>
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="ZIP/Postal Code"
        className="w-1/2 p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Country"
        className="w-1/2 p-2 border rounded-md"
      />
    </div>
  </div>
</div>
        <div className="text-center">
          <button
         
           
           
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           <Link href="/buyproductpage/paymentmode">submit</Link>
          </button>
        </div>
      </form>
        

      
    </div>
  )
}

export default paymentpage
