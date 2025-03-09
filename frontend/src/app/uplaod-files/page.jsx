'use client'
import { form } from '@heroui/theme';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const uploadFile = () => {

  const handleFileUplaod = (e) => { 
    const file = e.target.files[0];
    if(!file) toast.error('No file selected');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'VoxMarket');
    formData.append('cloud_name', 'drwbpgiun');

    axios.post('https://api.cloudinary.com/v1_1/drwbpgiun/image/upload', formData)
    .then((result) => {
        toast.success('File uploaded successfully');
    }).catch((err) => {
        toast.error('File upload failed');
    });

  }
  return (
    <div>
        <input type="file" onChange={handleFileUplaod}/>
    </div>
  )
}

export default uploadFile;