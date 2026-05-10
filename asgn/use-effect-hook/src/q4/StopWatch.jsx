import { useRef, useState } from "react";

export default function StopWatch() {
  let [count, setCount] = useState(0);
  const id = useRef(null);
  const limit = useRef(2);

  let handleStart = () => {
    id.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  if (count == 10) console.log("dummy");
  if (count == Number(limit.current.value)) clearInterval(id.current);
  let handleStop = () => {
    clearInterval(id.current);
  };

  let handleReset = () => {
    setCount((prev) => (prev = 0));
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      &nbsp;
      <button onClick={handleStop}>Stop</button>
      &nbsp;
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type="text" placeholder="0, 1, 2" ref={limit} />
      <button onClick={handleStart}>set Target</button>
    </div>
  );
}
