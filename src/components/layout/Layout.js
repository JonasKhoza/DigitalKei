import { useState } from "react";

import Navigation from "./Navigation";
import Aside from "./Aside";
import Footer from "./Footer";

function Layout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function toggleMenuBar() {
    setMenuIsOpen((prevV) => !prevV);
  }

  return (
    <div style={{ position: "relative" }}>
      <Navigation menuIsOpen={menuIsOpen} toggleMenuBar={toggleMenuBar} />
      <Aside menuIsOpen={menuIsOpen} toggleMenuBar={toggleMenuBar} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
