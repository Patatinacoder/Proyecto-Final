import React from 'react'

const InLineStyle = ({color}) => {
    return(
   <div style ={{
    height:200,
    width:200,
    backgroundColor: color ? 'green' : 'red'
   }}></div>
    )
  
    }

export default InLineStyle