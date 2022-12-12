import React from "react";

const  Ad= ({children})=>{
    return(
        <div style={{
            position: 'fixed',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            top:0,
            width:'100vw',
            height:'100vh',
            backgroundColor:'rgba(0,0,0,0,6)',
        }}>

          <div 
          style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            padding:50,
            width:300,
            height:200,
            backgroundColor:'black',
            border: '10px dotted deeppink'

          }}  
          >
            {children}
        </div>
        </div>
    )
}
export default Ad