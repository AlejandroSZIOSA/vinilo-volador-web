import { type FC } from "react";
import { Outlet } from "react-router-dom";
import UserFooter from "../components/UserFooter";
import MainHeader from "../components/MainHeader";

const UserRootPage: FC = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <UserFooter />
    </>
  );
};

export default UserRootPage;
