'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <div className=''>
        <nav className="bg-blue-800 text-white p-4">
    <div className=" mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Vox Market</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-300">
            Category
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded"
        />
        <button className="bg-black text-white px-8 font-bold py-2 rounded" onClick={() => {
          router.push('/user-login')}}>
          login
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => {
          router.push('/user-signup')
        }}>
          Sign up
        </button>
      </div>
      

    </div>
  </nav>
      
    </div>
  )
}

export default Navbar
