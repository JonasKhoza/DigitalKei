import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <motion.div className="service_card"
         animate={{ x: [50, 130, 20], opacity: 1, scale: 1 }}
             transition={{
                 duration: 5,
                 delay: 0.5,
                 ease: [0.3, 0.61, 1, 1.1],
             }}
             initial={{ opacity: 0, scale: 0.5 }}
             whileHover={{ scale: 1.2 }}>
          <div className="card_image_container"
          >
            <img src={services[0].image_url} alt="" />
          </div>

          <div className="card_content"
            
         
          >
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
        </motion.div>

        <motion.div className="service_card" animate={{ x: [50, 130, 20], opacity: 1, scale: 1 }}
             transition={{
                 duration: 5,
                 delay: 0.5,
                 ease: [0.3, 0.61, 1, 1.1],
             }}
             initial={{ opacity: 0, scale: 0.5 }}
             whileHover={{ scale: 1.2 }}
             >
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
        </motion.div>

        <motion.div className="service_card last" animate={{ x: [50, 130, 20], opacity: 1, scale: 1 }}
             transition={{
                 duration: 5,
                 delay: 0.5,
                 ease: [0.3, 0.61, 1, 1.1],
             }}
             initial={{ opacity: 0, scale: 0.5 }}
             whileHover={{ scale: 1.2 }}
             >
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
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
