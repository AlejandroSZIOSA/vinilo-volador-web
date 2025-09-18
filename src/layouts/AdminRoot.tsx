import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth_Ctx } from "../store/auth-Context";
import MainHeader from "../components/MainHeader";
import TabNav from "../components/admin/TabNav";

import classes from "./AdminRoot.module.css";

const AdminRootLayout: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();

  return is_Authenticated ? (
    <>
      <MainHeader />
      <main>
        <TabNav />
        <Outlet />
      </main>
      <div className={classes.mobileBottomArea}></div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRootLayout;
