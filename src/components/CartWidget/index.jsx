import React from 'react'
import cart from "./cart.ico"

 const CartWidget = () => {
  return (
    <div style = {
        {
          cursor: 'pointer',
   
   position: 'absolute',
   top: 25,
   right: 15,
    }}>  
    <img src= {cart}  alt="carrito"/>
    </div>
    )
}

export default CartWidget