import { useState } from 'react'
import './App.css'
import { useContext } from 'react'
import ShowData from './component/ShowData'
import { DataProvider } from './DataContext/DataProvider'




function App() {


  return (
    <>

      <h1>Hello world</h1>

    <DataProvider>
      <ShowData/>
    </DataProvider>

    </>

  )
}


export default App
