import { type FC, type ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth_Ctx } from "../../store/auth-Context";

const NavBar: FC = () => {
  const { is_Authenticated, logout_Fn } = useAuth_Ctx();
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
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    );
  }

  return (
    <nav>
      <ul>{content}</ul>
    </nav>
  );
};

export default NavBar;
