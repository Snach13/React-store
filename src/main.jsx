import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App"; // Importing your App component

// Create the root element and render the App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
