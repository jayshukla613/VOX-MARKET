'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'
import * as yup from "yup";

const validation = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
  address: yup.string().required('address is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  pincode: yup.string().required('pincode is required'),
  country: yup.string().required('country is required')
})

const paymentpage = () => {
  const router = useRouter();

  const formikform = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validation
  });

  console.log(formikform.errors)

  return (
    <div className=' flex justify-center '>
      <form onSubmit={formikform.handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formikform.values.name}
              onChange={formikform.handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.name && formikform.touched.name && (
              <div className="text-red-500">{formikform.errors.name}</div>
            )}
            <input
              type="email"
              name="email"
              value={formikform.values.email}
              onChange={formikform.handleChange}
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.email && formikform.touched.email && (
                <div className="text-red-500">{formikform.errors.email}</div>
              )
            }
            <input
              type="tel"
              name='phone'
              value={formikform.values.phone}
              onChange={formikform.handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.phone && formikform.touched.phone && (
                <div className="text-red-500">{formikform.errors.phone}</div>
              )
            }
            <input
              type="text"
              name="address"
              value={formikform.values.address}
              onChange={formikform.handleChange}
              placeholder="Street Address"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.address && formikform.touched.address && (
                <div className="text-red-500">{formikform.errors.address}</div>
              )
            }
            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                value={formikform.values.city}
                onChange={formikform.handleChange}

                placeholder="City"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.city && formikform.touched.city && (
                  <div className="text-red-500">{formikform.errors.city}</div>
                )

              }
              <input
                type="text"
                name='state'
                value={formikform.values.state}
                onChange={formikform.handleChange}
                placeholder="State/Province"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.state && formikform.touched.state && (
                  <div className="text-red-500">{formikform.errors.state}</div>
                )
              }
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                name="pincode"
                value={formikform.values.pincode}
                onChange={formikform.handleChange}
                placeholder="ZIP/Postal Code"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.pincode && formikform.touched.pincode && (
                  <div className="text-red-500">{formikform.errors.pincode}</div>
                )
              }
              <input
                type="text"
                name="country"
                value={formikform.values.country}
                onChange={formikform.handleChange}
                placeholder="Country"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.country && formikform.touched.country && (
                  <div className="text-red-500">{formikform.errors.country}</div>
                )
              }
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* <Link href="/buyproductpage/paymentmode">submit</Link> */}
            <Link href="">submit</Link>
          </button>
        </div>
      </form>



    </div>
  )
}

export default paymentpage
