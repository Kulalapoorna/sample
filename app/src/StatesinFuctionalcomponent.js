import React, {useState} from 'react'
import './State.css'
export default function StatesinFuctionalcomponent() {

    let [name,updateName]=useState("Venky");
    return (
        <div className='demo'>
            <h1 onMouseOver={()=>{updateName("Venky")}}
            onMouseLeave={()=>{updateName("Venky.K")}}>
                {name}
               
            </h1>
        </div>
    )
}
