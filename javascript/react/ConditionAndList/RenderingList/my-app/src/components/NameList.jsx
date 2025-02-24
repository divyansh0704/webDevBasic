import React from 'react'

const NameList = () => {
    const names = ["gagan","kavyum","gopal"];
  return (
    <div>
        <h1>List of names</h1>
        <ul>
            {names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default NameList