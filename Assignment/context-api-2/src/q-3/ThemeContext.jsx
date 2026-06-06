import { createContext, useState } from "react";
export let themeContext = createContext();

export function ThemeProvider({children}) {
    let [theme,setTheme] = useState("dark")


    return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
