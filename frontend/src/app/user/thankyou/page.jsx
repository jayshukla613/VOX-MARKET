'use client'

import Link from "next/link";

export default function ManageUser() {
    return (
<div className="bg-gradient-to-r from-blue-500 to-green-500">

<div className="min-h-screen flex flex-col justify-center items-center p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full">
      <img
        alt="A simple illustration of a smiley face with shopping bags"
        className="mb-6 md:mb-0 md:mr-6 w-full md:w-1/2"
        height={300}
        src="https://img.freepik.com/premium-vector/smiling-face-emoji_6735-648.jpg?ga=GA1.1.1740835140.1740818164&semt=ais_hybrid&w=740"
        width={300}
      />
      <div className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          Thank You for Your Purchase!
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          We appreciate your business. If you have any questions, please email
          <Link className="text-blue-500" href="mailto:support@ecommerce.com">
            supportVOXMARKET@Gmail.com
          </Link>
          .
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Thank you for shopping with
          <span className="font-bold text-blue-500">VOX MARKET</span>.
        </p>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          href="/category"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  </div>
  </div>
    );
}