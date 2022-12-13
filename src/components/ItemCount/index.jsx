import React from "react";
import { useState } from "react";
import "./styles.css"

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock)
            setCount(count + 1)
    }


    const onDecrement = () => {
        if (count > initial)
            setCount(count - 1)
    }



    return <div>
        <button className="counter" onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button className="counter" onClick={onPlus}>+</button>
        <button className="confirmPur" onClick={() => onAdd(count)}>Confirm Purchase</button>
    </div>


}

export default ItemCount