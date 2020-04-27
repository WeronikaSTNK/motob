import React from "react";
import "../styles/styles.scss";
export const Title = ({ title }) => {
  return (
    <div className="sectionTitle">
      <h1>
        {title}
        <hr></hr>
      </h1>
    </div>
  );
};
export default Title;
