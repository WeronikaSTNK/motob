import React from "react";
import { replaceSpacesInString } from "droptheword";
import ScrollButton from "react-scroll-button";
import motob from '../images/MotoB.png'
export const Homepage = () => {
  const myOldString = "Wypożyczalnia motocykli w Wieliczce ";
  const wordsToDrop = ["w"];
  const myNewString = replaceSpacesInString({
    text: myOldString,
    dropWordList: wordsToDrop
  });

  return (
    <>
      <div className="right">
        <div className="titleWrapper">
<img src={motob} alt='motob-logo' />
          <div className="details"> {myNewString} </div>
          <div>
            <div id="scrollDownButton">
              <a href="#aboutSection">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ScrollButton
          behavior={"smooth"}
          buttonBackgroundColor={"var(--main-red-color)"}
          iconType={"arrow-up"}
          style={{ fontSize: "15px" }}
          targetId={"header"}
        />
      </div>
    </>
  );
};
export default Homepage;
