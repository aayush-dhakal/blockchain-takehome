import React from "react";
import ReactDOM from "react-dom/client";
import Moralis from "moralis";
import App from "./App.jsx";

await Moralis.start({
  apiKey: import.meta.env.VITE_PUBLIC_MORALIS_API_KEY,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
