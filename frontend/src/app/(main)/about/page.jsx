'use client'
import React from 'react'



const about = () => {
  return (
    <div className='bg-slate-500'>
      <main className="container mx-auto px-6 py-12">
    <section className="mb-12">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">
          About VOX MARKET
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-3xl italic font-serif text-center md:text-left">
              VOX MARKET is your one-stop shop for the latest and greatest in
              electronics, fashion, and home goods. Our mission is to provide
              high-quality products at competitive prices, with a focus on
              customer satisfaction.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              alt="A diverse group of people shopping at VOX MARKET, showcasing a variety of products"
              className="rounded-lg shadow-lg"
              height={400}
              src="https://storage.googleapis.com/a1aa/image/_hu2FYV4JGiwDr3SR26p5CO5CTsX5tCwpZKlH8c31Sw.jpg"
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Mission and Vision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to provide high-quality products at competitive
            prices, with a focus on customer satisfaction. We strive to create a
            seamless shopping experience for our customers, offering a wide
            range of products and exceptional customer service.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700">
            Our vision is to be the leading e-commerce platform, known for our
            commitment to quality, innovation, and customer satisfaction. We aim
            to continuously evolve and adapt to the changing needs of our
            customers, setting new standards in the industry.
          </p>
        </div>
      </div>
    </section>
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Icon representing high-quality products"
            className="w-16 h-16 mx-auto mb-4"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/uFL5nu21C7r7D1V24PKozFxrYHUDBiip7IrbnJw8YDc.jpg"
            width={64}
          />
          <h3 className="text-xl font-bold mb-2">High-Quality Products</h3>
          <p className="text-gray-700">
            We offer a wide range of high-quality products, carefully selected
            to meet the needs and preferences of our customers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Icon representing competitive prices"
            className="w-16 h-16 mx-auto mb-4"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/oLqBALKbLEP9i2qoByT85YrzYmK1wZoUEcpCIWVDX-k.jpg"
            width={64}
          />
          <h3 className="text-xl font-bold mb-2">Competitive Prices</h3>
          <p className="text-gray-700">
            Our prices are competitive, ensuring that you get the best value for
            your money without compromising on quality.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Icon representing exceptional customer service"
            className="w-16 h-16 mx-auto mb-4"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/EN5VB2h0SKfO_JwdVo6dbiAer2c6muRAbioOn2szAa8.jpg"
            width={64}
          />
          <h3 className="text-xl font-bold mb-2">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-700">
            Our customer service team is dedicated to providing you with the
            best possible shopping experience, addressing any concerns or
            questions you may have.
          </p>
        </div>
      </div>
    </section>
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Social Responsibility and Sustainability
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Social Responsibility</h3>
          <p className="text-gray-700">
            At VOX MARKET, we believe in giving back to the community. We are
            committed to ethical business practices and support various social
            initiatives to make a positive impact on society.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
          <p className="text-gray-700">
            We are dedicated to sustainability and environmental responsibility.
            Our efforts include reducing waste, using eco-friendly packaging,
            and promoting sustainable products.
          </p>
        </div>
      </div>
    </section>
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of John Doe, CEO of VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/8biMoA1634yDSXSKZyNbZ-Qw1bIS-zjkFU2GUyAI3WY.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">John Doe</h3>
          <p className="text-gray-600 mb-4">CEO</p>
          <p className="text-gray-700">
            John is the visionary behind VOX MARKET, leading the company with a
            focus on innovation and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of Jane Smith, COO of VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/Smir9_vLEZKh-ktfFCVEzdNaIrHv9Df_0cuFWKxe4ks.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
          <p className="text-gray-600 mb-4">COO</p>
          <p className="text-gray-700">
            Jane ensures that VOX MARKET operates smoothly and efficiently,
            overseeing daily operations and logistics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of Michael Brown, CTO of VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/anKPXG-VASdG-9XAqz7-RZDjFcvusz8xR9pZ1joOCuM.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
          <p className="text-gray-600 mb-4">CTO</p>
          <p className="text-gray-700">
            Michael leads the technology team, driving innovation and ensuring
            that VOX MARKET stays ahead of the curve.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of Emily Davis, CFO of VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/QrwBN53KD-NNuleXgYDJyHyv1C3-i4Ag_GcejWcnrZg.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">Emily Davis</h3>
          <p className="text-gray-600 mb-4">CFO</p>
          <p className="text-gray-700">
            Emily manages the financial health of VOX MARKET, ensuring
            sustainable growth and profitability.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of Sarah Wilson, CMO of VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/0c5-LrAS8Lbpt3KyHpb8qUYWxQzjziEheZ2g1Kt3CSE.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">Sarah Wilson</h3>
          <p className="text-gray-600 mb-4">CMO</p>
          <p className="text-gray-700">
            Sarah is responsible for marketing and brand strategy, ensuring that
            VOX MARKET reaches a wide audience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            alt="Portrait of David Lee, Head of Customer Service at VOX MARKET"
            className="w-24 h-24 mx-auto rounded-full mb-4"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/1bprO3UfKxmIDMAN7zTg_6T86ZHbKm_lVQ8rLl4A7Es.jpg"
            width={150}
          />
          <h3 className="text-xl font-bold mb-2">David Lee</h3>
          <p className="text-gray-600 mb-4">Head of Customer Service</p>
          <p className="text-gray-700">
            David leads our customer service team, ensuring that every customer
            has a positive experience with VOX MARKET.
          </p>
        </div>
      </div>
    </section>
  </main>
     
    </div>
  )
}

export default about;