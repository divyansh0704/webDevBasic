import React from 'react'
import { useState } from 'react';

const TextLengthCounter = () => {
    const [text, setText] = useState("");
    function handleChange(event) {
        setText(event.target.value);

    }
    return (
        <div>
            <h1>TextLengthCounter</h1>
            <input type="text" onChange={handleChange} placeholder='type something...'/>
            <p>Text length: {text.length}</p>
        </div>
    )
}

export default TextLengthCounter