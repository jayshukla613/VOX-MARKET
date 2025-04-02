'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const viewuserdetails = () => {
     const { id } = useParams(); // Get the dynamic route parameter
        const [UserDetails, setUserDetails] = useState({}); // Initialize as an object
    
        const fetchdetailsbyid = async (id) => {
            try {
                const result = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
                // Debugging
                setUserDetails(result.data);
                
            } catch (error) {
                console.error('Error fetching user details:', error);
                toast.error('Failed to fetch data');
            }
        };
    
        useEffect(() => {
            if (id) {
                fetchdetailsbyid(id); // Pass the id to the function
            }
        }, [id]);
  return (
    <div>
      <div className='bg-gradient-to-r from-blue-300 to-purple-300'>
           
           {UserDetails ? (
               <>
                   <div className="container mx-auto p-6">
   <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
     <div className="text-center mb-6">
       <img
         alt="Placeholder image of a seller's profile picture"
         className="rounded-full mx-auto mb-4"
         height={100}
         src={UserDetails.image}
         width={100}
       />
       <h2 className="text-3xl font-bold text-gray-800">User Information</h2>
     </div>
     <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Name: {UserDetails.name}</h3>
       
     </div>
     <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Email : {UserDetails.email}</h3>
       
     </div>
     <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Phone  :  {UserDetails.phone}</h3>
      
     </div>
     
    
     <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Address : {UserDetails.address}</h3>
      
     </div>
     <div className="mb-4">
       <h3 className="text-xl font-semibold text-gray-700">Account created : {new Date(UserDetails.createdAt).toLocaleDateString()}</h3>
      
     </div>
   </div>
 </div>
               </>
           ) : (
               <p>Loading seller details...</p>
           )}
       </div>
    </div>
  )
}

export default viewuserdetails
