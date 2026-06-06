import { createContext, useState } from "react";

export const counterContext = createContext();

export function CounterProvider({ children }) {
  let [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  let decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <counterContext.Provider value={{ count, incrementCount, decrementCount }}>{children}</counterContext.Provider>
  );
}
