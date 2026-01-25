import { useState } from 'react'
import Home from './pages/home'
import "./styles/global.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
