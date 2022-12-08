import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { Cart } from '../../contexts/Cart'

const CartContainer = ()=> {
    const {products} = useContext(Cart)
return(
<div >
{products.map(product=>{
    return <CartItem item={product}/>
} )}
</div>

)
    
}

export default CartContainer