import { useState } from "react";

export default function StopWatch() {
  let [count, setCount] = useState(0);

  let id = 0;
  let test = 0;

  let handleStart = () => {
    id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    test = 10;
    setTimeout(() => {
      clearInterval(id);
    }, 3000);
  };

  let handleStop = () => {
    console.log(test);
  };

  

  return (
    <div>
      <h1>Stop Watch</h1>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      &nbsp;
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
