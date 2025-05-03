'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('user-token'); 
        if(!token) {
            toast.error('User not logged in! pls login to continue to access this page.');
            router.push('/user-login');
        }
        
    }, []);
    

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout;