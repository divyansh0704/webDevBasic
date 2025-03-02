import React from 'react'
import Child from './Child';
import { useState } from 'react';

const Parent = () => {
    const [count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }


  return (
    <div>
        <h1>Parent component</h1>
        <p>Counter: {count}</p>
        <button onClick={increment}>increment</button>
        <Child cunt={count}/>
        
    </div>
  )
}

export default Parent