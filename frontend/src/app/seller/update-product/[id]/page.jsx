'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    offer: '',
    description: '',
    image: '',
    stock: '',
  });

  // Fetch the product details on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
        setProduct(res.data);
        setFormData({
          name: res.data.name,
          price: res.data.price,
          offer: res.data.offer,
          description: res.data.description,
          image: res.data.image,
          stock: res.data.stock,
        });
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to load product details.');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:5000/product/update/${id}`, formData);
      toast.success('Product updated successfully!');
      router.push('/seller/products'); // Redirect to the seller's product list
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product.');
    }
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-bold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-bold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        {/* Offer Price */}
        <div>
          <label className="block font-bold mb-2">Offer Price</label>
          <input
            type="number"
            name="offer"
            value={formData.offer}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            rows="4"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-bold mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block font-bold mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
