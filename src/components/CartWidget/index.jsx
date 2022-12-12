import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../../contexts/Cart'
import CartIcon from '../CartIcon'


  const CartWidget = () => {
    const navigate = useNavigate()
    const {itemsTotal} = useContext(Cart)
  
  return (
    <div 
    style = {
        {
          width: 50,
          height:50,
          cursor:'pointer',
          display:'flex',
          flexDirection:'row',
          gap:'5px',
          float: 'inline-end',
          
   position: 'absolute',
   top: 14,
   right: 5,

    }}
       onClick = {() => navigate("/cart")}
       >
        <CartIcon/>
    <span>{itemsTotal() === 0 ? null  : `(${itemsTotal()})`}</span>
    </div>

    )
}

export default CartWidget