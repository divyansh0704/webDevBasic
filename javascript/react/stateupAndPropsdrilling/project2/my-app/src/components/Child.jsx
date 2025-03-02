import React from 'react'

const Child = ({message}) => {
  return (
    <div>
        <h2>Child component</h2>
        <p>Received message: {message || "no message yet"}</p>
    </div>
  )
}

export default Child