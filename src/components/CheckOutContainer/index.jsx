import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";

import { Spinner } from "../../components/Spinner";
import { Cart } from "../../contexts/Cart";


const Checkout= ()=>{
    const {products,calcTotal,deleteAll} = useContext(Cart)

    const[load, setLoad]= useState(false)
    const [orderID,setOrderID] = useState()

    const [buyer, setBuyer] =useState({
        Nombre: '',
        Email: '',
        Telefono:''
    
    })


const {Nombre,Email,Telefono} = buyer
const handleInputChange = (e)=>{
    setBuyer(({
        ...buyer,
        [e.target.name]:e.target.value

    }))
}

const generateOrder = async(data)=> {
    setLoad(true)
    try{
        const collec = collection(db, "order")
        const order = await addDoc(collec, data)
        setOrderID(order.id)
        deleteAll()
        setLoad(false)
    } catch(error){
        console.log(error);
    }
}


const handleSubmit = (e)=>{
    e.preventDefault()
    const dia = new Date()
    const items = products
    const total = calcTotal()
    generateOrder({buyer, items, dia, total})

   

}



return(
    <>
    <h1>Finalizing purchase</h1>
    <hr/>

    {load ? <Spinner/>
    : (!orderID&&<div>
        <h3>Complete data</h3>
        <br/>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="Nombre"
            placeholder="Name"
            value={Nombre}
            onChange={handleInputChange}
            required
             />
            <br/>

            <input 
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={handleInputChange}
            required
             />
             <br/>

             <input 
             type="number"
             name="Telefono"
             placeholder="Phone"
             value={Telefono}
             onChange={handleInputChange}
             required
              />

              <br/><br/>

              <input 
              type="submit"
              value="Finalize Purchase"
              className="btn" 
              />
            
            </form>
            </div>)
    
    }

    <div>
    {   


orderID&&(
    
    <div>
        <h2>Purchase completed successfully</h2>
        <h3>{`Your purchase code is: ${orderID}`}</h3>
        
        <Link to= "/">Shop Again</Link>
    </div>
)

}
</div>
    
    </>
)

}
export default Checkout