import { type FC } from "react";
import NavBar from "./in-Header/NavBar";
import { useAuth_Ctx } from "../store/auth-Context";
import ShowDateTime from "./in-Header/ShowDateTime";
import DarkLightToggle from "./in-Header/DarkLightToggle";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { HEADER_ICONS_SIZES } from "../utils/constants";

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
              <img
                src="/src/assets/icons/home.svg"
                width={width}
                height={height}
              ></img>
              <p>Home</p>
            </div>
          </Link>
        )}
        {/* fix: Using dynamic css classes */}
        <div>
          <DarkLightToggle />
        </div>
        <NavBar />
      </div>
      <ShowDateTime />
    </header>
  );
};

export default MainHeader;
