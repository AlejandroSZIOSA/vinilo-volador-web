import { type FC, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HEADER_ICONS_SIZES } from "../../utils/constants";
import { useAuth_Ctx } from "../../store/auth-Context";
import AdminLogoutLockIcon from "../../assets/icons/logout-lock.svg";
import AdminLoginLockIcon from "../../assets/icons/adminLock.svg";
import classes from "./NavBar.module.css";

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
        <div>
          <p>LogOut</p>
          <img
            src={AdminLogoutLockIcon}
            width={width}
            height={height}
            onClick={handleLogOut}
          ></img>
        </div>
      </li>
    );
  } else {
    content = (
      <li>
        <NavLink to="/login">
          <div>
            <p>LogIn</p>
            <img src={AdminLoginLockIcon} width={width} height={height}></img>
          </div>
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
