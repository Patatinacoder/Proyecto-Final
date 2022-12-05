import React from 'react'
import { useState } from 'react';
//import styles from "./ItemDetail.modules.css"
import "../Item/index"
import ItemCount from '../ItemCount';
import styles from "./styles.css"

const ItemDetail = ({movie})=>{
    const [quantityItemDetail, setQuantityItemDetail]= useState(0)
    const confirmPurchase = (quantity) =>{
        console.log(quantity);
        setQuantityItemDetail(quantity)
        
    }
    console.log(movie);
    return(
        <div className="col">
            <img  className="movieImage"src={movie.poster} alt="details" />
            <h1 className="firstItem">{movie.name}</h1>
            <h2 className="movie.details">{movie.description}</h2>
            <button className={styles.button}>Button</button>
            {quantityItemDetail ? 
            <button>Go cart</button>
            :
           
          <ItemCount onAdd={confirmPurchase} initial={1} stock ={20} />
        }
             </div>
    )
}

export default ItemDetail