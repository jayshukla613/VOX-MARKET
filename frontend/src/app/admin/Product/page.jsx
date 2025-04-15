'use client'
import { IconPencil, IconTrashFilled } from '@tabler/icons-react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Product = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getall`)
            .then((result) => {
                console.log(result.data)
                setProducts(result.data)

            })
            .catch((err) => {
                console.error(err)
                toast.error("Error fetching products")
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="flex flex-col md:flex-row">
            
             <div className="container mx-auto p-4">
               <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
               <div className="flex justify-end mb-4">
                 
               </div>
               <div className="bg-white shadow-md rounded-lg overflow-hidden">
                 <table className="min-w-full bg-white p-6">
                   <thead className="bg-gray-800 text-white p-4">
                     <tr>
                       <th>S.NO</th>
                       <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Image
                       </th>
                       <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Product Name
                       </th>
                       <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Price
                       </th>
                       <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Category
                       </th>
                       <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Sold
                       </th>
                       <th colSpan={2} className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                         Actions
                       </th>
                     </tr>
                   </thead>
                   <tbody className="text-gray-700">
                     {
                       products.map((item, index) => {
                         return (
                           <tr key={item._id}>
                             <td>{index + 1}</td>
                             <td className="w-1/6 py-3 px-4">
                               <img
                                 alt={item.name}
                                 height={100}
                                 src={item.image}
                                 width={100}
                               />
                             </td>
                             <td className="w-1/6 py-3 px-4">{item.name}</td>
                             <td className="w-1/6 py-3 px-4"> Rs. {item.price}</td>
                             <td className="w-1/6 py-3 px-4"> {item.category}</td>
                             <td className="w-1/6 py-3 px-4"> {item.sold}</td>
                             <td className="w-1/6 col-span-2 py-3 space-x-4 px-4">
       
       
                               <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                 onClick={() => {
                                  
                                   var result = confirm("Are you sure  to Delete this product?");
                                   if (result) {
                                     deleteProduct(item._id); 
                                   }
                                   // setProduct(product.filter((product) => product._id !== item._id));
       
       
                                 }}
                               >
                                 <IconTrashFilled />
                               </button>
                             </td>
       
                             <td className="w-1/6 col-span-2 py-3 space-x-4 px-4">
                               <Link href=''>
                                 <IconPencil /></Link>
                             </td>
                           </tr>
                         );
                       })
                     }
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
    )
}

export default Product
