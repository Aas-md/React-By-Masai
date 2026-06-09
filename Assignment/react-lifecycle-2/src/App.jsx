import { useState } from "react";

import "./App.css";
import AutoCorrect from "./q-2/AutoCorrect";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AutoCorrect/>
     </>
  );
}

export default App;
