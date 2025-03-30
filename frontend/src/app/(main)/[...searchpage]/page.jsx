'use client'
import axios from 'axios'

import React from 'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const searchpage = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');


useEffect((search) => {
  const fetchProducts = async (search) => {
    
    const res= await axios.get(`http://localhost:5000/product/getbysearch/${search}`)
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
}
, []);


  


  return (
    <>
    {Product.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
       
<img src={product.image} alt={product.title} />
</div>
  
        ))}
      
    </>
    
  )
}

export default searchpage
