import { type FC } from "react";
import { Outlet } from "react-router-dom";
import UserFooter from "../components/UserFooter";

const UserRootPage: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </>
  );
};

export default UserRootPage;
