import { useContext, useReducer } from "react"
import { DispatchContext, initialState, reducer, StateContext } from "./data"

export default function Home(){

    let state = useContext(StateContext)
    let dispatch = useContext(DispatchContext)


  return (
    <div>
      <h1>The current theme is {state.theme}</h1>
    </div>
  )
}