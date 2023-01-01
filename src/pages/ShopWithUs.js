import Benefits from "../components/shop_with_us_components/Benefits";
import WhatWeSell from "../components/shop_with_us_components/WhatWeSell";
import Register from "../components/shop_with_us_components/Register";
import HowToRegister from "../components/shop_with_us_components/How_To_Register";

import "./styles/shopwithus.css";

function ShopWithUs() {
  return (
    <div className="shopwithus">
      <section className="what-we-do">
        <h1>Revolution through technology</h1>
      </section>
      <section className="second_section">
        <section className="first_inner_section">
          <Benefits />
        </section>
      </section>
      <section className="third_section">
        <section className="second_inner_section">
          <WhatWeSell />
          <Register />
          <HowToRegister />
        </section>
      </section>
    </div>
  );
}

export default ShopWithUs;
