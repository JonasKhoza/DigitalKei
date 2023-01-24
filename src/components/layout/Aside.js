import { Link, NavLink } from "react-router-dom";

import "./styles/aside_mobile.css";

function Aside({ menuIsOpen, toggleMenuBar }) {
  return (
    <aside className={!menuIsOpen ? "sideDrawer" : "sideDrawer active"}>
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
    </aside>
  );
}

export default Aside;
