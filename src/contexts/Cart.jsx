import {  createContext, useState } from "react";
import React from 'react'


export const Cart = createContext({}) 

const CartProvider = ({children}) => {

    const [products, setProducts]=useState([])
    const addProduct = (productToAdd) =>{
        const flagRepeated = isInCart(productToAdd.id)
        if (flagRepeated){


const productoRepetidoModi = products.find(productInCart => productInCart.id === productToAdd.id)
productoRepetidoModi.quantity += productToAdd.quantity

// eslint-disable-next-line eqeqeq
const productosSinRepetir = products.filter(productsInCart => productsInCart.id != productToAdd.id)
setProducts([...productosSinRepetir, productoRepetidoModi])


             } else{
        setProducts ([...products, productToAdd])
        }
    }

const isInCart = (id) =>{
    return products.some(product => product.id ===id)
}


const removeProduct = (id)=>{
    // eslint-disable-next-line eqeqeq
    const productsCart = products.filter(productsInCart => productsInCart.id != id)
    setProducts(productsCart)


}


const deleteAll = ()=>{
    setProducts([]);
}

const calcTotal = ()=> {
    const total = products.reduce((acc, currentProduct) => acc += currentProduct.quantity * currentProduct.price, 0)
    return total
}

//Calculo total items carrito
const itemsTotal = ()=>{
    let total = 0;
   products.forEach((product) => (total+= product.quantity))
    return total 
}


  return <Cart.Provider
   value={{products,addProduct,removeProduct,deleteAll,calcTotal,itemsTotal
    }}>
    {children}
</Cart.Provider>
    
}

export default CartProvider
