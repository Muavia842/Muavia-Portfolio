import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Loading from "./components/lazyLoading/Loading";
// import App from "./App";
import { Suspense } from "react";
const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// reportWebVitals();
