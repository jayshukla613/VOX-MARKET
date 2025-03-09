'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const uploadfiles = () => {
    const handlefileupload=(e)=>{
        const file=e.target.files[0];
        if(!file) toast.error(' no file selected');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset','voxmarket');
        formData.append('cloud_name','dvzoo1v4s');

        axios.post('https://api.cloudinary.com/v1_1/dvzoo1v4s/image/upload',formData)
        .then((result) => {
            toast.success('file upload successfully');
        }).catch((err) => {
            toast.error('file upload failed');
            
        });

        

    }
  return (
    <div>
        <input type="file" onChange={handlefileupload} />

      
    </div>
  )
}

export default uploadfiles
