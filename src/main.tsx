import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider_Ctx } from "./store/auth-Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider_Ctx>
      <App />
    </AuthProvider_Ctx>
  </StrictMode>
);
