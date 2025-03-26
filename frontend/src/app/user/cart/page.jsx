import useCartContext from '@/context/CartContext'
import React from 'react'

const cart = () => {

  const { cartItems } = useCartContext();

  return (
    <div>cart</div>
  )
}

export default cart