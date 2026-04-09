import { useReducer, useState } from 'react'
import './App.css'

let reducer = (state,action)=>{

  switch(action.type){
    case "increment" : 
    return {count : state.count + 1}
    case "decrement" :
    return {count : state.count - 1}
    case "reset" :
    return {count : 0}
    default :
    return state

  }
}

function App() {

  
  
  let initialState = {count : 0}
  let [state, dispatch] = useReducer(reducer,initialState)

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={()=> dispatch({type : "increment"})}>Increment</button>
      <button onClick={()=> dispatch({type : "decrement"})}>Decrement</button>
      <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
    </>
  )
}

export default App
