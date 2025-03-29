'use client'
import useCartContext from '@/context/CartContext'
import { IconPlus, IconTagPlus, IconTrashFilled } from '@tabler/icons-react'
import React from 'react'

const Ordercard = ({ item, removeItem }) => {

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
        <div className="flex items-center">
          <img
            alt="Image of a stylish red t-shirt"
            className="w-20 h-20 object-cover rounded-lg"
            height={100}
            src={item.image}
            width={100}
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Size: {item.size}</p>
            <p className="text-gray-600">Color: {item.color}</p>

          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <div className="flex items-center border rounded-lg">
            <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
              <i className="fas fa-minus"></i>
            </button>
            <span className="px-4 py-1">{item.stock} </span>

            <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
              <IconPlus size={24} />
            </button>
          </div>
          <p className="ml-4 text-lg font-semibold">Rs.{item.price.toFixed(2)}</p>

          <button className="ml-4 text-red-600 hover:text-red-800" onClick={() => removeItem(item._id)}>

            <IconTrashFilled size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ordercard
