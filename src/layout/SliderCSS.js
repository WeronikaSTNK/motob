import React from "react";
import "../styles/slider.scss";
import long1 from "../images/long1.jpg";
export const SliderCSS = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={long1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCSS;
