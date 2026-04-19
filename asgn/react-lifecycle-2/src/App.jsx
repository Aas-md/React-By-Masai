import { useState } from "react";

import "./App.css";
import ProfileCard from "./ProfileCard ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfileCard
        name="Aas Mohammad"
        age={26}
        bio="I am a student working on a React project"
      />
    </>
  );
}

export default App;
