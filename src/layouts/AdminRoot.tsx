import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth_Ctx } from "../store/auth-Context";
import MainHeader from "../components/MainHeader";

const AdminRootLayout: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();

  return is_Authenticated ? (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRootLayout;
