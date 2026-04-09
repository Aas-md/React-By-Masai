import { useContext } from "react";
import ThemeContext from "./DataProvider";

export default function Home() {
    let theme = useContext(ThemeContext)
   
  return (
    <>
     <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
         <h1 >Home Page</h1>
     </div>
    </>
  );
}
