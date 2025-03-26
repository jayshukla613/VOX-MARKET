'use client'
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react'
import ReviewRating from '../../reviewProduct/page';
import toast from 'react-hot-toast';
import useCartContext from '@/context/CartContext';

const viewProduct = () => {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addItemToCart } = useCartContext();


  const token = localStorage.getItem('token');
  const addtocartdata = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/addtocart`, {
      headers: { 'x-auth-token': token }
    })
      .then((result) => {
        console.log("API Response:", result.data);
        localStorage.setItem('user-token', result.data?.token);

        toast.success("Product added to cart successfully");
      })
      .catch((err) => console.log("Error fetching profile data:", err));
    toast.error("Product not added to cart");
  };

  useEffect(() => {
    if (token) addtocartdata();
  }, [token]);



  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
        const data = res.data;

        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
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
              <img
                alt={`${product.name} image 1 of the Amazing Product`}
                className="w-20 h-20"
                height={100}
                src={product.image1}
                width={100}
              />
              <img
                alt={`${product.name} image 2 of the Amazing Product`}
                className="w-20 h-20"
                height={100}
                src={product.image2}
                width={100}
              />
              <img
                alt={`${product.name} image 3 of the Amazing Product`}
                className="w-20 h-20"
                height={100}
                src={product.image3}
                width={100}
              />
              <img
                alt={`${product.name} image 4 of the Amazing Product`}
                className="w-20 h-20"
                height={100}
                src={product.image4}
                width={100}
              />
            </div>
          </div>
          <div className="flex-1 md:ml-4">
            {/* Price */}
            <div className="text-2xl font-bold text-red-600 mb-2"> Price:{product.price} </div>
            <div className="text-gray-500 line-through mb-2">Was: {product.offer}</div>

            {/* Product Variants */}
            <div className="mb-4">
              <label className="block mb-2">Size:{product.size}</label>
              <select className="border rounded p-2 w-full">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Color: {product.color} </label>
              {/* <div className="flex space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div> */}
            </div>
            {/* Availability/Stock Status */}
            <div className="mb-4 text-green-600">{product.stock}</div>
            {/* Add to Cart / Buy Now Button */}
            <div className="flex space-x-2 mb-4">
              <button onClick={() => { addItemToCart(product) }} className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">
                Add to Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto">
                Buy Now
              </button>
            </div>

            {/* Return Policy */}
            <div className="mb-4">
              <h2 className="font-bold mb-2">Return Policy:  {product.retunepolicy}</h2>
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
          <p>
            {product.description}
          </p>

        </div>
        {/* Customer Ratings & Reviews */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">


            Customer Ratings & Reviews
          </h2>
          <ReviewRating />
          {/* <div className="mb-2">
        <p className="font-bold">John Doe</p>
        <p>Great product! Highly recommend.</p>
      </div> */}
          {/* <div className="mb-2">
        <p className="font-bold">Jane Smith</p>
        <p>Good value for money. Will buy again.</p>
      </div> */}
          <Link className="text-blue-500" href="">
            Read more reviews
          </Link>
        </div>
        {/* Related Products */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Related Products</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <img
                alt="Related product 1 image"
                className="w-full mb-2"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/0N63p6CAtOwabsEUEB-tqjx4mFrDANt-KZNjc1q4imI.jpg"
                width={200}
              />
              <p className="text-center">Related Product 1</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <img
                alt="Related product 2 image"
                className="w-full mb-2"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/PGf0wFjpWEshXJaRkQOHHeV5kCg9m7dOKcEPeR5gMyE.jpg"
                width={200}
              />
              <p className="text-center">Related Product 2</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <img
                alt="Related product 3 image"
                className="w-full mb-2"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/YqnxRSJEKCFUYCCh2V1t-7CpqOZ9Lq3Mf4so1hSzZME.jpg"
                width={200}
              />
              <p className="text-center">Related Product 3</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
              <img
                alt="Related product 4 image"
                className="w-full mb-2"
                height={200}
                src="https://storage.googleapis.com/a1aa/image/UhudjGBDTXMZvppg4N3YIAc1exaTtrykn1s61WdmRGo.jpg"
                width={200}
              />
              <p className="text-center">Related Product 4</p>
            </div>
          </div>
        </div>
        {/* Product Tags and Categories */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Tags and Categories</h2>
          <p>
            Categories:
            <span className="text-blue-500">{product.category}</span>,

          </p>

        </div>

        {/* Wishlist Option */}
        {/* <div className="mb-4">
      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full md:w-auto">
        Add to Wishlist
      </button>
    </div> */}
        {/* Questions & Answers */}
        {/* <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Questions &amp; Answers</h2>
      <div className="mb-2">
        <p className="font-bold">Customer Question 1</p>
        <p>Answer to customer question 1.</p>
      </div>
      <div className="mb-2">
        <p className="font-bold">Customer Question 2</p>
        <p>Answer to customer question 2.</p>
      </div>
      <a className="text-blue-500" href="#">
        Ask a question
      </a>
    </div> */}



      </div>

    </>
  )
}

export default viewProduct;
