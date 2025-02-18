import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext/CartProvider'

function CartPage() {
  const { state } = useContext(CartContext)
  console.log(state);
  return (
    <div>
      <h1>Cart page</h1>
      <div>
        {state.cartItem ? (
          <div>
            {state.cartItem.map((item) => {
              return (
                <div key={item.id}>
                  <h1>{item.name}</h1>
                  <img className="h-40" src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        ) : (
          <div>Item Not Found On Cart</div>
        )}
      </div>
    </div>

  )
}

export default CartPage