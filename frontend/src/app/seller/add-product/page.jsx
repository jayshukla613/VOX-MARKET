'use client'
import React, { useState, useEffect } from 'react'
import Sellerdashboard from "@/components/Sellerdashboard";
import { Field, useFormik } from 'formik';
import *as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const validationschema = Yup.object().shape({

  name: Yup.string().required("product name is required"),
  price: Yup.number().required("price is required"),
   description: Yup.string().required("description is required").min(20, "description  should be at least 30 characters"),
  // offer:Yup.string().required(" offer is required"),


   image:  Yup.array()


  // category: Yup.string().required(" category is required"),
  // quantity: Yup.number().required("quantity is required"),
  // brand: Yup.string().required(" brand is required"),
  // warranty:Yup.string().required(" warranty is required"),
  // color: Yup.string().required(" color is required"),
  // size: Yup.string().required(" size is required"),

  // material:Yup.string().required(" material is required"),
  // returnpolicy: Yup.string().required(" retunepolicy is required").min(20, " return policy should be at least 20 characters"),
  // feature: Yup.string().required(" feature is required").min(20, " feature should be at least 20 characters")

})
const Addproduct = () => {

  const token = localStorage.getItem('seller-token');

  const addform = useFormik({
    initialValues: {
      // name: "",
      // price: "",
      description: "",
      image: [],
      // offer: "",
      // category: "",
      // quantity: "",
    //  size: "",
      // color: "",
      // brand: "",
      // warranty: "",
      // returnpolicy: "",
      // feature: ""

    },
    onSubmit: (value, { resetForm, setSubmitting }) => {
      console.log(value);
      axios.post('http://localhost:5000/product/add', value, {
        headers: {
          'x-auth-token': token
        }
      })
        .then((result) => {
          console.log(result.data);
          toast.success('data added successfully');
          resetForm();

        }).catch((err) => {
          console.log(err);
          toast.error('data not added');
          setSubmitting(false)

        });
    },
    validationSchema: validationschema
  });

<<<<<<< HEAD
=======
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
>>>>>>> 10a14330f7ec8a4a0b7708b349a77f2688ef4913

  }


  console.log(addform.errors);

  return (
    <div className="flex flex-col md:flex-row">
      <Sellerdashboard />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Add New Product
        </h1>
        <form className="bg-white p-6 rounded-lg shadow-lg"
          onSubmit={addform.handleSubmit} >
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              name='name'
              value={addform.values.name}
              onChange={addform.handleChange}

              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter product name"
            />
            {addform.errors.name && addform.touched.name && (
              <div className="text-red-500">{addform.errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="productDescription"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Description
            </label>
            <textarea
              name='description'
              value={addform.values.description}
              onChange={addform.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter product description"
            />
            {addform.errors.description && addform.touched.description && (
              <div className="text-red-500">{addform.errors.description}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home Appliances</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="productImages"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Images
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileUplaod}
              accept="image/png, image/jpeg"

              className="w-full p-2 border border-gray-300 rounded"
              multiple=""
            />
            {addform.errors.image && addform.touched.image && (
              <div className="text-red-500">{addform.errors.image}</div>
            )}

          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              name='price'
              onChange={addform.handleChange}
              value={addform.values.price}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter product price"
            />
            {
              addform.errors.price && addform.touched.price && (
                <div className="text-red-500">{addform.errors.price}</div>
              )
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="salePrice"
              className="block text-gray-700 font-bold mb-2"
            >
              Sale Price (Optional)
            </label>
            <input
              type="number"
              id="salePrice"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter sale price"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              onChange={addform.handleChange}
              value={addform.values.quantity}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter quantity available"
            />
            {
              addform.errors.quantity && addform.touched.quantity && (
                <div className="text-red-500">{addform.errors.quantity}</div>
              )
            }</div>

          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={addform.values.brand}
              onChange={addform.handleChange}


              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter brand name"
            />
            {
              addform.errors.brand && addform.touched.brand && (
                <div className="text-red-500">{addform.errors.brand}</div>
              )
            }
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Condition</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="new"
                name="condition"
                defaultValue="new"
                className="mr-2"
              />
              <label htmlFor="new" className="mr-4">
                New
              </label>
              <input
                type="radio"
                id="used"
                name="condition"
                defaultValue="used"
                className="mr-2"
              />
              <label htmlFor="used" className="mr-4">
                Used
              </label>
              <input
                type="radio"
                id="refurbished"
                name="condition"
                defaultValue="refurbished"
                className="mr-2"
              />
              <label htmlFor="refurbished">Refurbished</label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dimensions"
              className="block text-gray-700 font-bold mb-2"
            >
              Dimensions (Optional)
            </label>
            <input
              type="text"
              id="dimensions"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter dimensions (Width, Height, Depth)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
              Weight (Optional)
            </label>
            <input
              type="number"
              id="weight"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter weight"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
              Color Options (Optional)
            </label>
            <input
              type="text"
              name='color'
              value={addform.values.color}
              onChange={addform.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter color options"
            /> {
              addform.errors.color && addform.touched.color && (
                <div className="text-red-500">{addform.errors.color}</div>
              )
            }
          </div>
          <div className="mb-4">
            <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
              Size Options (Optional)
            </label>
            <input
              type="text"
              name='size'
              value={addform.values.size}
              onChange={addform.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter size options"
            />
            {
              addform.errors.size && addform.touched.size && (
                <div className="text-red-500">{addform.errors.size}</div>
              )
            }
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
              Tags (Optional)
            </label>
            <input
              type="text"
              id="tags"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter tags (comma-separated)"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="returnPolicy"
              className="block text-gray-700 font-bold mb-2"
            >
              Return Policy
            </label>
            <textarea
              name="returnpolicy"

              value={addform.values.returnpolicy}
              onChange={addform.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter return policy"

            />
            {
              addform.errors.returnpolicy && addform.touched.returnpolicy && (
                <div className="text-red-500">{addform.errors.returnpolicy}</div>
              )
            }


          </div>
          <div className="mb-4">
            <label
              htmlFor="productFeatures"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Features (Optional)
            </label>
            <textarea
              name='feature'
              value={addform.values.feature}
              onChange={addform.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter product features"

            />
            {
              addform.errors.feature && addform.touched.feature && (
                <div className="text-red-500">{addform.errors.feature}</div>
              )
            }
          </div>
          <div className="mb-4">
            <label
              htmlFor="customAttributes"
              className="block text-gray-700 font-bold mb-2"
            >
              Custom Attributes (Optional)
            </label>
            <textarea
              id="customAttributes"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter custom attributes"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="taxClass"
              className="block text-gray-700 font-bold mb-2"
            >
              Tax Class
            </label>
            <select
              id="taxClass"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Taxable</option>
              <option>Non-Taxable</option>
              <option>Exempt</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Availability
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="inStock"
                name="availability"
                defaultValue="inStock"
                className="mr-2"
              />
              <label htmlFor="inStock" className="mr-4">
                In Stock
              </label>
              <input
                type="radio"
                id="outOfStock"
                name="availability"
                defaultValue="outOfStock"
                className="mr-2"
              />
              <label htmlFor="outOfStock" className="mr-4">
                Out of Stock
              </label>
              <input
                type="radio"
                id="preOrder"
                name="availability"
                defaultValue="preOrder"
                className="mr-2"
              />
              <label htmlFor="preOrder">Pre-order</label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={addform.isSubmitting}

              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-700"
            >
              Publish
            </button>
          </div>
        </form>
        <div id="productCards" className="mt-6" />
      </div>

    </div>
  )
}
export default Addproduct
