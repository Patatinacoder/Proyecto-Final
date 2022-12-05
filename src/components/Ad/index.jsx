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
            width:500,
            height:300,
            backgroundColor:'salmon',

          }}  
          >
            {children}
        </div>
        </div>
    )
}
export default Ad