import { type FC } from "react";
import { Outlet } from "react-router-dom";
import UserFooter from "../components/UserFooter";

const AdminRootLayout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </>
  );
};

export default AdminRootLayout;
