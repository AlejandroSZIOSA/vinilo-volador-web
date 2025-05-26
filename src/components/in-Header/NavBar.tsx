import { type FC, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth_Ctx } from "../../store/auth-Context";
import classes from "./NavBar.module.css";
import { HEADER_ICONS_SIZES } from "../../utils/constants";

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
        <button onClick={handleLogOut}>Log out</button>
      </li>
    );
  } else {
    content = (
      <li style={{ listStyle: "none" }}>
        <NavLink to="/login" className={classes.NavLink}>
          <img
            src="/src/assets/icons/admin.svg"
            width={width}
            height={height}
          ></img>
        </NavLink>
      </li>
    );
  }

  return (
    <nav className={classes.navbar}>
      <ul>{content}</ul>
    </nav>
  );
};

export default NavBar;
