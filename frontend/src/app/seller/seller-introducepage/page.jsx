'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const seller_introducepage = () => {
    const router=useRouter();
  return (
    <div className=''>
         <main className="container mx-auto px-4 py-8 fade-in">

    <div className="  grid grid-cols-2    bg-lime-500 opacity-90  p-6 rounded-lg shadow-lg">
    <div className=" md:text-left md:mr-6">
      <h1 className="text-3xl font-bold text-white mb-2">
        Become a VOX MARKET.IN seller
      </h1>
      <p className="mb-4 mt-8 text-2xl text-white   italic">
      VOX MARKET is your go-to platform for buying and selling products online. Whether you're a small business owner or an individual looking to sell items, our platform provides the tools and audience you need to succeed. Join our community and start selling today!
     </p>
     <button className='bg-amber-300 mt-10 text-black py-2 px-8 rounded-2xl font-semibold' onClick={()=>{
        router.push('/seller-signup')
     }}>SIGN UP</button>
    </div>
    <div className="mt-6 p-6 md:mt-0">
      <div className="relative">
        <img
          alt="A welcome message for users with a green background"
          className="rounded-full border-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/lrzFv4R71c3carfoEZPCkbEOCMbqOvREMtac40zcgeY.jpg"
          width={300}
        />
      </div>
    </div>
  </div>
  <section className="mb-12 mt-16">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">
      Step-by-Step Guide
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          alt="Illustration of a person creating an account online"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md mb-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/WBlaZRTjeidrEl_WaqEETJuzwhAfFDR_2LmTVKxmnrg.jpg"
          width={300}
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Step 1: Create an Account
        </h3>
        <p>
          To start selling, you need to create an account. Click on the "Sign
          Up" button on the top right corner and fill in your details.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          alt="Illustration of a person setting up their profile online"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md mb-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/Fh1plwlnFSg7x-M7oDvOTkJ-ZxZnz_n9KlC0YkYydGY.jpg"
          width={300}
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Step 2: Set Up Your Profile
        </h3>
        <p>
          Once your account is created, set up your profile by adding a profile
          picture, a bio, and other relevant information.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          alt="Illustration of a person listing products online"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md mb-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/I6Pct-vBtqBEhUN_XfIXiN5mcQ7avzOr5eGvsQjsXLM.jpg"
          width={300}
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Step 3: List Your Products
        </h3>
        <p>
          Go to the "Sell" section and start listing your products. Add
          high-quality images, detailed descriptions, and set your prices.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          alt="Screenshot of the orders management page"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md mb-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/HhguvKt931Jx0GHf73vO22q3FOtS3ccyh7OGcXfZlt8.jpg"
          width={300}
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Step 4: Manage Your Orders
        </h3>
        <p>
          Keep track of your orders in the "Orders" section. Ensure timely
          shipping and communicate with buyers if needed.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          alt="Screenshot of the payment receipt page"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md mb-4"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/Tyk9i4_5QnO13jBU0Y8GlVpuD_KqurMI4p1mkFyXWns.jpg"
          width={300}
        />
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Step 5: Receive Payments
        </h3>
        <p>
          Once the order is completed, you will receive payments directly to
          your linked bank account or preferred payment method.
        </p>
      </div>
    </div>
  </section>
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">
      Tips for Successful Selling
    </h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Use high-quality images for your products.</li>
      <li>Write detailed and accurate product descriptions.</li>
      <li>Engage with your customers and respond to their queries promptly.</li>
      <li>Offer competitive pricing and consider running promotions.</li>
      <li>Ensure timely shipping and provide tracking information.</li>
    </ul>
  </section>
  <section>
    <h2 className="text-2xl font-bold mb-4 text-blue-600">
      Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          How do I create an account?
        </h3>
        <p>
          Click on the "Sign Up" button on the top right corner and fill in your
          details to create an account.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          What are the fees for selling?
        </h3>
        <p>
          We charge a small commission on each sale. The exact fee structure can
          be found in the "Fees" section of our website.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          How do I get paid?
        </h3>
        <p>
          Payments are processed directly to your linked bank account or
          preferred payment method once the order is completed.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Can I sell internationally?
        </h3>
        <p>
          Yes, you can sell to customers worldwide. Make sure to check the
          shipping options and costs for international orders.
        </p>
      </div>
    </div>
  </section>
  </main>
      
    </div>
  )
}

export default seller_introducepage
