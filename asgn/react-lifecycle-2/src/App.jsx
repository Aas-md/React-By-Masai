import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
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
