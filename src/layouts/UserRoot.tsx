import { type FC } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/user/Footer";

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
