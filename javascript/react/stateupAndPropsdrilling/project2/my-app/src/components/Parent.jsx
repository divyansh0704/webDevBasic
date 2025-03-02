import React from 'react'
import { useState } from 'react'
import Child from './Child';
import './parent.css'

const Parent = () => {
    const [message, setMessage] = useState("")
    const [sentmsg, setSentmsg] = useState("");
    function handleChange(event) {
        setMessage(event.target.value);
    }
    function handleSend() {
        setSentmsg(message)
    }
    return (
        <div id='this' >
            <h1>Parent Component</h1>
            <div className="sendbox">
                <input type="text" placeholder='type message here....' name='msg' value={message} onChange={handleChange} />
                <button onClick={handleSend}>send</button>
            </div>

            <Child message={sentmsg} />
        </div>
    )
}

export default Parent