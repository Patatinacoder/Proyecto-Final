import React, { useState } from "react";

const ReturnTemprano = ({condition2})=>{
    const [condition, setCondition]=useState(false)
if (condition2){
    return (
<>
<button
 onClick={() => setCondition(value=> !value)}>
    Change Condition
</button>
<span>El estado de condition es : {condition.toString()}</span>
</>
    )
}
return (
    <h3>La condicion 2 esta en false</h3>
) 
}

export default ReturnTemprano