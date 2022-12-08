import React from "react";
import raya from "./raya.jpg"

const Encuesta = ({condition}) =>{
  return (
    condition ? <img src={raya}/>: null
  )
}

export default Encuesta