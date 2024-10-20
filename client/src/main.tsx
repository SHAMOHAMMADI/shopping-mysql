import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Layout from "./components/layout/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Vazir.ttf";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
