'use client'
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { IconStarFilled } from "@tabler/icons-react";



import Herosection from "@/components/Herosection";
import Herosection1 from "@/components/Herosection1";
import Reviewsection from "@/components/Reviewsection";
import axios from "axios";


const Homepage = () => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/product/getall');
    
       // Adjust the URL based on your API
      setProducts(res.data);
     
      

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();

  },[]);

  return (
    <>
      <div>
        <Herosection />
        <h2 className='text-center text-4xl text-black italic p-6 font-light'>POPULAR PRODUCTS</h2>
        <p className='text-center font-extralight text-3xl italic text-gray-400'>Trending Now</p>
        <div className="flex gap-4 p-4 mx-auto">
        {(() => {
          const num1 = Math.floor(Math.random() * 10 + 1);
          const num2 = num1 + 4;
          return products.slice(num1, num2).map((product) => (
            <Card key={`${product._id}-${product.name}`} product={product} />
          ));
        })()}
        </div>

        <div className="flex gap-4 p-4">
        {(() => {
          const num1 = Math.floor(Math.random() * 10 + 1);
          const num2 = num1 + 4;
          return products.slice(num1, num2).map((product) => (
            <Card key={`${product._id}-${product.name}`} product={product} />
          ));
        })()}
          

        </div>
        <Herosection1 />
        <div className="flex gap-4 p-4">
       
        {(() => {
          const num1 = Math.floor(Math.random() * 10 + 1);
          const num2 = num1 + 4;
          return products.slice(num1, num2).map((product) => (
            <Card key={`${product._id}-${product.name}`} product={product} />
          ));
        })()}
        </div>
        <div className='bg-gradient-to-r from-blue-400 to-cyan-200'>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-white mb-8">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Reviewsection />
                <Reviewsection />
                <Reviewsection />
                <Reviewsection />
                <Reviewsection />
                <Reviewsection />

              </div>
            </div>
          </section>

        </div>





      </div>
    </>
  );
}



export default Homepage
