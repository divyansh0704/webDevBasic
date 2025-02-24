import React from 'react'
import { useState } from 'react'
import './color.css'

const ColorChanger = () => {
    const[bgColor,setBgColor]=useState("white");
    function changeColor(){
        const colors = ["red","green","blue","purple","orange","yellow"];
        const randomColor = colors[Math.floor(Math.random()*colors.length)];
        setBgColor(randomColor)
    }

  return (
    <div id='yo' style={{backgroundColor:bgColor}}>
        <h1>Change color</h1>
        <button onClick={changeColor} style={{height:"60px",width:"400px",padding:"10px 20px",fontSize:"16px"}}>change background color</button>
    </div>
  )
}

export default ColorChanger



