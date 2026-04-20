import { useState } from "react";

import "./App.css";
import ButtonCompo from "./ButtonCompo";
import CardCompo from "./CardCompo";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <ButtonCompo color={color} setColor={setColor} />

      <CardCompo
        title={"This is a card component"}
        children={<p>This is a card component</p>}
      />
      <CardCompo
        title={"This is a second title"}
        children={"These are the children of a card"}
      />
      <CardCompo
        title={"This is a second title"}
        children={"These are the children of a card"}
      />
      <CardCompo
        title={"This is a second title"}
        children={"These are the children of a card"}
      />
    </>
  );
}

export default App;
