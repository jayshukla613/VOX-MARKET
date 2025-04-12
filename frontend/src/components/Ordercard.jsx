'use client'
import useCartContext from '@/context/CartContext'
import { IconMinus, IconPlus, IconTrashFilled } from '@tabler/icons-react'
import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Ordercard = () => {

  const token = localStorage.getItem('user-token')
  // const [cart, setCart] = useState([])
    const { cartItems, removeItemFromCart, deleteItemFromCart, calculateTotalAmount, addItemToCart } = useCartContext();


  const fetchcartitems = async () => {
    axios.get('http://localhost:5000/cart/getbyuser', {
      headers: { 'x-auth-token': token }

    }).then((response) => {
      console.log(response.data)
      setCart(response.data)
      toast.success("Items fetched successfully")
    }).catch((error) => {
      console.log(error)
      toast.error("Error fetching items")

    })
  }
  //  useEffect(() => {
  //      if (token) fetchcartitems();
  //    }, [token]);





  return (
    <div>

      {cartItems.map((item) => (
        <div key={item._id} className="flex flex-col p-4 border border-gray">
          <main className="container mx-auto px-6 py-8">

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4">
                    <div className="flex items-center">
                      <img alt="Product image of a stylish modern chair" className="w-20 h-20 object-cover rounded" src={item.image} />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">Category:{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                      <div className="flex items-center border rounded">
                        <button className="px-3 py-1 text-gray-600 hover:text-gray-800"
                          onClick={() => removeItemFromCart(item._id)}
                        ><IconMinus /></button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button className="px-3 py-1 text-gray-600 hover:text-gray-800" onClick={() => addItemToCart(item)}><IconPlus /></button>
                      </div>
                      <span className="text-gray-800 font-semibold ml-4"> RS: {item.price}</span>
                      <button className="ml-4 text-red-600 hover:text-red-800" onClick={() => deleteItemFromCart(item._id)}>
                        <IconTrashFilled />
                      </button>
                    </div>
                  </div>



                </div>

              </div>


            </div>
          </main>
        </div>
      ))}



    </div>
  )
}

export default Ordercard
