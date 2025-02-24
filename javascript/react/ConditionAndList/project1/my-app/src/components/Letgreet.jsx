import React from 'react'

const Letgreet = () => {
    const hours = new Date().getHours();
    const message = hours<12?"Good Morning":"Good Evening";

  return (
    <h1>{message}</h1>
  )
}

export default Letgreet