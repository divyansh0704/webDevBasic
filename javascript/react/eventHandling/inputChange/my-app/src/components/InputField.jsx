import React from 'react'
import { useState } from 'react';

const InputField = () => {
    const [text,setText]=useState("");
    function handleChange(){
        setText(event.target.value);
    }
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='type something....'/>
        <p>typed: {text}</p>
    </div>
  );
}

export default InputField