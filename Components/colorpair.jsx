import { useState } from "react"
export default function ColorPair(){
const [block1, setBlock1]=useState('');
const [block2, setBlock2]=useState('');
const styles={
    container:{
         width:"100%",
            height:'auto',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            position:"relative"
            
},
}
function Random(){
const r=Math.floor(Math.random()*255);
const g=Math.floor(Math.random()*255);
const b=Math.floor(Math.random()*255);
const rgb=`rgb(${r},${g},${b})`;
return rgb;
}
function ChangedColor(){
setBlock1(Random());
setBlock2(Random());
}
    return(
        <div style={styles.container}>
            <div style={{ 
                fontSize:"25px",
                width:"50%",
                height:"200px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                transition:"all .5s ease",
                backgroundColor:block1,
                color:block2
              }}> {block1}</div>
            <div style={{ 
                 fontSize:"25px",
                width:"50%",
                height:"200px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                transition:"all .5s ease",
                backgroundColor:block2,
                color:block1
                }}>{block2}</div>
                 <button onClick={ChangedColor}
                 style={{
                    position:"absolute",
                    top:"50%",
                    left:"50%",
                    transform:"translate(-50%,-50%)"
                 }}
                 >Get Pair</button>
        </div>
       
    )
}