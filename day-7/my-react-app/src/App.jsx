import { useState } from 'react'
import './App.css'
import { useContext } from 'react'


let NameContext = React.createContext()

function App() {
  let [name, setName] = useState("Duplesis")

  return (
   
    <NameContext.Provider value={name}>
      <Parent />
    </NameContext.Provider>

  )
}

function Parent(){
  return (
    <><Child /></>
  )
}

function Child(){

  return (
    <><GrandChild /></>
  )
}

function GrandChild(){

  let name = useContext(NameContext)
  return (
    <><h1>Name is : {name}</h1></>
  )
}

export default App
