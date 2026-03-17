// App.jsx
import React, { useState } from 'react'; // Import necessary React features
import './App.css'; // Import associated CSS file
import Counter from './components/Counter';

function App() {
    
    let [count,setCount] = useState(0)

  return (
    <>
        <Counter count = {count} setCount={setCount}/>
    </>
  );
}

export default App;
