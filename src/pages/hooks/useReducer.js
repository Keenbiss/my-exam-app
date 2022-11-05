import React, { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case "ACTIONS.INCREMENT":
      return { count: state.count + 1 };
    case "ACTIONS.DECREMENT":
      return { count: state.count - 1 };
    case "ACTIONS.RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export const UseApp = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: "ACTIONS.INCREMENT" });
  }
  function decrement() {
    dispatch({ type: "ACTIONS.DECREMENT" });
  }
  function reset() {
    dispatch({ type: "ACTIONS.RESET" });
  }
  return (
    <>
      <Helmet>
        <title>UseReducerHook</title>
        <meta
          name="description"
          content="Try the counter app for increment, decrement amd reset values"
        ></meta>
        <link rel="canonical" href="/useReducer"></link>
      </Helmet>
      <div>
        <h1>UseReducer Page</h1>
      </div>
      <div className="About">
        <h3>ABOUT</h3>
        <p>
          A page showing the implementation of combination of states with a
          useReducer that implements a counter with increment, decrement, reset
          and setValue functions{" "}
        </p>
      </div>
      <div className="App">
        <h2>COUNTER APP</h2>
        <div className="Box">
          <button style={{ color: "red" }} onClick={decrement}>
            DECREMENT
          </button>
          <h2>{state.count}</h2>
          <button style={{ color: "green" }} onClick={increment}>
            INCREMENT
          </button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
};
