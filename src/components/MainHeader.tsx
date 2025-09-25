import { type FC } from "react";
import NavBar from "./in-Header/NavBar";
import { useAuth_Ctx } from "../store/auth-Context";
import ShowDateTime from "./in-Header/ShowDateTime";
import DarkLightToggleBtn from "./in-Header/DarkLightToggleBtn";
import { Link } from "react-router-dom";
import { HEADER_ICONS_SIZES } from "../utils/constants";
import classes from "./MainHeader.module.css";
import HomeIcon from "../assets/icons/home.svg";

const MainHeader: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();
  const { width, height } = HEADER_ICONS_SIZES;

  return (
    <header>
      <div className={classes.headerInnerContainer}>
        {is_Authenticated ? (
          <div className={classes.userLogoContainer}>
            <img
              src="/src/assets/icons/adminUnlock.svg"
              width={width}
              height={height}
            ></img>
            <p>Admin</p>
          </div>
        ) : (
          <Link to={"/"}>
            <div className={classes.userLogoContainer}>
              <img src={HomeIcon} width={width} height={height}></img>
              <p>Home</p>
            </div>
          </Link>
        )}
        {/* fix: Using dynamic css classes */}
        <div>
          <DarkLightToggleBtn />
        </div>
        <NavBar />
      </div>
      <ShowDateTime />
    </header>
  );
};

export default MainHeader;
