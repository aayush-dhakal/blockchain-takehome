import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import initializeMoralis from "./utils/initializeMoralis.js";

initializeMoralis(import.meta.env.VITE_PUBLIC_MORALIS_API_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
