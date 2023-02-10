// Node modules
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App";
import { ItemsProvider } from "./state/ItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>
);
