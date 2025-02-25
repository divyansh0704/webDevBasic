import React from 'react'
import { useState } from 'react'

const Filterit = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const [filterNumbers,setFilterNumbers]=useState(numbers);
    function filterEven(){
        setFilterNumbers(numbers.filter(num=>num%2===0))
    }
  return (
    <div>
        <h2>numbers : </h2>
        <ul>
            {filterNumbers.map((num,index)=>(
                <li key ={index}>{num}</li>
            ))}
        </ul>
        <button onClick={filterEven}>show even number</button>
    </div>
  )
}

export default Filterit