'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a company dedicated to providing the best services and
            products to our customers. Our mission is to make your life easier
            and more enjoyable.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link href="" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Make Money with us</h2>
          <ul>
            <li className="mb-2 text-gray-400">
              <Link href="/seller-signup">Sell on Vox Market</Link>
             
            </li>
            <li className="mb-2 text-gray-400">
            <Link href="">Sell under Vox market</Link>
              
            </li>
            <li className="mb-2 text-gray-400">
            <Link href="">supply to Vox market</Link>
              
            </li>
            <li className="mb-2 text-gray-400">
            <Link href=""> Adversite your product</Link>
              
            </li>
          </ul>
        </div>
        {/* Privacy Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Privacy</h2>
          <ul>
            <li className="mb-2">
              <Link href="/about" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li className="mb-2">
              <Link href="" className="text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2025 VOX MARKET. All rights reserved.
      </div>
    </div>
  </footer>
      
    </div>
  )
}

export default Footer
