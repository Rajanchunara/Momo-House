import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext/CartProvider'

function CartPage() {
  const {state} = useContext(CartContext)
  console.log(state);
  return (
    <div>CartPage</div>
  )
}

export default CartPage