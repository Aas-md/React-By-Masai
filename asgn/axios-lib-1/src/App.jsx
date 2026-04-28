import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FetchDataQ1 from './fetchDataQ1'
import ProductCard from './ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductCard/>
    </>
  )
}

export default App
