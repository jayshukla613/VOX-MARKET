'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const uploadFile = () => {

    const handleFileupload = (e) =>{
        const file = e.target.files[0];
        if (!file) toast.error('No file selected');

        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset', 'myvoxmarket');
        formData.append('cloud_name', 'dvd307nsf');

        axios.post('https://api.cloudinary.com/v1_1/dvd307nsf/image/upload',formData)
        .then((result) => {
            toast.success('file uploaded successfully')
            
        }).catch((err) => {
            toast.error('file upload failed')
        });
    }

  return (
    <div>
        <input type="file" onChange={handleFileupload} />
    </div>
  )
}

export default uploadFile;