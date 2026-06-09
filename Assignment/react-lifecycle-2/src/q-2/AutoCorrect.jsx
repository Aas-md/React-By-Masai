import { useState } from "react";

export default function AutoCorrect() {
  let [word, setWord] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };

  let handleOnChange = (event) => {

    setWord(event.target.value);
  };

  return (
    <>
      <h1>Hello world</h1>
      <input value={word} onChange={handleOnChange}></input>
    </>
  );
}
