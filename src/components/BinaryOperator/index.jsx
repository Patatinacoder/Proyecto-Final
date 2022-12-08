import React from 'react'

const BinaryOperator = ({condition}) => {
  return (
    <>
    <div>Título de BinaryOperator</div>
   {condition && <p>BinarOperator</p>}
   </>
  )
}

export default BinaryOperator