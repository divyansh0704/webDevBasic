import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [formData,setFormData]=useState({Email:"",Password:""});
    function handleChange(event){

        const {name,value}=event.target;
        setFormData((prev)=>({...prev,[name]:value}));

    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Email: ${formData.Email}, Password: ${formData.Password}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='Email' value={formData.Email} placeholder='Type Email' onChange={handleChange} required />
            <input type="text" name='Password' value={formData.Password} placeholder='Type Password' onChange={handleChange} required />
            <button type='submit'>Log in</button>
        </form>
    </div>
  )
}

export default Login