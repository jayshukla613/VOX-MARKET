'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const viewsellerdeatils = () => {
    const { id } = useParams(); // Get the dynamic route parameter
    const [SellerDetails, setSellerDetails] = useState({}); // Initialize as an object

    const fetchdetailsbyid = async (id) => {
        try {
            const result = await axios.get(`http://localhost:5000/seller/getdetails/${id}`);
            // Debugging
            setSellerDetails(result.data);
            
        } catch (error) {
            console.error('Error fetching seller details:', error);
            toast.error('Failed to fetch data');
        }
    };

    useEffect(() => {
        if (id) {
            fetchdetailsbyid(id); // Pass the id to the function
        }
    }, [id]);

    return (
        <div className='bg-gradient-to-r from-blue-300 to-purple-300'>
           
            {SellerDetails ? (
                <>
                    <div className="container mx-auto p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="text-center mb-6">
        <img
          alt="Placeholder image of a seller's profile picture"
          className="rounded-full mx-auto mb-4"
          height={100}
          src={SellerDetails.image}
          width={100}
        />
        <h2 className="text-3xl font-bold text-gray-800">Seller Information</h2>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Name: {SellerDetails.name}</h3>
        
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Email : {SellerDetails.email}</h3>
        
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Phone  :  {SellerDetails.phone}</h3>
       
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Store Name : {SellerDetails.storename}</h3>
        
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Business Name : {SellerDetails.BusinessName}</h3>
        
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Address : {SellerDetails.address}</h3>
       
      </div>
      <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Account created : {new Date(SellerDetails.createdAt).toLocaleDateString()}</h3>
      
     </div>
    </div>
  </div>
                </>
            ) : (
                <p>Loading seller details...</p>
            )}
        </div>
    );
};

export default viewsellerdeatils;
