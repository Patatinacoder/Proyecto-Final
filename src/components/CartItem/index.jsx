 import React, { useContext } from "react";
import { Cart } from "../../contexts/Cart";
import TrashIcon from "../TrashIcon";



const CartItem = ({item}) =>{ 
    const {removeProduct} = useContext(Cart)
const handleRemove = ()=>{
    removeProduct(item.id)
}

return(
        <div style={{
           display:'flex',
           flexDirection:'row',
           justifyContent: 'left',
           padding:30,
           gap:40,
           alignItems:'center'

        }}>
            
            <img src={item.poster} width={180} alt="poster_path" />
            <h1>{item.name}</h1>
             <h2>{item.quantity}</h2>
             <div style={({width: 45})} onClick={handleRemove}>
             <TrashIcon/>
             </div>
             
        </div>
    )
}

export default CartItem