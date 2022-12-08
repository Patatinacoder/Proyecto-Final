import React from "react";

const TernaryOperator = ({condition})=>{
    condition ? <h2>La condición es true</h2> : <h2>La condición es false</h2>
console.log(condition);

}

export default TernaryOperator