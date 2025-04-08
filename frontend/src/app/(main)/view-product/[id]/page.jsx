'use client'
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import ReviewRating from '../../reviewProduct/page';
import toast from 'react-hot-toast';
import useCartContext from '@/context/CartContext';

const ViewProduct = () => {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products

  const { addItemToCart } = useCartContext();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
          const data = res.data;
          console.log(res.data);
          if (res.data?.category) fetchRelatedProducts(res.data?.category);
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
          toast.error('Failed to load product details.');
        }
      };

      fetchProduct();
    }
  }, [id]);

  const fetchRelatedProducts = async (category) => {
    try {
      const res = await axios.get(`http://localhost:5000/product/getbycategory/${category}`);
      const data = res.data;
      console.log('Related Products:', data); // Debugging
      setRelatedProducts(data); // Set related products
    } catch (error) {
      console.error('Error fetching related products:', error);
      toast.error('Failed to load related products.');
    }
  };

  // Function to handle "Buy Now" button click
  const handleBuyNow = (product) => {
    addItemToCart(product); // Add the product to the cart
    router.push(`/user/cart`); // Redirect to the cart page
  };

  // Show a loading message if the product is null
  if (!product) return <div>Loading product details...</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {/* Product Images */}
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex-1">
            <img
              alt={product.name}
              className="w-full mb-4"
              height={600}
              src={product.image}
              width={600}
            />
            <div className="flex space-x-2 overflow-x-auto">
              {product.image1 && (
                <img
                  alt={`${product.name} image 1`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image1}
                  width={100}
                />
              )}
              {product.image2 && (
                <img
                  alt={`${product.name} image 2`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image2}
                  width={100}
                />
              )}
              {product.image3 && (
                <img
                  alt={`${product.name} image 3`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image3}
                  width={100}
                />
              )}
              {product.image4 && (
                <img
                  alt={`${product.name} image 4`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image4}
                  width={100}
                />
              )}
            </div>
          </div>
          <div className="flex-1 md:ml-4">
            {/* Price */}
            <div className="text-2xl font-bold text-red-600 mb-2">Price: {product.price}</div>
            <div className="text-gray-500 line-through mb-2">Was: {product.offer}</div>

            {/* Product Variants */}
            <div className="mb-4">
              <label className="block mb-2">Size: {product.size}</label>
              <select className="border rounded p-2 w-full">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Color: {product.color}</label>
            </div>
            {/* Availability/Stock Status */}
            <div className="mb-4 text-green-600">{product.stock}</div>
            {/* Add to Cart / Buy Now Button */}
            <div className="flex space-x-2 mb-4">
              <button
                type="submit"
                onClick={() => addItemToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Add to Cart
              </button>
              <button
<<<<<<< HEAD
                onClick={() => handleBuyNow(product)}
=======
                onClick={() => {
                  router.push(`/buyproductpage/checkout/${product._id}`);
                }}
>>>>>>> 947708a1c335c02b421f99446f3df54e357ff78c
                className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Buy Now
              </button>
            </div>

            {/* Return Policy */}
            <div className="mb-4">
              <h2 className="font-bold mb-2">Return Policy: {product.retunepolicy}</h2>
              <p>
                30-day return policy.
                <Link className="text-blue-500" href="">
                  Read more
                </Link>
              </p>
            </div>
            {/* Payment Options */}
            <div className="mb-4">
              <h2 className="font-bold mb-2">Payment Options</h2>
              <p>We accept Visa, MasterCard, PayPal, and more.</p>
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Description</h2>
          <p>{product.description}</p>
        </div>
        {/* Customer Ratings & Reviews */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Customer Ratings & Reviews</h2>
          <ReviewRating productId={id} />
          <Link className="text-blue-500" href="">
            Read more reviews
          </Link>
        </div>
        {/* Related Products */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Related Products</h2>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct._id} className="border p-4 rounded shadow">
                    <img
                      alt={relatedProduct.name}
                      className="w-full h-40 object-cover mb-2"
                      src={relatedProduct.image}
                    />
                    <h3 className="text-lg font-bold">{relatedProduct.name}</h3>
                    <p className="text-red-600 font-bold">Price: {relatedProduct.price}</p>
                    <button
                      onClick={() => router.push(`/view-product/${relatedProduct._id}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                      View Product
                    </button>
                  </div>
                ))
              ) : (
                <p>No related products found.</p>
              )}
            </div>
          </div>
        </div>
        {/* Product Tags and Categories */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Tags and Categories</h2>
          <p>
            Categories:
            <span className="text-blue-500">{product.category}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
