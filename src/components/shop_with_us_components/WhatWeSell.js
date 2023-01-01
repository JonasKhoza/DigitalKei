import { Link } from "react-router-dom";

import "./styles/whatwesell.css";

function WhatWeSell() {
  return (
    <section className="products_we_sell">
      <h1>What we sell</h1>
      <div className="products">
        <ul className="products_items">
          <li className="blue">
            <p> Training courses</p>
            <div className="image_container">
              <img
                src={`${process.env.PUBLIC_URL}/images/benefits/way-concept-illustration_114360-1191.webp`}
                alt=""
              />
            </div>
          </li>
          <li className="gold">
            <p>FCMG</p>
            <div className="image_container">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/benefits/way-concept-illustration_114360-1191.webp`}
                alt=""
              />
            </div>
          </li>

          <li className="orange">
            <p> Training courses</p>
            <div className="image_container">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/benefits/way-concept-illustration_114360-1191.webp`}
                alt=""
              />
            </div>
          </li>
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
