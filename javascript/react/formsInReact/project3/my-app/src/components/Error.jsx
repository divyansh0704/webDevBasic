import React from 'react'
import { useState } from 'react';
import './Error.css'

const Error = () => {
    const [formData, setFormData] = useState({ Email: "", Password: "" });
    const [error, setError] = useState("")
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    }
    function handleSubmit(event) {
        event.preventDefault();
        if(!formData.Email || !formData.Password){
            setError("All fields are required")
            return;
        }
        setError("");
        alert(`Email: ${formData.Email}, Password: ${formData.Password}`);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='type Email' value={formData.Email} name='Email' onChange={handleChange} />
                <input type="text" placeholder='type password' value={formData.Password} name='Password' onChange={handleChange} />
                <br />
                <button type='submit'>Log in</button>

                {error && <p style={{color:"red"}}>{error}</p> }
            </form>
        </div>
    )
}

export default Error