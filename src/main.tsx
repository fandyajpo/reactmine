import React from "react";
import ReactDOM from "react-dom/client";
import ProfileProvider from "./lib/profileContext.tsx";
import TanstackProvider from "./lib/tanstack.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </TanstackProvider>
  </React.StrictMode>
);
