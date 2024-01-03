import React from "react"; 
import "./Counter.css"
import { useState } from "react";

function Counter(){
const [counter, Setcounter] =useState(0)
    return(
        <>
        <h1 className="">The Counter Project</h1>
        <div className="projectdiv">
           <h1 id="heading"> {counter} </h1>

            <div className="btn"> 
            <button className="btntype" onClick={()=>{Setcounter(counter+1)}}>Increment</button>
            <button className="btntype"  onClick={()=>{
                
                if(counter <= 0){
                    window.alert(`The Value is Going beyond 0`)
                }
                else{   Setcounter(counter-1)}
             }}>Decrement</button>
            </div>


        
        
        </div>
        </>
    )
}


export default Counter ; 