import React from "react";
import "./App.css";
import "./pages/hooks/useCounter";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { UseCustom } from "./pages/hooks/useCustom";

import { UseApp } from "./pages/hooks/useReducer";
import { Nopage } from "./pages/Nopage";

import { ErrorBoundary } from "react-error-boundary";
// import { NewApp } from "./pages/Errorboundary";
// import { ErrorBoundary } from "./pages/Errorboundary";
import { ErrorApp } from "./pages/Errorpage";
import { Fallback } from "./pages/Errorpage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="usecustom" element={<UseCustom></UseCustom>}></Route>

          <Route path="usereducer" element={<UseApp></UseApp>}></Route>

          <Route path="*" element={<Nopage></Nopage>}></Route>

          <Route path="errorpage" element={<ErrorApp></ErrorApp>}></Route>

          {/* <Route path="errorboundary" element={<NewApp></NewApp>}></Route> */}

          {/* <Route
          path="errorboundary"
          element={<ErrorBoundary></ErrorBoundary>}
        ></Route> */}
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
