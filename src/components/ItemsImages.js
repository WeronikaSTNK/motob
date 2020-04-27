import React from "react";
import "../styles/styles.scss";
export const ItemsImages = ({ price, images, name }) => {
  return (
    <div className="imgContainer">
      <img src={images[0]} alt="moto-b" />
      <div className="priceTop">
        <p>od</p>
        <h6> {price} zł</h6>
        <p>za dobę</p>
      </div>
      <h4 className="motorcyclesName"> {name}</h4>
    </div>
  );
};
export default ItemsImages;
