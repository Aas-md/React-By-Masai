import { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

export default function Counter() {
  let [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => state.count > 0 && dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
