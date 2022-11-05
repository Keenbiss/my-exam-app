import React, { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

export const Fallback = ({ error }) => {
  return (
    <div role="alert">
      <h1>OOPS!!! </h1>
      <h2>Somethng is definitely wrong!!!</h2>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export const ErrorApp = () => {
  const [count, setCount] = useState(0);
  const MAX_COUNT_ALLOWED = 5;
  const handleError = useErrorHandler();

  function increment() {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error("Count limit exceeded");
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    } catch (e) {
      console.log("Clickcounter error", e);
      handleError(e);
    }
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <Helmet>
        <title>Errorpage</title>
        <meta
          name="description"
          content="a page to test error boundary with the max count limit of five"
        ></meta>
        <link rel="canonical" href="/Errorpage"></link>
      </Helmet>
      <div>
        <h1>Error Page</h1>
      </div>
      <div className="About">
        <h3>ABOUT</h3>
        <p>A page to test error boundary</p>
      </div>
      <div className="App">
        <h2>COUNTER APP</h2>
        <h3>Increase count to 6 to test error boundary</h3>
        <div className="Box">
          <button style={{ color: "red" }} onClick={decrement}>
            DECREMENT
          </button>
          <h2>{count}</h2>
          <button style={{ color: "green" }} onClick={increment}>
            INCREMENT
          </button>
        </div>
      </div>
    </>
  );
};

// export const Fallback = ({ error }) => {
//   return (
//     <div role="alert">
//       <h1>OOPS!!! </h1>
//       <h2>Somethng is definitely wrong!!!</h2>
//       <pre style={{ color: "red" }}>{error.message}</pre>
//     </div>
//   );
// };
// const MAX_COUNT_ALLOWED = 5;
// export const ErrorApp = () => {
//   const [count, setCount] = useState(0);

//   const handleError = useErrorHandler();

//   const Increment = () => {
//     try {
//       if (count === MAX_COUNT_ALLOWED) {
//         throw new Error("Count limit exceeded");
//       } else {
//         setCount((prevCount) => prevCount + 1);
//       }
//     } catch (e) {
//       console.log("Clickcounter error", e);
//       handleError(e);
//     }
//   };

//   const Decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <>
//       {/* <ErrorBoundary FallbackComponent={Fallback}> */}
//       <div>
//         <h1>Error Page</h1>
//       </div>
//       <div className="About">
//         <h3>ABOUT</h3>
//         <p>A page to test error boundary</p>
//       </div>
//       <div className="App">
//         <h2>COUNTER APP</h2>
//         <h3>Increase count to 6 to test error boundary</h3>
//         <div className="Box">
//           <button style={{ color: "red" }} onClick={Decrement}>
//             DECREMENT
//           </button>
//           <h2>{count}</h2>
//           <button style={{ color: "green" }} onClick={Increment}>
//             INCREMENT
//           </button>
//         </div>
//       </div>
//       {/* </ErrorBoundary> */}
//     </>
//   );
// };
