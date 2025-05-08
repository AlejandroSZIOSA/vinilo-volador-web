import { type FC } from "react";
import { Outlet } from "react-router-dom";

const UserRootPage: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserRootPage;
