import React from 'react'
import { useState } from 'react';

const Toggleit = () => {
    const[isVisible,setIsVisible]=useState(false);
    function toggle(){
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <h1>Toggle it</h1>
        <button onClick={toggle}>{isVisible?"hide":"show"} message</button>
        {isVisible && <p>This is an toggle message </p> }
    </div>
  )
}

export default Toggleit