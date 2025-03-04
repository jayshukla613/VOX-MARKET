'use client'
import Sellerdashboard from '@/components/Sellerdashboard';
import { IconPlus, IconTrashFilled, IconUserEdit } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const manageproduct = () => {
  const router=useRouter();
  return (
    <div className="flex flex-col md:flex-row">
      <Sellerdashboard/>
      <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
    <div className="flex justify-end mb-4">
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" onClick={
        ()=>{
          router.push('/seller/add-product')

        }
      }>
        
        + Add New Product
      </button>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Image
            </th>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Product Name
            </th>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Price
            </th>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Stock
            </th>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Sold
            </th>
            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="w-1/6 py-3 px-4">
              <img
                alt="Image of Product 1"
                height={100}
                src="https://storage.googleapis.com/a1aa/image/0farZEPS7yeYbpn5FvaBh8tczmMFHsORMXzv-yLtM9Q.jpg"
                width={100}
              />
            </td>
            <td className="w-1/6 py-3 px-4">Product 1</td>
            <td className="w-1/6 py-3 px-4">$10.00</td>
            <td className="w-1/6 py-3 px-4">20</td>
            <td className="w-1/6 py-3 px-4">5</td>
            <td className="w-1/6 col-span-2 py-3 space-x-4 px-4">
              <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
               <IconUserEdit/>
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                <IconTrashFilled/>
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default manageproduct;