import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./compnent/header";

// Lazy-loaded components
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Suspense
          fallback={
            <div>
              <h1>Hey ,I am using lazzy loader</h1>
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
      <p>Testcase added</p>
    </div>
  );
}

export default App;
