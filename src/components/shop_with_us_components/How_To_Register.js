import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import stepsimages from "../../data/Steps";
import sliderImages from "../../data/SliderImages";

import Slider from "./slider/Slider";

import "./styles/how_to_register.css";
function HowToRegister() {
  const [width, setWidth] = useState(0);

  const courasel = useRef();

  useEffect(() => {
    setWidth(courasel.current.offsetWidth - courasel.current.scrollWidth);
  }, []);

  return (
    <section className="how_to_register">
      <h1>Grow your business or learn a skill with us today</h1>

      <div className="how_to_register_container">
        <motion.div className="business_part" ref={courasel}>
          <h2>As a business</h2>
          <motion.ul drag="x" dragConstraints={{ right: 0, left: width }}>
            {stepsimages.map((image) => {
              return (
                <li key={image.id}>
                  <img src={image.img} alt="" />
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
        <div className="training_part">
          <h2>Take a course</h2>
          <ul>
            {sliderImages.map((img) => {
              return (
                <li key={img.id}>
                  <img src={img.image} alt="" />
                </li>
              );
            })}
          </ul>
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default HowToRegister;
