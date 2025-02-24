import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>user Name: {props.name}</h1>
        <h1>user age: {props.age}</h1>
    </div>
  )
}

export default User