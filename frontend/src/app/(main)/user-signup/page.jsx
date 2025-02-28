'use client'
import React from 'react'
import { IconBrandGoogle } from '@tabler/icons-react';
import { useFormik } from 'formik';

import *as Yup from 'yup';
import Link from 'next/link';



 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   phoneName: Yup.number()
     .min(3, 'Too Short!')
     .max(12, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
   .min(8, 'Password is too short - should be 8 chars minimum.')
   .required('Password is required'),
   confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Passwords must match'),
   address:Yup.string().required()

 });




const usersignup = () => {

  const signupform = useFormik({
    initialValues: {
      name:'',
      phone:'',
      address:'',
      email: '',
      password: '',
      confirmPassword: ''
      },
      onSubmit: (values) => {
        console.log(values);
        
        },
        validationSchema: SignupSchema
    });

  

  return (
    <div>
    
      
       <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Sign Up
      </h2>
      <form onSubmit={signupform.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
          <input
          id="name"
            type="text"
         
            value={signupform.values.name}
            onChange={signupform.handleChange}

            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First and Last Name"
          />
          {(signupform.touched.name && signupform.errors.name) &&
          <p>{signupform.errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
          id="email"
            type="email"
           
             value={signupform.values.email}
            onChange={signupform.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
          />
         {(signupform.touched.email && signupform.errors.email) &&
          <p>{signupform.errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
          <input
          id="password"
            type="password"
           
            value={signupform.values.password}
            onChange={signupform.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
         {(signupform.touched.password && signupform.errors.password) &&
          <p>{signupform.errors.password}</p>}
        </div>
         <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">confirmPassword</label>
          <input
          id="confirmPassword"
            type="password"
           
            value={signupform.values.confirmPassword}
            onChange={signupform.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="confirm-Password"
          />
         {(signupform.touched.confirmPassword && signupform.errors.confirmPassword) &&
          <p>{signupform.errors.confirmPassword}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
          id="phone"
            type="text"
            name='phone'
              value={signupform.values.phone}
            onChange={signupform.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number (Optional)"
          />
         {(signupform.touched.phone && signupform.errors.phone) &&
          <p>{signupform.errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Shipping Address
          </label>
          <input
          id="address"
            type="text"
            name='address'
            value={signupform.values.address}
            onChange={signupform.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Street Address, City, State, ZIP Code (Optional)"
          />
          {(signupform.touched.address && signupform.errors.address) &&
          <p>{signupform.errors.address}</p>}
        </div>
        
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2 focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-gray-700">
            I agree to the{" "}
            <Link href="" className="text-blue-500">
              Terms and Conditions
            </Link>
          </label>
        </div>
       
        <button
          type='submit'
          className="w-full bg-blue-500
           text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"

           
        >
          Sign 
         </button>
        {/* <div className="mt-4 text-center">
          <button type='submit' className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-300">
            <IconBrandGoogle/> Sign Up with Google
          </button>
        </div> * */}
      </form>
    </div>
  </div>
 

    </div>
  )
}

export default usersignup;