import BasicCard from "./BasicCard";
import { useContext } from "react";
import { themeContext } from "./ThemeContext";

export default function MainContent() {
  let { theme, setTheme } = useContext(themeContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        background: theme == "light" ? "white" : "black",
      }}
    >
      {(() => {
        let row = [];
        for (let i = 0; i < 50; i++) {
          row.push(<BasicCard style={{ margin: "10px", background: "#F0F8FF" }} key={i} />);
        }
        return row;
      })()}
    </div>
  );
}
