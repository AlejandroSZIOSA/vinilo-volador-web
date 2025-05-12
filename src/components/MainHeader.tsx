import { type FC } from "react";
import NavBar from "./in-MainHeader/NavBar";
import Logo from "./Logo";
import { useAuth_Ctx } from "../store/auth-Context";

const MainHeader: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();
  return (
    <header style={{ display: "flex", flexDirection: "row" }}>
      <p>{is_Authenticated ? "Admin" : "User"}</p>
      <h1>Main Header</h1>
      <NavBar />
    </header>
  );
};

export default MainHeader;
