import useCounter from "./useCounter";
import { Helmet } from "react-helmet-async";

export const UseCustom = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <>
      <Helmet>
        <title>Customhook</title>
        <meta
          name="description"
          content="Try the counter app for increment, decrement amd reset values"
        ></meta>
        <link rel="canonical" href="/useCustom"></link>
      </Helmet>
      <div>
        <h1>CustomHook Page</h1>
      </div>
      <div className="About">
        <h3>ABOUT</h3>
        <p>
          A page showing the implementation of custom counter hook with
          increment, decrement, reset and setValue functions{" "}
        </p>
      </div>
      <div className="App">
        <h2>COUNTER APP</h2>
        <div className="Box">
          <button style={{ color: "red" }} onClick={decrement}>
            DECREMENT
          </button>
          <h2>{count}</h2>
          <button style={{ color: "green" }} onClick={increment}>
            INCREMENT
          </button>
          <button onClick={reset}>RESET</button>
        </div>
        {/* <div>
          <button
            type="button"
            onClick={() => {
              setValue();
            }}
          >
            setValue
          </button>
        </div> */}
      </div>
    </>
  );
};
