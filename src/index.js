import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i-18next";
import { BrowserRouter } from "react-router-dom";
import loading from "./assets/icons/Loading.gif";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <div className="loadingIcoonn">
        <img className="loadinIcoonnSvg" src={loading} alt="loading" />
      </div>
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
