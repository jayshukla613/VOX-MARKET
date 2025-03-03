'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SellerLogin = () => {
  const router = useRouter();
  const sellerlogin = useFormik({
      initialValues:{
  
        email:"",
        password:""
      },
  
      onSubmit:(value)=>{
        console.log(value);

        axios.post('http://localhost:5000/seller/authenticate',value)
      .then((result) => {
        toast.success('login succesfull')
        console.log(result.data?.token);
        localStorage.setItem('token', result.data?.token);
        router.push('/seller/profile');
        
        

        
      }).catch((err) => {
        console.log(err);
        toast.error('login failed')
        
      });


        
      }
    })
  return (
    <div className='flex justify-center p-8'>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex">
    <div className="w-1/2 p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">WELCOME TO VOX MARKET</h1>
      <p className="mb-8">
        Please make sure to follow the website rules and guidelines. Contact the
        US  for any queries or support.
      </p>
      
    </div>
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6 text-center">SELLER LOGIN</h2>
      <form onSubmit={sellerlogin.handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            <i className="fas fa-user"></i>
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name='email'
            type="email"
            value={sellerlogin.values.email}
            onChange={sellerlogin.handleChange}

            placeholder="Username"
            
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="******************"
            type="password"
            name='password'
            value={sellerlogin.values.password}
            onChange={sellerlogin.handleChange}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="inline-flex items-center">
            <input className="form-checkbox text-indigo-600" type="checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <Link
            className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
            href=""
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  </div>

    </div>
  )
}
export default SellerLogin
