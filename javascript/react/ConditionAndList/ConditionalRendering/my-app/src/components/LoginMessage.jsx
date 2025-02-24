import React from 'react'
import { useState } from 'react';

const LoginMessage = () => {
    const [isLoggedIn,setIsLoggedIn]= useState(false);
  return (
    <div>
        <h2>{isLoggedIn?"welcome Back!":"Please Login"}</h2>
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Log out":"Log in"}</button>
    </div>
  )
}

export default LoginMessage