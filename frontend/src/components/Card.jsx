import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'

const Card = (props) => {
  return (
    <div>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img
      alt="A detailed image of the product"
      className="w-full"
      
      src="https://storage.googleapis.com/a1aa/image/17cawRvM-uGkRRqpn3KKuyybSS4uitNxkoRL5K59J3I.jpg"
     
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Product Name</div>
      <p className="text-gray-700 mb-4">
       Experience the latest technology with our modern electronic gadget. It offers high performance and sleek design.
      </p>
      <p className="text-gray-700 text-base">$99.99</p>
      <p className="text-green-500 font-semibold mb-4">
       20% OFF
      </p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 flex">
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
        </span>
        <span className="ml-2 text-gray-600">(4.5)</span>
      </div>
    </div>
    <div className="px-6 pt-4 pb-2 flex justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Buy
      </button>
    </div>
  </div>


      
    </div>
  )
}

export default Card
