import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

import { AuthProvider } from "./DataContext";
function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Home/>
      <Footer/>
    </AuthProvider>
  </>
  )
}

export default App;
