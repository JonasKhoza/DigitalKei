import { useState } from "react";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import sliderImages from "../../../data/SliderImages";

import "./slider.css";
function Slider() {
  const [index, setIndex] = useState(1);

  function prevBtnHandler() {
    if (index > 1) {
      setIndex((prevV) => prevV - 1);
    }
  }
  function nextBtnHandler() {
    if (index < sliderImages.length) {
      setIndex((prevV) => prevV + 1);
    }
  }

  return (
    <div className="slider_container">
      <NavigateBeforeIcon
        className={`icons ${index === 1 && "disabled"}`}
        onClick={prevBtnHandler}
      />
      <div className="slider">
        {sliderImages.map((img) => {
          return (
            <div
              className={index === img.id ? "slide" : "inactive"}
              key={img.id}
            >
              <img src={img.image} alt="" />
            </div>
          );
        })}
      </div>
      <NavigateNextIcon
        className={`icons ${index === sliderImages.length && "disabled"}`}
        onClick={nextBtnHandler}
      />
    </div>
  );
}

export default Slider;
