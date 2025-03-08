'use client'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

import React, { useState, useEffect } from 'react'

const viewProduct = () => {
  const router = useRouter();
  const { id } = useParams;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
        const data = await res.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
 return (
   <>
   <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
   
   </>
  )
}

export default viewProduct;