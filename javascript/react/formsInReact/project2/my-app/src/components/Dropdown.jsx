import React from 'react'
import './Drop.css'
import { useState } from 'react';

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState("");

    function handleChange(event) {
        setSelectedOption(event.target.value);
    }
    return (
        <div id='dis'>
            <label for = 'fruits' >Select an option: </label>
            <select name="name" id="fruits" value={selectedOption} onChange={handleChange} >
                <option value="">--choose--</option>
                <option value="apple">Apple</option>
                <option value="banana">banana</option>
                <option value="orange">orange</option>


            </select>

            <p>Selected option : {selectedOption || "None"}</p>
        </div>
    )
}

export default Dropdown