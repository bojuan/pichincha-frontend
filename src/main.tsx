import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonContextProvider } from "./context/PokemonContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>
);
