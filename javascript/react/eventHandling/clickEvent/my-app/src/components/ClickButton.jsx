import React from 'react'

const ClickButton = () => {

    function handleClick(){
        alert("button clicked");
    }
  return (
    
    
        <button onClick={handleClick}>click me</button>
    
  )
}

export default ClickButton