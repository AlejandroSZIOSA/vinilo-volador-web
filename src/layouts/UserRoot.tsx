import { type FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";
import MainHeader from "../components/MainHeader";

const UserRootLayout: FC = () => {
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

export default UserRootLayout;
