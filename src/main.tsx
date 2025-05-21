import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider_Ctx } from "./store/auth-Context.tsx";
import { AdminProvider_Ctx } from "./store/admin-Context.tsx";
import { UiProvider_Ctx } from "./store/ui-Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider_Ctx>
      <AdminProvider_Ctx>
        <UiProvider_Ctx>
          <App />
        </UiProvider_Ctx>
      </AdminProvider_Ctx>
    </AuthProvider_Ctx>
  </StrictMode>
);
