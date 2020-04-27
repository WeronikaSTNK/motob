import React, { useState } from "react";
import "./../styles/styles.scss";
import { ItemsImages } from "./ItemsImages";
import Loading from "./Loading";
import { FaArrowDown } from "react-icons/fa";
import "../styles/styles.scss";
import { ToggleMotoDescription } from "./ToggleMotoDescription";

export const SingleMotorcycle = ({ motorcycle }) => {
  const { price1, images, name, loading } = motorcycle;

  const [isToggled, setToggled] = useState(false);
  const toggle = () => setToggled(!isToggled);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section id="motorcycles">
          <ItemsImages price={price1} images={images} name={name} />
          <div className="descWrapper">
              <button onClick={toggle} className="moreInfoBtn">
              Więcej informacji <FaArrowDown />
              </button>
              {isToggled ? <ToggleMotoDescription motorcycle={motorcycle} /> : ""}
            </div>
        </section>
      )}
    </>
  );
};
export default SingleMotorcycle;
