import React from 'react'
import { useState } from 'react';
import Child from './child';

const Parent = () => {
    const [color, setColor] = useState("#ffffff")

    function handleChange(event) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h2>COLOR PICKER</h2>
            <label>select color: </label>
            <input type="color" value={color} id="color" onChange={handleChange} />

            
            <Child bgColor={color}/>
            
        </div>

    )
}

export default Parent