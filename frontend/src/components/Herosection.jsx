'use client'
import Link from 'next/link'
import Image from 'next/image' // Import the Image component from next/image
import React, { useState,useEffect } from 'react'
import pic from '../../public/ecommarce.jpg' 

const Herosection = () => {


  const slides = [
    {
      id: 1,
      title: "Summer Collection 2025",
      description: "Fresh arrivals for your wardrobe.",
      image: "https://img.freepik.com/premium-vector/shopping-basket-red-product-bill-smartphone-with-purchase-icon-screen-credit-card-payment_196604-165.jpg?ga=GA1.1.1740835140.1740818164&w=740",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "Up to 50% Off",
      description: "Don’t miss out on our exclusive deals.",
      image: "https://img.freepik.com/premium-vector/digital-wallet-application-mobile-internet-banking-online-payment-security-via-credit-card_228260-669.jpg?w=1060",
      cta: "Explore Deals",
    },
    {
      id: 3,
      title: "New Accessories",
      description: "Perfect complements to your style.",
      image: "https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-34.jpg?ga=GA1.1.1740835140.1740818164&w=740",
      cta: "Browse Accessories",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
   <>

   <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-[90%]  duration-1000 ease-in-out ${
            index === current ? "" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
          
           
            className="object-cover w-full h-full"
            
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-10">
            <h2 className="text-red-500 text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-red-500 text-xl mb-6">{slide.description}</p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
   


   </>
  )
}

export default Herosection
