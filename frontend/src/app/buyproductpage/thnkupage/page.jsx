import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full'>
        <div className="bg-white shadow-lg rounded-lg p-8 text-center ">
    <h1 className="thank-you-text text-4xl text-blue-500 mb-4">Thank you !</h1>
    <p className="text-gray-500 mb-6">
      Thanks for shopping with us. You should receive a confirmation email soon.
    </p>
    <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-300">
  <Link href="/"> Go Home</Link>
    </button>
    <div className="mt-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-2 rounded-b-lg">
      <p className="text-gray-500">Enjoy your shopping experience with us!</p>
    </div>
  </div>
      
    </div>
  )
}

export default page
