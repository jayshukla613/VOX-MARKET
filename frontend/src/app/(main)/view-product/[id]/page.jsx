'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState,useEffect } from 'react'

const  viewProduct = () => {



  const [viewproduct,setviewproduct] = useState()  


  const fetchViewproductData = async () => {
    const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
    console.log(res.data);
    setviewproduct(res.data);
  }

  useEffect(() => {
    fetchViewproductData();
  }, []);

  return (
    <div>
      <h1>Product View</h1>
      <h1>{viewproduct._id}</h1>

    </div>
  )
}

export default viewProduct;