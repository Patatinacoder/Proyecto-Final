import React, { useContext } from 'react';
import CartItem from '../../components/CartItem';
import { Cart } from '../../contexts/Cart';
import './styles.css'
import { saveOrder } from '../../services/saveOrder';



const CartContainer = () => {
    const { products, calcTotal } = useContext(Cart)

    const confirmPurchase = () => {

        (async () => {
            await saveOrder(
                "Cata",
                102020303,
                "aaabbb@gmail.com",
                products,
                calcTotal()
            )
        })()

    }

    return (
        <div>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />
            })}
            <button className='buy' onClick={confirmPurchase}>
                Buy
            </button>
        </div>
    )
}

export default CartContainer