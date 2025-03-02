
import './App.css'
import Child from './components/Child'
import { useState } from 'react'

function App() {
  const [message,setMessage]=useState("Hello from parent!")

  

  return (
    <div>
      <Child message={message}/>

    </div>
  )
}

export default App
