import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${classes.headerNavLinks} ${
              isActive ? classes.headerNavLinksActive : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${classes.headerNavLinks} ${
              isActive ? classes.headerNavLinksActive : ""
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            `${classes.headerNavLinks} ${
              isActive ? classes.headerNavLinksActive : ""
            }`
          }
        >
          Series
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
