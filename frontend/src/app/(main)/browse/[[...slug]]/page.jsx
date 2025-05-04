'use client'

import { IconStarFilled } from "@tabler/icons-react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Categorynavigation from "@/components/Categorynavigation";

const ProductBrowser = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const { slug } = useParams();

  console.log(slug && slug[0].split('%20').join(' '));


  const fetchProducts = async () => {
    const category = slug && slug[0].split('%20').join(' ');
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${category ? `getbycategory/${category}` : 'getall'}`);
      console.log(res.data);

      // Adjust the URL based on your API
      setProducts(res.data);



    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();

  }, []);
  

  return (
    <div className="  mx-auto">
      <Categorynavigation />

      <div className=" rounded shadow-lg bg-white  h-[10%] w-full">

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
                 <span className="text-yellow-500 flex ">
                              <IconStarFilled/>
                              <IconStarFilled/>
                              <IconStarFilled/>
                              <IconStarFilled/>
                              
                            </span>
                <span className="inline-block mt-4 bg-green-500 text-white rounded-full px-4 py-2 text-lg font-semibold">
                  RS {product.price}

                </span>
                <span className=" line-through ml-2 text-lg text-red-500 font-semibold p-5">RS {product.price + product.price * 0.4}</span>


                <div className="flex items-center mt-2">
                

                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button onClick={() => {
                  router.push(`/view-product/${product._id}?name=${encodeURIComponent(product.name)}`);
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  <i className="fas fa-cart-plus"></i>
                  View Product
                </button>
              </div>
             

            </li>

          ))}
        </ul>
      </div>
    </div>

  )


};

export default ProductBrowser;
