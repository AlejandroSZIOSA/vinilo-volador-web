import { type FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./TabNav.module.css";

const TabNav: FC = () => {
  return (
    <div className={classes.tabNavContainer}>
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive ? classes.navLinkIsActive : classes.navLinkIsNotActive
        }
        end /* Fix problem */
      >
        Add
      </NavLink>
      <NavLink
        to="/admin/remove"
        className={({ isActive }) =>
          isActive ? classes.navLinkIsActive : classes.navLinkIsNotActive
        }
      >
        Remove
      </NavLink>
      <NavLink
        to="/admin/edit"
        className={({ isActive }) =>
          isActive ? classes.navLinkIsActive : classes.navLinkIsNotActive
        }
      >
        Edit
      </NavLink>
      <NavLink
        to="/admin/show"
        className={({ isActive }) =>
          isActive ? classes.navLinkIsActive : classes.navLinkIsNotActive
        }
      >
        Show
      </NavLink>
      <NavLink
        to="/admin/event"
        className={({ isActive }) =>
          isActive ? classes.navLinkIsActive : classes.navLinkIsNotActive
        }
      >
        Event
      </NavLink>
    </div>
  );
};

export default TabNav;
