import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../contexts/Cart';
//import styles from "./ItemDetail.modules.css"
import "../Item/index"
import ItemCount from '../ItemCount';








const ItemDetail = ({movie})=>{

    const {addProduct} = useContext(Cart)
    const [quantityItemDetail, setQuantityItemDetail]= useState(0)

    const navigate = useNavigate()
     
    const confirmPurchase = (quantity) =>{
        console.log(quantity);
        addProduct({...movie, quantity})
        setQuantityItemDetail(quantity)

        }
        const handleNavigate = ()=>{

        navigate('/cart')
        
    }
    console.log(movie);
    return(
        <div className="col">
            <img  className="movieImage"src={movie.poster} alt="details" />
            <h1 className="firstItem">{movie.name}</h1>
            <h2 className="movie.details">{movie.description}</h2>
            {quantityItemDetail ? 
            <button onClick={handleNavigate}>Go cart</button>
            :
           
          <ItemCount onAdd={confirmPurchase} initial={1} stock ={20} />
        }
             </div>
    )
}

export default ItemDetail