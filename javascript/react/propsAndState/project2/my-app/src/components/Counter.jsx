import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <p>count: {count}</p>
        <p>{count%2===0 ? "Even" :"Odd"}</p>
        <button onClick={()=>setCount(count+1)}>incease</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}

export default Counter