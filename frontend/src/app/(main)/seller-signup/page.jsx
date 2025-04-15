'use client'
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  businessName: yup.string().required("Business Name is required"),
  businessType: yup.string().required("Select a business type"),
  taxId: yup.string().required("Tax ID is required"),
  storeName: yup.string().required("Store Name is required"),
  storeCategory: yup.string().required("Select a store category"),
  address: yup.string().required("Business address is required"),
  // bankName: yup.string().required("Bank Name is required"),
  // accountNumber: yup.string().matches(/^\d+$/, "Invalid account number").required("Account Number is required"),
  // ifscCode: yup.string().required("IFSC Code is required"),
  terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

 const SellerRegistrationForm =() => {
  const router=useRouter();
  const sellersignup = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      businessName: "",
      businessType: "",
      taxId: "",
      storeName: "",
      storeCategory: "",
      address: ""

    },
    onSubmit: (values,{ resetForm,setSubmitting}) => {
      console.log(values);
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/seller/add`,values)
      .then((result) => {
        toast.success('sellesignup successful')

        resetForm();
        router.push('seller/profile')


      }).catch((err) => {
        console.log(err);
        toast.error('something went wrong');
        setSubmitting(false);
      });

    },

    validationSchema: schema
  })
  //  console.log(sellersignup.errors);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-600 text-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Seller Registration</h2>
        <form className="space-y-4" onSubmit={sellersignup.handleSubmit}>
          {/* Personal Information */}
          <input placeholder="Full Name"
            name="fullName"
            type="text"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.fullName}

            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.fullName && sellersignup.touched.fullName && (
            <div className="text-red-500">{sellersignup.errors.fullName}</div>
          )}


          <input
            name="email"
            type="email"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.email}
            placeholder="Email" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.email && sellersignup.touched.email && (
            <div className="text-red-500">{sellersignup.errors.email}</div>
          )}


          <input
            type="number"
            name="phone"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.phone}


            placeholder="Phone Number" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.phone && sellersignup.touched.phone && (
            <div className="text-red-500">{sellersignup.errors.phone}</div>
          )}


          <input type="password"
            name="password"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.password}

            placeholder="Password" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.password && sellersignup.touched.password && (
            <div className="text-red-500">{sellersignup.errors.password}</div>
          )}



          {/* Business Information */}
          <input placeholder="Business Name"
            name="businessName"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.businessName}
            type="text"

            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.businessName && sellersignup.touched.businessName && (
            <div className="text-red-500">{sellersignup.errors.businessName}</div>
          )}


          <input
            name="businessType"
            placeholder="businessType"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.businessType}
            type="text"
            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black">
            {/* <option value="">Select Business Type</option>
            <option value="Individual">Individual</option>
            <option value="Company">Company</option> */}
          </input>
          {sellersignup.errors.businessType && sellersignup.touched.businessType && (
            <div className="text-red-500">{sellersignup.errors.businessType}</div>
          )}



          <input placeholder="Tax ID"
            name="taxId"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.taxId}
            type="text"


            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.taxId && sellersignup.touched.taxId && (
            <div className="text-red-500">{sellersignup.errors.taxId}</div>
          )}



          {/* Store Details */}
          <input placeholder="Store Name"
            name="storeName"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.storeName}
            type="text"
            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.storeName && sellersignup.touched.storeName && (
            <div className="text-red-500">{sellersignup.errors.storeName}</div>
          )}


          <input placeholder="Store Category"
            name="storeCategory"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.storeCategory}
            type="text"
            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.storeCategory && sellersignup.touched.storeCategory && (
            <div className="text-red-500">{sellersignup.errors.storeCategory}</div>
          )}



          {/* Address */}
          <textarea placeholder="Business Address"
            name="address"
            onChange={sellersignup.handleChange}
            value={sellersignup.values.address}


            className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          {sellersignup.errors.address && sellersignup.touched.address && (
            <div className="text-red-500">{sellersignup.errors.address}</div>
          )}

          {/* Terms & Conditions */}
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-white text-lg">I agree to the Terms & Conditions</span>
          </label>


          {/* Submit Button */}
          <button type="submit" className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full text-lg font-semibold">
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account? <Link href="/seller-login" className="text-blue-300">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default SellerRegistrationForm;