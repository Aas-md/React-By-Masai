import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TogleButton from './TogleButton'

function App() {
  const [togle, setTogle] = useState(false) 

  return (
    <>
    
      <TogleButton toggle={togle} setToggle={setTogle}/>
    </>
  )
}

export default App
