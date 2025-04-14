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
  category: Yup.string().required('Category is required'), // Add validation for category
  color: Yup.string().required('Color is required'),
  size: Yup.string().required('Size is required'),
  returnpolicy: Yup.string().required('Return policy is required').min(20, 'Return policy should be at least 20 characters'),
  feature: Yup.string().required('Feature is required').min(20, 'Feature should be at least 20 characters')
});

const Addproduct = () => {

  const handleFileUplaod = (e) => { 
    const file = e.target.files[0];
    if(!file) toast.error('No file selected');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'VoxMarket');
    formData.append('cloud_name', 'drwbpgiun');

    axios.post('https://api.cloudinary.com/v1_1/drwbpgiun/image/upload', formData)
    .then((result) => {
        toast.success('File uploaded successfully');
    }).catch((err) => {
        toast.error('File upload failed');
    });

  }
  const token = localStorage.getItem('seller-token');

  const addform = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      image: [],
      category: '',
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

 

  return (
    <div className='flex flex-col md:flex-row'>
      <Sellerdashboard />
      <div className='container mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>Add New Product</h1>
        <form onSubmit={addform.handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
          <input type='text' name='name' placeholder='Product Name' value={addform.values.name} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          
          <input type='number' name='price' placeholder='Price' value={addform.values.price} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          {
            addform.errors.price && <p className='text-red-500'>{addform.errors.price}</p>
          }
          <textarea name='description' placeholder='Description' value={addform.values.description} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          {
            addform.errors.description && <p className='text-red-500'>{addform.errors.description}</p>
          }
          <input type='file' name='image' onChange={handleFileUplaod} multiple className='w-full p-2 mb-4 border' />
          {
            addform.errors.image && <p className='text-red-500'>{addform.errors.image}</p>
          }
          <input type='number' name='quantity' placeholder='Quantity' value={addform.values.quantity} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          {
            addform.errors.quantity && <p className='text-red-500'>{addform.errors.quantity}</p>
          }
          <input type='text' name='brand' placeholder='Brand' value={addform.values.brand} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          {
            addform.errors.brand && <p className='text-red-500'>{addform.errors.brand}</p>
          }
          <input type='text' name='color' placeholder='Color' value={addform.values.color} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          {
            addform.errors.color && <p className='text-red-500'>{addform.errors.color}</p>
          }
          <input type='text' name='size' placeholder='Size' value={addform.values.size} onChange={addform.handleChange} className='w-full p-2 mb-4 border' />
          {
            addform.errors.size && <p className='text-red-500'>{addform.errors.size}</p>
          }
          <textarea name='returnpolicy' placeholder='Return Policy' value={addform.values.returnpolicy} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          {
            addform.errors.returnpolicy && <p className='text-red-500'>{addform.errors.returnpolicy}</p>
          }
          <textarea name='feature' placeholder='Features' value={addform.values.feature} onChange={addform.handleChange} className='w-full p-2 mb-4 border'></textarea>
          {
            addform.errors.feature && <p className='text-red-500'>{addform.errors.feature}</p>
          }
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category" // Bind the category field to Formik
              value={addform.values.category}
              onChange={addform.handleChange}
              onBlur={addform.handleBlur} // Handle blur for validation
              className={`w-full p-2 border border-gray-300 rounded mt-1 ${
                addform.touched.category && addform.errors.category ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
              <option value="toys">Toys</option>
              <option value="automotive">Automotive</option>
              <option value="books">Books</option>
              <option value="music">Music</option>
              <option value="grocery">Grocery</option>
            </select>
            {addform.touched.category && addform.errors.category && (
              <p className='text-red-500'>{addform.errors.category}</p>
            )}
          </div>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
