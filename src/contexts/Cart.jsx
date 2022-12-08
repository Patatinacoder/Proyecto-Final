import {  createContext, useState } from "react";
import React from 'react'


export const Cart = createContext({}) 

const CartProvider = ({children}) => {

    const [products, setProducts]=useState([])
    const addProduct = (productToAdd) =>{
        console.log(productToAdd); 
        const flagRepeated = isInCart(productToAdd.id)
        if (flagRepeated){


 //Lógica para agregar quantity y no producto entero



        } else{
        setProducts ([...products, productToAdd])
        }
    }

const isInCart = (id) =>{
    return products.some(product => product.id ===id)
}


//Eliminar un producto

//vaciar el carrito 

//Calculo total

//Calculo total items carrito


  return <Cart.Provider value={{products, addProduct}}>
    {children}
</Cart.Provider>
    
}

export default CartProvider
