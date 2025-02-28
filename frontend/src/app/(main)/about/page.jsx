'use client'
import React from 'react'



const about = () => {
  return (
    <div className='bg-slate-500'>
      <main className="p-8 space-y-8">
    {/* About Us */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">About Us</h2>
      <p>
        Welcome to E-Shop, your number one source for all things [product, ie:
        electronics, fashion, etc.]. We're dedicated to giving you the very best
        of [product], with a focus on dependability, customer service, and
        uniqueness.
      </p>
    </section>
    {/* Our Mission and Vision */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Our Mission and Vision
      </h2>
      <p>
        Our mission is to provide the best online shopping experience by
        offering high-quality products at competitive prices. Our vision is to
        become the leading e-commerce platform that connects customers with the
        products they love.
      </p>
    </section>
    {/* Why Choose Us */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
      <ul className="list-disc list-inside">
        <li>Wide range of products</li>
        <li>Competitive prices</li>
        <li>Excellent customer service</li>
        <li>Fast and reliable shipping</li>
      </ul>
    </section>
    {/* Our Team */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <img
            alt="Portrait of John Doe, CEO"
            className="rounded-full mx-auto mb-2"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/bbq5E_CnmA8CFvPN4oaGtivhkImWVPwgXlOj8c22w3g.jpg"
            width={150}
          />
          <h3 className="font-bold text-gray-900">John Doe</h3>
          <p className="text-gray-700">CEO</p>
        </div>
        <div className="text-center">
          <img
            alt="Portrait of Jane Smith, CTO"
            className="rounded-full mx-auto mb-2"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/SSTFvecOME0vcpYSI242rVbGth2B_XZBEojUmP4GRxI.jpg"
            width={150}
          />
          <h3 className="font-bold text-gray-900">Jane Smith</h3>
          <p className="text-gray-700">CTO</p>
        </div>
        <div className="text-center">
          <img
            alt="Portrait of Emily Johnson, COO"
            className="rounded-full mx-auto mb-2"
            height={150}
            src="https://storage.googleapis.com/a1aa/image/2NFckSfhLWart9K5Z98Qk2yAuNvab5_NYIUD8ahE8_U.jpg"
            width={150}
          />
          <h3 className="font-bold text-gray-900">Emily Johnson</h3>
          <p className="text-gray-700">COO</p>
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Testimonials</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <p>
            "E-Shop has the best customer service! I always find what I need and
            the delivery is super fast."
          </p>
          <p className="mt-2 font-bold text-gray-900">- Sarah Williams</p>
        </div>
        <div className="p-4 border rounded">
          <p>
            "I love shopping at E-Shop. They have a great selection and the
            prices are unbeatable."
          </p>
          <p className="mt-2 font-bold text-gray-900">- Michael Brown</p>
        </div>
      </div>
    </section>
    {/* Achievements & Media Mentions */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Achievements &amp; Media Mentions
      </h2>
      <ul className="list-disc list-inside">
        <li>Featured in TechCrunch</li>
        <li>Winner of the Best E-commerce Platform Award 2022</li>
        <li>Recognized by Forbes as a top startup</li>
      </ul>
    </section>
    {/* Social Responsibility and Sustainability */}
    <section className="bg-white p-6 rounded shadow fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Social Responsibility and Sustainability
      </h2>
      <p>
        At E-Shop, we are committed to making a positive impact on society and
        the environment. We actively participate in various social
        responsibility initiatives and strive to adopt sustainable practices in
        our operations.
      </p>
    </section>
  </main>
     
    </div>
  )
}

export default about;