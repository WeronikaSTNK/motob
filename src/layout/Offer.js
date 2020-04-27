import React from "react";
import AllItems from "../components/AllMotos";
import "../styles/styles.scss";
import RentalInfo from "../components/RentalInfo";
export const Offer = () => {
  return (
    <>
      <section id="offersSection">
      <RentalInfo />
        <AllItems />
      </section>
    </>
  );
};
export default Offer;
