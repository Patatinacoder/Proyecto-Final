import React from 'react'
import './styles.css'

export const ClasesCondicionales = ({condition, additionalClass}) => {
  return (
    <div 
    className={`${condition ? 'blue-class' : 'red-class'} ${additionalClass || ''}`}
    >
<h2>
    Clases Condicionales
</h2>

    </div>
  )
}
