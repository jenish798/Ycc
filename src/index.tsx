import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/ThemeProvider";

// Import the service worker registration
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Unregister the service worker to prevent caching
serviceWorkerRegistration.unregister();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="yatra-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
