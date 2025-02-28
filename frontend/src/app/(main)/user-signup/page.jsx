'use client'
import React from 'react'
import { IconBrandGoogle } from '@tabler/icons-react';
import {Form, useFormik } from 'formik';

import *as Yup from 'yup';



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
      onSubmit: (values, {resetForm, setSubmitting }) => {
        console.log(values);
        resetForm();
        setSubmitting(false);
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
      <Form onSubmit={signupform.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            values={values.name}
            onChange={handleChange}

            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First and Last Name"
          />
          {errors.touched && errors.name}
          <p>{errors.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            values={values.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email Address"
          />
          {errors.touched && errors.email}
          <p>{errors.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name='password'
            values={values.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
          {errors.touched && errors.password}
          <p>{errors.password}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
             values={values.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm Password"
          />
          {errors.touched && errors.confirmPassword}
          <p>{errors.confirmPassword}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name='phone'
             values={values.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number (Optional)"
          />
          {errors.touched && errors.phone}
          <p>{errors.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Shipping Address
          </label>
          <input
            type="text"
            name='address'
             values={values.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Street Address, City, State, ZIP Code (Optional)"
          />
          {errors.touched && errors.address}
          <p>{errors.address}</p>
        </div>
        
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2 focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-blue-500">
              Terms and Conditions
            </a>
          </label>
        </div>
       
        <button
          type="submit"
          className="w-full bg-blue-500
           text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
           
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-300">
            <IconBrandGoogle/> Sign Up with Google
          </button>
        </div>
      </Form>
    </div>
  </div>
 

    </div>
  )
}

export default usersignup;