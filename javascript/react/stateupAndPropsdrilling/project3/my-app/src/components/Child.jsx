import React from 'react'
import './child.css'

const Child = ({bgColor}) => {

  return (
    <div id='bg' style={{backgroundColor:bgColor}} >
        <p>Background Color: {bgColor}</p>
    </div>
  )
}

export default Child