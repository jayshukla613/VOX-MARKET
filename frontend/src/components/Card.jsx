// components/Card.js
'use client'
import React, { useState,useEffect } from 'react';
import { IconStarFilled } from '@tabler/icons-react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Card = ({ product }) => {
  const router=useRouter();
  

  if (!product) {
    return null; // or return a placeholder component
  }

  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white  w-[600px] h-[300px]">
      <img
        alt={product.name} // Use product name for alt text
        className="w-full"
        src={product.image} // Use product image URL
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 text-base">${product.price}</p>
        <p className="text-green-500 font-semibold mb-4">{product.discount} OFF</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 flex">
            {/* Assuming you have a rating property in your product */}
            {Array.from({ length: product.rating }).map((_, index) => (
              <IconStarFilled key={index} />
            ))}
          </span>
         
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          // when user click on view button then it will redirect to view-product/id page and show all details of product 

          router.push(`/view-product/${product._id}`)

        }}>
          View
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;