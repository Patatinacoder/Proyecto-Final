import React from "react";


const CartItem = ({item}) =>{
    return(
        <div>
            <img src={item.poster} width={100} alt="poster_path" />
            <h1>{item.name}</h1>
        </div>
    )
}

export default CartItem