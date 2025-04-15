'use client'
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandInstagramFilled } from '@tabler/icons-react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
const ISSERVER = typeof window === 'undefined';

const Userlogin = () => {
  const router=useRouter();

  const fetchCart = (token) => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cart/getbyuser`, {
          headers: {
              'x-auth-token': token
          }
      })
      .then((result) => {
          console.log(result.data);
          localStorage.setItem('cartItems', JSON.stringify(result.data.cartItems));
      }).catch((err) => {
          console.log(err);
      });
  }

  const login = useFormik({
    initialValues:{

      email:"",
      password:""
    },

    onSubmit:(value)=>{
      console.log(value);

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`,value)
      .then((result) => {
        toast.success('login succesfull')
        console.log(result.data?.token);
        !ISSERVER && localStorage.setItem('user-token', result.data?.token);
        fetchCart(result.data?.token);
        router.push('/user/profile');
      }).catch((err) => {
        console.log(err);
        toast.error('login failed')
        
      });
      
    }
  })
  return (
    <div className=' flex items-center justify-center p-8'>
    <div className="p-8 rounded-lg shadow-lg flex max-w-4xl w-full">
    <div className="bg-blue-500 text-white p-8 rounded-l-lg flex flex-col justify-center items-center w-1/2">
      <h1 className="text-4xl font-bold mb-4">Hello, Welcome!</h1>
      <p className="mb-4">Don't have an account?</p>
      <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-blue-500 transition duration-300" onClick={()=>{
        router.push('/user-signup')
      }}>
        Register
      </button>
    </div>
    <div className="p-8 w-1/2">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4" onSubmit={login.handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="email"
            value={login.values.email}
            onChange={login.handleChange}
            placeholder="Email"
            className="w-full p-4 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            value={login.values.password}
            onChange={login.handleChange}
            placeholder="Password"
            className="w-full p-4 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="text-right">
          <Link href="" className="text-sm text-gray-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <button type='submit' className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-500 mb-4">or login with social platforms</p>
        <div className="flex justify-center space-x-4">
          <Link href="" className="text-gray-500 hover:text-gray-700">
            <IconBrandGoogleFilled></IconBrandGoogleFilled>
          </Link>
          <Link href="" className="text-gray-500 hover:text-gray-700">
           <IconBrandFacebookFilled></IconBrandFacebookFilled>
          </Link>
          <Link href="" className="text-gray-500 hover:text-gray-700">
            <IconBrandInstagramFilled></IconBrandInstagramFilled>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Userlogin;