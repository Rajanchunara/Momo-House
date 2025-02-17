import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext/CartProvider'

function CartPage() {
    const data =useContext(CartContext)
    console.log(data);
  return (
    <div>CartPage</div>
  )
}

export default CartPage