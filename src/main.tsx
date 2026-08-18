import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PageContextWrapper from "./shared/context/page/PageContextWrapper.tsx";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <PageContextWrapper>
        <App />
      </PageContextWrapper>
    </CookiesProvider>
  </StrictMode>,
);
