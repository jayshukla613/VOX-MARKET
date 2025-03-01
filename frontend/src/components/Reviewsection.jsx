'use client'
import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'

const Reviewsection = () => {
  return (
    <div >
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <div className="flex items-center mb-4">
            <img
              alt="Profile picture of a smiling woman with short hair"
              className="w-12 h-12 rounded-full mr-4"
              height={60}
              src="https://storage.googleapis.com/a1aa/image/b-HxLmioAUvS4YZuV9vKuemVa8kGdzcbEtwyYVzlu1Y.jpg"
              width={60}
            />
            <div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600">Verified Buyer</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            This product has changed my life! The quality is amazing and the
            customer service is top-notch. Highly recommend!
          </p>
          <div className="flex">
          <span className="text-yellow-500 flex">
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
          <IconStarFilled/>
        </span>
          </div>
        </div>
   
     
    </div>
  )
}

export default Reviewsection
