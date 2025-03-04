'use client'
import React, { useState,useEffect } from 'react'
import Sellerdashboard from "@/components/Sellerdashboard";

const addproduct = () => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className="flex flex-col md:flex-row">
      <Sellerdashboard/>
      <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
      Add New Product
    </h1>
    <form
      className="bg-white p-6 rounded-lg shadow-lg" 
      
    >
      <div className="mb-4">
        <label
          htmlFor="productName"
          className="block text-gray-700 font-bold mb-2"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter product name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="productDescription"
          className="block text-gray-700 font-bold mb-2"
        >
          Product Description
        </label>
        <textarea
          id="productDescription"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          placeholder="Enter product description"
          defaultValue={""}
        />
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
          htmlFor="subcategory"
          className="block text-gray-700 font-bold mb-2"
        >
          Subcategory
        </label>
        <select
          id="subcategory"
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option>Mobile Phones</option>
          <option>Laptops</option>
          <option>Televisions</option>
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
          id="productImages"
          className="w-full p-2 border border-gray-300 rounded"
          multiple=""
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter product price"
        />
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
          id="quantity"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter quantity available"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sku" className="block text-gray-700 font-bold mb-2">
          SKU
        </label>
        <input
          type="text"
          id="sku"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter product SKU"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter brand name"
        />
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
          id="color"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter color options"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
          Size Options (Optional)
        </label>
        <input
          type="text"
          id="size"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter size options"
        />
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
          htmlFor="shippingDetails"
          className="block text-gray-700 font-bold mb-2"
        >
          Shipping Details
        </label>
        <textarea
          id="shippingDetails"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          placeholder="Enter shipping details"
          defaultValue={""}
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
          id="returnPolicy"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          placeholder="Enter return policy"
          defaultValue={""}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="productFeatures"
          className="block text-gray-700 font-bold mb-2"
        >
          Product Features (Optional)
        </label>
        <textarea
          id="productFeatures"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          placeholder="Enter product features"
          defaultValue={""}
        />
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

export default addproduct
