'use client'
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
const userlogin = () => {
  const login = useFormik({
    initialValues:{

      email:"",
      password:""
    },

    onSubmit:(value)=>{
      console.log(value);
      
    }
  })
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center mt-8">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Sign In
      </h2>
      <form onSubmit={login.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
          id='email'
            onChange={login.handleChange}
            value={login.values.email}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">enter Password</label>
          <input
            id='password'
            onChange={login.handleChange}
            value={login.values.password}
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
        </div>
        <div className="mb-4 text-right">
          <Link href="" className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
          <button type='submit' className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-300">
            <IconBrandGoogleFilled/> Sign In with Google
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default userlogin;