import { type FC, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HEADER_ICONS_SIZES } from "../../utils/constants";
import classes from "./NavBar.module.css";
import { useAuth_Ctx } from "../../store/auth-Context";

const NavBar: FC = () => {
  const { is_Authenticated, logout_Fn } = useAuth_Ctx();
  const { width, height } = HEADER_ICONS_SIZES;

  const navigate = useNavigate();

  function handleLogOut() {
    logout_Fn();
    navigate("/");
  }

  let content: ReactNode;

  if (is_Authenticated) {
    content = (
      <li>
        <img
          src="/src/assets/icons/logout-lock.svg"
          width={width}
          height={height}
          onClick={handleLogOut}
        ></img>
      </li>
    );
  } else {
    content = (
      <li>
        <NavLink to="/login">
          <img
            src="/src/assets/icons/adminLock.svg"
            width={width}
            height={height}
          ></img>
        </NavLink>
      </li>
    );
  }

  return (
    <nav>
      <ul className={classes.listStyle}>{content}</ul>
    </nav>
  );
};

export default NavBar;
