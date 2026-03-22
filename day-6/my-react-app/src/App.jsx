import { useEffect, useState } from 'react'
import './App.css'
import Timer from './component/Timer'

function App() {
  
  let [timer,setTimer] = useState(false)

  useEffect(()=>{
    console.log("UComponent mounted")
  },[])

  return (
    <>
     {timer && <Timer/>}
        <h1>Hello world </h1>
        <button onClick={()=>setTimer((prev)=>!prev)}>Start Timer</button>
    </>
  )
}

export default App
