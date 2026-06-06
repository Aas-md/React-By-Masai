import { useContext } from "react";
import { counterContext } from "./CounterContext";

export default function Counter() {
  let { count, incrementCount, decrementCount } = useContext(counterContext);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Increment</button>
    </>
  );
}
