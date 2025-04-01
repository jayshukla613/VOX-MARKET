'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import ProductBrowser from '../(main)/browse/[[...slug]]/page';


const Category = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async (selectedCategory) => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/getbycategory/${encodeURIComponent(selectedCategory)}`);

        if (response.status === 200) {
          setCategory(response.data);
          console.log(response.data);
          toast.success("Category fetched successfully");
        } else {
          console.error("Error fetching category:", response.data.error);
          toast.error('Category fetch unsuccessful');
        }
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        toast.error('An error occurred while fetching the category');
      }
      setLoading(false);
    };

    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div>
      
      <div className='flex gap-8 justify-evenly bg-gray-500  p-2  text-white text-lg w-full flex-wrap'>
        <Link href={'/browse/electronic'}>Electronics</Link>
        <Link href="" >Fashion</Link>
        <Link href={'browse'} >Home</Link>
        <Link href="" onClick={() => { setSelectedCategory('books'); }}>Books</Link>
        <Link href="" onClick={() => { setSelectedCategory('sports'); }}>Sports</Link>
        <Link href="" onClick={() => { setSelectedCategory('health'); }}>Health</Link>
        <Link href="" onClick={() => { setSelectedCategory('beauty'); }}>Beauty</Link>
        <Link href="" onClick={() => { setSelectedCategory('toys'); }}>Toys</Link>
        <Link href="" onClick={() => { setSelectedCategory('automotive'); }}>Automotive</Link>
        <Link href="" onClick={() => { setSelectedCategory('garden'); }}>Garden</Link>
        <Link href="" onClick={() => { setSelectedCategory('office'); }}>Office</Link>
        <Link href={'/browse/mens shirt'}>Men's Shirt</Link>

      </div>
      <ProductBrowser/>
      
    </div>
  )
}

export default Category;
