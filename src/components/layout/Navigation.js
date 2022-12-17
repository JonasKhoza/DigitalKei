import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./styles/navigation.css";
function Navigation({ menuIsOpen, toggleMenuBar }) {
  return (
    <header className="navigation">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="shop-with-us">Shop with us</Link>
          </li>
          <li>
            <Link to="/our-mission">Our mission</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
