import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./styles/navigation.css";
function Navigation({ menuIsOpen, toggleMenuBar }) {
  return (
    <header className="navigation">
      <div className="logo">
        <Link to="/" onClick={toggleMenuBar}>
          Logo
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="shop-with-us"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Shop with us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-mission"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Our mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="hamburger_menu">
        {!menuIsOpen ? (
          <MenuIcon className="closed_menu" onClick={toggleMenuBar} />
        ) : (
          <CloseIcon className="closed_menu" onClick={toggleMenuBar} />
        )}
      </div>
    </header>
  );
}
export default Navigation;
