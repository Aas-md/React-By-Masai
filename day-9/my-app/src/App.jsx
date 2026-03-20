import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterCompo/>
    </>
  )
}

export default App

function FocusCompo(){

  let inputRef = useRef(null)

  let handleFocusInput = ()=>{
    console.log(inputRef.current)
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "white"
    inputRef.current.style.color = "black"
    inputRef.current.style.margin = "0 auto"
  


  }

  return (
    <>

      <input ref={inputRef} type="text" placeholder='Enter your name' />
      <button onClick={handleFocusInput}>Submit</button>

    </>
  )
}

function CounterCompo(){

  let [count, setCount] = useState(0)
  let renderCount = useRef(1)
  let [prev,setPrev] = useState(5)

  useEffect(()=>{
    renderCount.current += 1
    

  })

  return (

    <>

    <h1>Count : {count}</h1>
    <button onClick={()=>{setCount(prev => prev+1)}}>Increment</button>
    <h3>Renreder : {renderCount.current} times</h3>
    <h3>Prev valueis  : {prev} times</h3>



    </>
  )
}
