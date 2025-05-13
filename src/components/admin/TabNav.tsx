import { NavLink } from "react-router-dom";

const TabNav = () => {
  return (
    <div
      style={{ display: "flex", gap: "1rem", borderBottom: "1px solid #ccc" }}
    >
      <NavLink
        to="/admin"
        style={({ isActive }) => ({
          padding: "0.5rem 1rem",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom: isActive ? "2px solid blue" : "none",
          textDecoration: "none",
          color: "black",
        })}
      >
        Add
      </NavLink>
      <NavLink
        to="/admin/remove"
        style={({ isActive }) => ({
          padding: "0.5rem 1rem",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom: isActive ? "2px solid blue" : "none",
          textDecoration: "none",
          color: "black",
        })}
      >
        Remove
      </NavLink>
      <NavLink
        to="/admin/edit"
        style={({ isActive }) => ({
          padding: "0.5rem 1rem",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom: isActive ? "2px solid blue" : "none",
          textDecoration: "none",
          color: "black",
        })}
      >
        Edit
      </NavLink>
      <NavLink
        to="/admin/show"
        style={({ isActive }) => ({
          padding: "0.5rem 1rem",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom: isActive ? "2px solid blue" : "none",
          textDecoration: "none",
          color: "black",
        })}
      >
        Show
      </NavLink>
    </div>
  );
};

export default TabNav;
