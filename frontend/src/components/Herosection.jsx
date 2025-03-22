'use client'
import Link from 'next/link'
import React from 'react'

const Herosection = () => {
  return (
    <div>
      <section className="relative bg-white">
    <img
      alt="A stylish outfit displayed on a mannequin in a modern, well-lit store"
      className="absolute inset-0 w-full h-full object-cover "
      src="https://media.istockphoto.com/id/1440135925/photo/doctor-walking-the-streets-waiting-for-call.jpg?s=2048x2048&w=is&k=20&c=1nRuaiNmw7BAi3YdWiV4uSQ3O0h4ySAdbUt0Cl9Hl1o="
    />
    <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col lg:flex-row items-start">
      <div className="lg:w-1/3  p-8 rounded-lg  font-sans  text-left">
        <h2 className="text-4xl font-bold text-white leading-tight">
          Discover the Latest Trends
        </h2>
        <p className="mt-4 text-gray-200 text-lg">
          Shop the latest fashion trends and find your perfect style. Enjoy
          exclusive offers and discounts.
        </p>
        <Link
          className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          href=""
        >
          Shop Now
        </Link>
      </div>
    </div>
  </section>
      
    </div>
  )
}

export default Herosection
