'use client'
import React from 'react'
import { IconBrandGoogle, IconLoader3, IconSend2 } from '@tabler/icons-react';
import { useFormik } from 'formik';

import *as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';



 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   phone: Yup.number()
   .typeError("That doesn't look like a phone number")
   .positive("A phone number can't start with a minus")
   .integer("A phone number can't include a decimal point")
   .min(8)
   .required('A phone number is required'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
   .min(8, 'Password is too short - should be 8 chars minimum.')
   .required('Password is required'),
   confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Passwords must match'),
   address:Yup.string().required()
 });




const usersignup = () => {

  

  const router=useRouter();

  const signupform = useFormik({
    initialValues:{
      name:'',
      phone:'',
      address:'',
      email: '',
      password: '',
      confirmPassword: ''
      },
      onSubmit:(value,{resetForm, setSubmitting}) => {
        console.log(value);
        axios.post('http://localhost:5000/user/add',value)
        .then((result) => {
          toast.success('user data succesfully save');
          resetForm();
          router.push('/user/profile')
          l

          

          

        }).catch((err) => {
         console.log(err);
         toast.error('error while saving user data');
         setSubmitting(false);
         

          
        });
        
        },
        validationSchema: SignupSchema
    });

  

  return (
    <div className='flex justify-center'>
    
      
   
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
     SIGN UP
    </h2>
    <form onSubmit={signupform.handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
        name='name'
        value={signupform.values.name}
        onChange={signupform.handleChange}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {signupform.errors.name && signupform.touched.name && (
          <div className="text-red-500">{signupform.errors.name}</div>
          )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email address</label>
        <input
          type="email"
          name='email'
          value={signupform.values.email}
          onChange={signupform.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {signupform.errors.email && signupform.touched.email && (
          <div className="text-red-500">{signupform.errors.email}</div>
          )}
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name='password'
          value={signupform.values.password}
          onChange={signupform.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {signupform.errors.password && signupform.touched.password && (
          <div className="text-red-500">{signupform.errors.password}</div>
          )}
        <i className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer" />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700"> ConFirm Password</label>
        <input
          type="password"
          name='confirmPassword'
          value={signupform.values.confirmPassword}
          onChange={signupform.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {signupform.errors.confirmPassword && signupform.touched.confirmPassword && (
          <div className="text-red-500">{signupform.errors.confirmPassword}</div>
          )}
       
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name='address'
          value={signupform.values.address}
          onChange={signupform.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {signupform.errors.address && signupform.touched.address && (
          <div className="text-red-500">{signupform.errors.address}</div>
          )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name='phone'
          value={signupform.values.phone}
          onChange={signupform.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         {signupform.errors.phone && signupform.touched.phone && (
          <div className="text-red-500">{signupform.errors.phone}</div>
          )}
      </div>
     
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms" className="text-gray-600 text-sm">
          I agree to the{" "}
          <Link href="" className="text-blue-500">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="" className="text-blue-500">
            Privacy Policy
          </Link>
        </label>
      </div>
      <button
       disabled={signupform.isSubmitting}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       
        CREATE ACCOUNT
      </button>
    </form>
    <p className="text-center text-gray-600 text-sm mt-4">
      Already have an account?{" "}
      <Link href="/user-login" className="text-blue-500">
        Sign in
      </Link>
    </p>
  </div>
  
  </div>
  );
}

export default usersignup;