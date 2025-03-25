'use client'
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import *as Yup from 'yup';


const validate =Yup.object({
  name:Yup.string().required('Name is required'),
  email:Yup.string().email('Email is invalid').required('Email is required'),
  message:Yup.string().required('Message is required')
})


export default function ContactHelp() {
 const contactform = useFormik({
  initialValues: {
    name: "",
    email: "",
    message: ""
  },
  onSubmit: (values, { resetForm }) => {
    console.log(values);

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/contactAdd`, values)
      .then((res) => {
        console.log(res.data);
        resetForm();
        toast.success('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
      });

  },
  
  validationSchema:validate
});
console.log(contactform.errors);
    

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="space-y-4" onSubmit={contactform.handleSubmit}>
          <input
            type="text"
            name="name"
            value={contactform.values.name}
            onChange={contactform.handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={contactform.values.email}
            onChange={contactform.handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={contactform.values.message}
            onChange={contactform.handleChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Send Message
           
          </button>
        </form>
       
      </div>

      {/* Help Center */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Help Center</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I track my order?</summary>
            <p className="text-gray-600 mt-2">Log into your account and visit the 'Orders' page.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is your return policy?</summary>
            <p className="text-gray-600 mt-2">We accept returns within 30 days of purchase.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I contact customer support?</summary>
            <p className="text-gray-600 mt-2">Email us at support@yourstore.com or call +1 (555) 123-4567.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
