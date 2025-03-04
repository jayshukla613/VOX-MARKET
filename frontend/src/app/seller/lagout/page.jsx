import Sellerdashboard from '@/components/Sellerdashboard'
import React from 'react'

const Lagoutpage = () => {
  return (
    <div  className="flex flex-col md:flex-row">
        <Sellerdashboard/>
        <div className="w-3/4 pl-8">
    <h1 className='text-bold text-black text-5xl'>LAGOUT</h1>
    <p className="mt-6">Are you Sure to lagout this account ?</p>
    <button className='bg-green-800 text-white px-16 py-2 mt-6 rounded-3xl'>Yes , Lagout</button>
    </div>
      
    </div>
  )
}

export default Lagoutpage
