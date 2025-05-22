import { type FC } from "react";
import NavBar from "./in-Header/NavBar";
/* import Logo from "./Logo"; */
import { useAuth_Ctx } from "../store/auth-Context";
import ShowDateTime from "./in-Header/ShowDateTime";
import DarkLightToggle from "./DarkLightToggle";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();

  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        {is_Authenticated ? <p>Admin</p> : <Link to={"/"}>User</Link>}
        <DarkLightToggle />
        <NavBar />
      </div>
      <ShowDateTime />
    </header>
  );
};

export default MainHeader;
