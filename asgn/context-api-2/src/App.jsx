import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./q-2/Home";
import { AuthContextProvider } from "./q-2/AuthContext";
import { ThemeContextProvider } from "./q-2/ThemeContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Home />
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
