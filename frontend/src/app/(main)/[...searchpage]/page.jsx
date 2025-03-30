'use client'
import { IconStarFilled } from '@tabler/icons-react'
import axios from 'axios'

import React from 'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const searchpage = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const searchTerm = window.location.pathname.split('/').pop(); // Get the search term from the URL

      const res = await axios.get(`http://localhost:5000/product/getbysearch/${searchTerm}`)
        .then((result) => {
          setProduct(result.data)
          console.log(result.data)
          toast.success('Product fetched successfully')
        }).catch((err) => {
          console.log(err)
          toast.error('Error fetching products')
        });
    }
    fetchProducts();
  }, []); // No need to pass search as a dependency

  return (
    <>
      <div className="rounded shadow-lg bg-white h-[10%] p-6 w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Product.map((product, index) => (
            <li key={index}>
              <img
                alt={product.name} // Use product name for alt text
                width={600}
                height={600}
                src={product.image}
                className="w-full h-64 fill-current"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 mr-1">{product.name}</div>
                <p className="text-gray-700 mb-4 mr-2">{product.description}</p>
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
                  onClick={() => {
                    // when user click on view button then it will redirect to view-product/id page and show all details of product 
                    router.push(`/view-product/${product._id}`)
                  }}>
                  View
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default searchpage;
