import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <GrandChild user={user}/>
  )
}

export default Child