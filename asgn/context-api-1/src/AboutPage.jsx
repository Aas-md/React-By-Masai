import { useContext } from "react";
import ThemeContext from "./DataProvider";


export default function AboutPage() {
    let theme = useContext(ThemeContext)

  return (
    <>
      <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
        <h1>About Page</h1>
      </div>
    </>
  );
}
