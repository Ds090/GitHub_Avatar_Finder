import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Use ReactDOM's createRoot method to render the application.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component with BrowserRouter to enable routing functionality.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
