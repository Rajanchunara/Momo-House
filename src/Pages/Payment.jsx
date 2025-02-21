import React from 'react'
import { useLocation } from 'react-router-dom'

function Payment() {
    
    const data = useLocation()
    console.log(data.state.totalAmount);
    console.log(data.state.totalItem);



  return (
    <div>Payment</div>
  )
}

export default Payment