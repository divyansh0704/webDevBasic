import React from 'react'
import { useState } from 'react'
import './multiple.css'

const Multiple = () => {
    const [formData,setFormData]=useState({name:"",email:""})
    function handleChange(event){
        const {name,value}=event.target;
        setFormData((prev)=>({...prev,[name]:value}))
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Name:${formData.name},Email:${formData.email}`)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='type Name ' value={formData.name} name='name' onChange={handleChange} />
            <input type="text" placeholder='type Email' value={formData.email} name='email' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Multiple