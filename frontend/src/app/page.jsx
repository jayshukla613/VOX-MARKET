import React from "react";
import Card from "@/components/Card";

import Hero from "@/components/Herosection";
import Herosection1 from "@/components/Herosection1";
import Reviewsection from "@/components/Reviewsection";

export default function page() {
  return (
    <>
    <div>
    
      <Hero/>
      <h2 className='text-center  text-4xl text-black italic p-6 font-light' >POPULAR PRODUCTS</h2>
        <p className='text-center font-extralight text-3xl italic text-gray-400'> Trending Now</p>
        <div className="flex gap-4 p-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>

        <div className="flex gap-4 p-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
        <Herosection1/>
        <div className="flex gap-4 p-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
        <Reviewsection/>

      </div>
    </>
  );
}


