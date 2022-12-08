import React from "react";


const InLineTernary = ({lang}) => {
  return (
    <h1>{lang === 'en' ? 'Hello' : 'Hola'}</h1>
  )
}

export default InLineTernary