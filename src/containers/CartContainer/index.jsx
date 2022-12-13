import React, { useContext } from 'react';
import CartItem from '../../components/CartItem';
import {Cart} from '../../contexts/Cart';
import generateOrder from '../../services/generateOrder';
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const CartContainer = () => {
    const {products, calcTotal} = useContext(Cart)

    const confirmPurchase = () => {
       
        (async ()=> {

            const nombreComprador = "Cata"
            const telefono = 989898989
            const email = "abcd.123@gmail.com"
    
            const generatedOrder = generateOrder(
                                            nombreComprador,
                                            email,
                                            telefono,
                                            products,
                                            calcTotal())
            console.log(generatedOrder);
            
            let productOutOfStock = []
           
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.quantity > productInFirebase.stock) productOutOfStock.push(productInCart)                
            }
    
            console.log(productOutOfStock);
    
            if (productOutOfStock.length === 0) {
               
                console.log(products);
    
                for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id);
            
                        const docSnap = await getDoc(productRef);
                        const productInFirebase = {...docSnap.data(), id: doc.id}
            
                     
                        await updateDoc(productRef, {
                            stock: productInFirebase.stock - productInCart.quantity
                        });
                    }
                
               
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Order Generated: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Product out of stock")
            }
        })()

    }

    console.log(products);

    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
            <button className='buy' onClick={confirmPurchase}>Buy</button>
        </div>
    )
}

export default CartContainer