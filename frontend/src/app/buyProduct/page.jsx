'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const BuyProductPage = () => {
    const router = useRouter();
    const [product, setproduct] = useState([])

   

    const fetchbuyProduct = async () => {
        const response=await axios.get(`http://localhost:5000/buyproduct/buy/${product._id}`)
        .then((result) => {
            console.log(result.data);
            setproduct(result.data);
            toast.success("Product fetched successfully");

           
            
        }).catch((err) => {
            console.log(err);
            toast.error("Failed to fetch product");
            
            });
        };

        useEffect(() => {
            fetchbuyProduct();
        }
        , []);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Buy Product</h1>
            <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="flex-1">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto mb-4"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1 md:ml-4">
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-red-600 text-xl font-bold mb-2">
                        Price: ${product.price}
                    </p>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Quantity:</label>
                       
                    </div>
                    <button
                        
                        className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    >
                        Confirm Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyProductPage;