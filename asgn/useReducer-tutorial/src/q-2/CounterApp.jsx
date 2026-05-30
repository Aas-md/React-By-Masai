import { useReducer } from "react";
import { initialState, counterReducer } from "./counterReducer";

export default function CounterApp() {
  let [state, dispatch] = useReducer(counterReducer, initialState);

  console.log("Hello ");
  return (
    <>
      <h1>Hello counter App kal </h1>
    </>
  );
}

// make a new project for this question and delete this because it is not auto restarting .
