import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

// To Do:
// - About Page
// - Services Page
// - Animations
// - Connect to Blog Posts endpoint
// - Fix loading animation error
// - Cache in session storage
// - Optimize images
// - 3 blog posts
// - Add a site map
// - Uniform styling
