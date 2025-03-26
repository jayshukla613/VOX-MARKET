'use client'
import React, { useState, useEffect } from 'react'
import Sellerdashboard from '@/components/Sellerdashboard';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const validationschema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  price: Yup.number().required('Price is required'),
  description: Yup.string().required('Description is required').min(20, 'Description should be at least 30 characters'),
  image: Yup.array().required('Image is required'),
  quantity: Yup.number().required('Quantity is required'),
  brand: Yup.string().required('Brand is required'),
  color: Yup.string().required('Color is required'),
  size: Yup.string().required('Size is required'),
  returnpolicy: Yup.string().required('Return policy is required').min(20, 'Return policy should be at least 20 characters'),
  feature: Yup.string().required('Feature is required').min(20, 'Feature should be at least 20 characters')
});

const Addproduct = () => {
  const token = localStorage.getItem('seller-token');

  const addform = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      image: [],
      quantity: '',
      brand: '',
      color: '',
      size: '',
      returnpolicy: '',
      feature: ''
    },
    onSubmit: (value, { resetForm, setSubmitting }) => {
      axios.post('http://localhost:5000/product/add', value, {
        headers: { 'x-auth-token': token }
      })
      .then((result) => {
        toast.success('Data added successfully');
        resetForm();
      })
      .catch((err) => {
        toast.error('Data not added');
        setSubmitting(false);
      });
    },
    validationSchema: validationschema
  });

  console.log(addform.errors);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    addform.setFieldValue('image', files);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <Sellerdashboard />
      <div className='container mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>Add New Product</h1>
        <form onSubmit={addform.handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
          <input type='text' name='name' placeholder='Product Name' value={addform.values.name} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <input type='number' name='price' placeholder='Price' value={addform.values.price} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <textarea name='description' placeholder='Description' value={addform.values.description} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          <input type='file' name='image' onChange={handleFileUpload} multiple className='w-full p-2 mb-4 border' />
          <input type='number' name='quantity' placeholder='Quantity' value={addform.values.quantity} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <input type='text' name='brand' placeholder='Brand' value={addform.values.brand} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <input type='text' name='color' placeholder='Color' value={addform.values.color} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <input type='text' name='size' placeholder='Size' value={addform.values.size} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          <textarea name='returnpolicy' placeholder='Return Policy' value={addform.values.returnpolicy} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          <textarea name='feature' placeholder='Features' value={addform.values.feature} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
