import React from "react";
import './styles.css'


const StylingDinamico = ({additionalStyles}) => {
    return(
 <div className='red-class'
 style={{

    ...additionalStyles
 }} 
 >

<h1> Styling Dinámico </h1>

 </div>

    )
}
export default StylingDinamico