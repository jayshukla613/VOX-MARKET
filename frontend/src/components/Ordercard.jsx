'use client'
import useCartContext from '@/context/CartContext'
import { IconMinus, IconPlus, IconTrashFilled } from '@tabler/icons-react'
import React from 'react'

const Ordercard = ({ item, removeItem, addItemToCart, calculateTotalAmount }) => {

  return (
    <div>

      <main className="container mx-auto px-6 py-8">

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center">
                  <img alt="Product image of a stylish modern chair" className="w-20 h-20 object-cover rounded" src={item.image} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Category:{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-gray-600 hover:text-gray-800"
                      onClick={() => removeItem(item._id)}
                    ><IconMinus /></button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button className="px-3 py-1 text-gray-600 hover:text-gray-800" onClick={() => addItemToCart(item)}><IconPlus /></button>
                  </div>
                  <span className="text-gray-800 font-semibold ml-4"> RS: {item.price}</span>
                  <button className="ml-4 text-red-600 hover:text-red-800" onClick={() => removeItem(item._id)}>
                    <IconTrashFilled />
                  </button>
                </div>
              </div>
              


            </div>
          </div>
         

        </div>
      </main>

      {/* <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
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
            <button className="px-2 py-1 text-gray-600 hover:text-gray-800" onClick={() => removeItem(item._id)}>
              <IconMinus/>
            </button>
            <span className="px-4 py-1">{item.quantity}</span>

            <button className="px-2 py-1 text-gray-600 hover:text-gray-800" onClick={() => addItemToCart(item)}>
              <IconPlus size={24} />
            </button>
          </div>
          <p className="ml-4 text-lg font-semibold">Rs.{item.price.toFixed(2)}</p>

          <button className="ml-4 text-red-600 hover:text-red-800" onClick={() => removeItem(item._id)}>

            <IconTrashFilled size={24} />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Ordercard
