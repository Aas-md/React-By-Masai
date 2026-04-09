import { useState } from "react";

import "./App.css";
import ThemeContext from "./DataProvider";
import Home from "./HomaPage";
import AboutPage from "./AboutPage";

function App() {
    let [theme, setTheme] = useState("dark");
  return (
    <>
      
      <ThemeContext.Provider value={theme}>
        <Home />
        <AboutPage/>
      </ThemeContext.Provider>

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change Theme</button>
     
    </>
  );
}

export default App;
