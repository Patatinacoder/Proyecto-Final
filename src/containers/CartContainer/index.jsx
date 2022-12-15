import React, { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { Cart } from '../../contexts/Cart';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import '../CheckOutContainer'

const CartContainer = () => {

    const navigate = useNavigate();
    const navigateCheckout = () =>{
        navigate(`/Checkout`)
    }

    const {products} = useContext(Cart);

    return (
    products.length?
    <>
        <div className='cart-container'>
            {products.map (product =>{
            return <CartItem item={product} key={product.id}></CartItem>
            })}
        </div>
        <button className='btn' onClick={navigateCheckout}>Continuar</button>
    </>
    :
    <h2>No hay productos en el carrito</h2>
    )
}

export default CartContainer