'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const seller_introducepage = () => {
    const router=useRouter();
  return (
    <div className='bg-sky-500'>
         <main className="container mx-auto px-4 py-8 fade-in">
    <section
      className="mb-12 text-center bg-cover rounded-lg shadow-md"
      style={{
        backgroundImage:
          'url("https://storage.googleapis.com/a1aa/image/LhMdH3qAkhK4L9ixaRHH4nYTQI0_i1ebg5WN_A8cT8g.jpg")',
        height: 400
      }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center rounded-lg">
        
        <p className="mb-4 text-white text-3xl italic">
      VOX MARKET is your go-to platform for buying and selling products online. Whether you're a small business owner or an individual looking to sell items, our platform provides the tools and audience you need to succeed. Join our community and start selling today!
     </p>
     <button className='bg-sky-400 text-black py-2 px-8 rounded-2xl font-semibold' onClick={()=>{
        router.push('/seller-signup')
     }}>SIGN UP</button>

      </div>
    </section>
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Step-by-Step Guide
      </h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Step 1: Create an Account
          </h3>
          <p className="mb-4">
            To start selling, you need to create an account. Click on the "Sign
            Up" button on the top right corner and fill in your details.
          </p>
          <img
            alt="Illustration of a person creating an account online"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/ICDqczWp1TYhecUD_ZtBmHFmZ6zCpoH5_hjA94MyIbk.jpg"
            width={300}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Step 2: Set Up Your Profile
          </h3>
          <p className="mb-4">
            Once your account is created, set up your profile by adding a
            profile picture, a bio, and other relevant information.
          </p>
          <img
            alt="Illustration of a person setting up their profile online"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/AN9sqp5RS_PRN0GrEPDUhfIWFc-_zsBhl8IpPyfbDBo.jpg"
            width={300}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Step 3: List Your Products
          </h3>
          <p className="mb-4">
            Go to the "Sell" section and start listing your products. Add
            high-quality images, detailed descriptions, and set your prices.
          </p>
          <img
            alt="Illustration of a person listing products online"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/mRtpxltNWhVBneSrLEEtIB1WwB9BbpkBZBeBWF5qGpU.jpg"
            width={300}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Step 4: Manage Your Orders
          </h3>
          <p className="mb-4">
            Keep track of your orders in the "Orders" section. Ensure timely
            shipping and communicate with buyers if needed.
          </p>
          <img
            alt="Screenshot of the orders management page"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/0Xh1J1tdJjrKnRNHNiybwFJtBk7OdU2RKFQYzvP9EIs.jpg"
            width={300}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Step 5: Receive Payments
          </h3>
          <p className="mb-4">
            Once the order is completed, you will receive payments directly to
            your linked bank account or preferred payment method.
          </p>
          <img
            alt="Screenshot of the payment receipt page"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto shadow-md"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/CHSb5CONFi_tD9cvWQk4BZvKpGcAmfpATTPO5HCsdMg.jpg"
            width={300}
          />
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
        <li>
          Engage with your customers and respond to their queries promptly.
        </li>
        <li>Offer competitive pricing and consider running promotions.</li>
        <li>Ensure timely shipping and provide tracking information.</li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            How do I create an account?
          </h3>
          <p>
            Click on the "Sign Up" button on the top right corner and fill in
            your details to create an account.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            What are the fees for selling?
          </h3>
          <p>
            We charge a small commission on each sale. The exact fee structure
            can be found in the "Fees" section of our website.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            How do I get paid?
          </h3>
          <p>
            Payments are processed directly to your linked bank account or
            preferred payment method once the order is completed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover-grow">
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
