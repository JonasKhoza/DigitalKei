import { Link } from "react-router-dom";

import "./styles/aside_mobile.css";

function Aside({ menuIsOpen, toggleMenuBar }) {
  return (
    <aside className={!menuIsOpen ? "sideDrawer" : "sideDrawer active"}>
      <nav>
        <ul>
          <li>
            <Link to="shop-with-us" onClick={toggleMenuBar}>
              Shop with us
            </Link>
          </li>
          <li>
            <Link to="/our-mission" onClick={toggleMenuBar}>
              Our mission
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={toggleMenuBar}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenuBar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
