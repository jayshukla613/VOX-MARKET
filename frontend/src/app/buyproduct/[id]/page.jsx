'use client'
 import { useParams, useRouter } from 'next/navigation';
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 
 const buyproduct = () => {
 
   const router=useRouter();
     const { id } = useParams(); // Correctly access `id` from the object
     const [product, setProduct] = useState(null); // Initialize as null to handle loading state
 
     useEffect(() => {
         if (id) {
             const fetchProduct = async () => {
                 try {
                     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyid/${id}`);
                     const data = res.data;
                     setProduct(data);
                 } catch (error) {
                     console.error('Error fetching product:', error);
                 }
             };
 
             fetchProduct();
         }
     }, [id]);
 
     const handleBuy = () => {
         router.push(`/buyproductpage/payment`)
         }
         
 
     return (
         <div>
           
             {product ? (
                <div className="container mx-auto p-4">
                {/* Product Details Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <img
                        alt={product.name}
                        className="rounded-lg"
                        height={400}
                        src={product.image}
                        width={600}
                      />
                    </div>
                    <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                      <p className="text-gray-700 mb-4">
                       {product.description}
                      </p>
                      <p className="text-lg font-semibold mb-2">Price: RS..{product.price}</p>
                      <p className="text-lg font-semibold mb-2">Color: Red</p>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                      ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
                {/* Price Calculation Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                  <h3 className="text-xl font-bold mb-4">Price Details</h3>
                  <div className="flex justify-between mb-2">
                    <span>Product Price:</span>
                    <span>RS..{product.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>GST (10%):</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Delivery Charge:</span>
                    <span>$5</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total Price:</span>
                    <span>$115</span>
                  </div>
                  <button onClick={handleBuy} className="bg-green-500 text-white px-4 py-2 rounded-lg w-full">
                    Checkout
                  </button>
                </div>
              </div>
             ) : (
                 <h2>Loading product details...</h2>
             )}
         </div>
     );
 };
 
 export default buyproduct;
