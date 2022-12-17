import { Link } from "react-router-dom";

import services from "../../data/services";

import "./styles/services.css";
function Services() {
  return (
    <section className="our-services">
      <div className="container">
        <h1>Leveraging the power of technology</h1>
        <p>
          We help the youth gain in-demand skills through our up-to-date
          courses. We help farmers manage their produces, reach customers
          through our technologies, to improve their margins and grow their
          business
        </p>
      </div>
      <div className="services_cards">
        <div className="service_card">
          <div className="card_image_container">
            <img src={services[0].image_url} alt="" />
          </div>

          <div className="card_content">
            <div className="card_inner_content">
              <h2>Business Model Name</h2>
              <p>
                Our B2B marketplace provides consumers with wide range of
                product assortment, competitive prices from small farmers with
                and reliable delivery.
              </p>
            </div>
            <div className="card_action">
              <Link to="">Register as a seller</Link>
            </div>
          </div>
        </div>

        <div className="service_card">
          <div className="card_image_container">
            <img src={services[0].image_url} alt="" />
          </div>

          <div className="card_content">
            <div className="card_inner_content">
              <h2>Business Model Name</h2>
              <p>
                Our B2B marketplace provides consumers with wide range of
                product assortment, competitive prices from small farmers with
                and reliable delivery.
              </p>
            </div>
            <div className="card_action">
              <Link to="">Register as a seller</Link>
            </div>
          </div>
        </div>

        <div className="service_card last">
          <div className="card_image_container">
            <img src={services[0].image_url} alt="" />
          </div>

          <div className="card_content ">
            <div className="card_inner_content">
              <h2>Business Model Name</h2>
              <p>
                Our B2B marketplace provides consumers with wide range of
                product assortment, competitive prices from small farmers with
                and reliable delivery.
              </p>
            </div>
            <div className="card_action">
              <Link to="">Register as a seller</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
