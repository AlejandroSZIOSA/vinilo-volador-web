import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth_Ctx } from "../store/auth-Context";

const AdminRootLayout: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();

  return is_Authenticated ? (
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
