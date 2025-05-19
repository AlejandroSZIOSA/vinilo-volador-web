import { type FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";
import MainHeader from "../components/MainHeader";

const UserRootPage: FC = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserRootPage;
