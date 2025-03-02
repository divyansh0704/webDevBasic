import { useState } from 'react'

import './App.css'
import Child from './components/Child'

function App() {
  const [user, setuser] = useState("Alice")

  return (
    <div>
    <Child user = {user}/>
    </div>
  )
}

export default App
