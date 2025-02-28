'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  bankName: yup.string().required("Bank Name is required"),
  accountNumber: yup.string().matches(/^\d+$/, "Invalid account number").required("Account Number is required"),
  ifscCode: yup.string().required("IFSC Code is required"),
  terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

export default function SellerRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="max-w-2xl w-full bg-gray-600 text-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Seller Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Personal Information */}
          <input {...register("fullName")} placeholder="Full Name" className="w-full rounded-lg border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.fullName?.message}</p>
          
          <input {...register("email")} type="email" placeholder="Email" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.email?.message}</p>
          
          <input {...register("phone")} placeholder="Phone Number" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.phone?.message}</p>
          
          <input {...register("password")} type="password" placeholder="Password" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.password?.message}</p>
          
          {/* Business Information */}
          <input {...register("businessName")} placeholder="Business Name" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.businessName?.message}</p>
          
          <select {...register("businessType")} className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black">
            <option value="">Select Business Type</option>
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
          </select>
          <p className="text-red-500">{errors.businessType?.message}</p>
          
          <input {...register("taxId")} placeholder="Tax ID" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.taxId?.message}</p>
          
          {/* Store Details */}
          <input {...register("storeName")} placeholder="Store Name" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.storeName?.message}</p>
          
          <input {...register("storeCategory")} placeholder="Store Category" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.storeCategory?.message}</p>
          
          {/* Address */}
          <textarea {...register("address")} placeholder="Business Address" className="w-full border-2 border-gray-400 p-2 rounded text-lg font-medium text-black" />
          <p className="text-red-500">{errors.address?.message}</p>
          
          {/* Terms & Conditions */}
          <label className="flex items-center">
            <input type="checkbox" {...register("terms")} />
            <span className="ml-2 text-white text-lg">I agree to the Terms & Conditions</span>
          </label>
          <p className="text-red-500">{errors.terms?.message}</p>
          
          <button type="submit" className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full text-lg font-semibold">Register</button>
        </form>
      </div>
    </div>
  );
}
