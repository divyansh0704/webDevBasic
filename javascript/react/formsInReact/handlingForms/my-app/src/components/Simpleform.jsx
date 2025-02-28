import React from 'react'
import { useState } from 'react'
import './Simple.css'

const Simpleform = () => {
    const [name,setName]=useState(" ");
    function handleSubmit(event){
        event.preventDefault();
        alert(`submitted: ${name}`);
    }
  return (
    <div>
        <form id='form' onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='Enter your name ' onChange={(e)=>setName(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Simpleform