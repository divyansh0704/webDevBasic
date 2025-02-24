import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}

export default Counter