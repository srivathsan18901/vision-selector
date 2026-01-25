import { useState } from 'react'
import Home from './pages/home'
import "./styles/global.css";
import { ToastContainer } from 'react-toastify';



function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Home />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      /></>
  )
}

export default App
