import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../store/authAdmin-Context";

const AdminRootLayout: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRootLayout;
