import Benefits from "../components/shop_with_us_components/Benefits";
import WhatWeSell from "../components/shop_with_us_components/WhatWeSell";

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
        <WhatWeSell />
      </section>
    </div>
  );
}

export default ShopWithUs;
