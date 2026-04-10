import { createContext, useReducer } from "react";
import "./App.css";
import { DispatchContext, initialState, reducer, StateContext } from "./data";
import Home from "./Home";



function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div
          style={{
            backgroundColor: state.theme === "dark" ? "grey" : "white",
            color: state.theme === "dark" ? "white" : "black",
            height: "100vh",
          }}
        >
          <h1>Current theme is {state.theme}</h1>
          <button
            onClick={() =>
              dispatch({ type: state.theme == "dark" ? "light" : "dark" })
            }
          >
            Toggle Theme
          </button>
          <Home />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
