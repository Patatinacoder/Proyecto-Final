import { useState } from "react";


const Form = () =>{


    const [name, setName]= useState ('')
    const [email, setEmail] = useState('')
    return (
 <form onSubmit={ev=> {
    ev.preventDefault()

    const name = ev.target.name.value
    const email = ev.target.email.value

    login(name, email)

 }}>
 
 <input 
 type="text"
  name='name' 
  placeholder="Name"
  value={name}
  onChange={ev => setName(ev.target.value)}
  autoComplete= 'off' 
  
  ></input> 

  <input type="text"
  name="email"
  placeholder="Email"
  value={email} 
  onChange={ev=> setEmail(ev.target.value)}
  autoComplete="off"
  ></input>

 


<button type="submit">Comprar</button>

 </form>

    )
    
 } 

 const login = (name, email) => {
    if (name === "" && email==="")
 alert ('login correcto')
 else{
    alert('login incorrecto')
 }
}
 export default Form