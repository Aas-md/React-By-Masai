import { createContext } from "react"

    
export let initialState = {theme : 'dark'}

export let reducer = (state,action)=>{

  switch(action.type){
   
    case 'light' : return {...state, theme : 'light'}
    case 'dark' : return {...state, theme : 'dark'}
    default : return state

  }
}

export let StateContext = createContext();
export let DispatchContext = createContext();

