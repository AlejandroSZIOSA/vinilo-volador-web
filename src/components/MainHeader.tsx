import { type FC } from "react";
import NavBar from "./in-Header/NavBar";
import { useAuth_Ctx } from "../store/auth-Context";
import ShowDateTime from "./in-Header/ShowDateTime";
import DarkLightToggle from "./DarkLightToggle";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { HEADER_ICONS_SIZES } from "../utils/constants";

const MainHeader: FC = () => {
  const { is_Authenticated } = useAuth_Ctx();
  const { width, height } = HEADER_ICONS_SIZES;

  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        {is_Authenticated ? (
          <img
            src="/src/assets/icons/adminUnlock.svg"
            width={width}
            height={height}
          ></img>
        ) : (
          <Link to={"/"}>
            <img
              src="/src/assets/icons/home.svg"
              width={width}
              height={height}
            ></img>
          </Link>
        )}
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
