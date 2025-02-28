import React from 'react'

const Herosection1 = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Discover the Best Products
        </h1>
        <p className="mt-4 text-white">
          Find the best products at unbeatable prices. Shop now and enjoy
          exclusive offers!
        </p>
        <div className="mt-2 text-lg text-pink-300">
       Limited time offer: 20% off!
      </div>
        <a
          className="mt-6 inline-block bg-white text-blue-600 text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200"
          href="#"
        >
          Shop Now
        </a>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          alt="A variety of high-quality products displayed in an attractive layout"
          className="w-full rounded-lg shadow"
          height={400}
          src="https://storage.googleapis.com/a1aa/image/5DzAJrhgNVgf4HKfvhIadIgouOIb4M7Yn3Ue6pEL2Us.jpg"
          width={600}
        />
      </div>
    </div>
  </section>
      
    </div>
  )
}

export default Herosection1
