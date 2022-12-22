import { Link } from "react-router-dom";

import "./styles/whatwesell.css";

function WhatWeSell() {
  return (
    <section className="products_we_sell">
      <h1>What we sell</h1>
      <div className="products">
        <ul className="products_items">
          <li>FCMG</li>
          <li>Training courses</li>
        </ul>
        <div className="product_actions">
          <div className="product">
            <p>Click here to register as seller</p>
            <Link to="">Register</Link>
          </div>
          <div className="product">
            <p>Click here to register for a course</p>
            <Link to="">Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeSell;
