import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import "../styles/navigation.scss";
import "../styles/styles.scss";
import {  FaMobileAlt } from "react-icons/fa";
export const Nav = ({ logo }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="iconsWrapper">
        <a href="#top">
        <img src={logo} alt="logo" />
        </a>
        <div className="iconsWrapper">
          <FaMobileAlt
            className="headerIcons"
            size="1.5em"
          />
          <a href="tel: +485173787705" className="headerIcons">
            517 378 705
          </a>
        </div>
      </div>
      <ul className={navOpen ? "active" : ""}>
        <figure
          className="image-logo"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div className="naviBurger">
            <span className="naviBurgerSpan" />
            <span className="naviBurgerSpan" />
            <span className="naviBurgerSpan" />
            <span className="naviBurgerSpan" />
          </div>
        </figure>
        <li
          className="naviListElement"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <ScrollIntoView selector="header">
            <button className="naviListButton">Strona startowa</button>
          </ScrollIntoView>
        </li>
        <li
          className="naviListElement"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <ScrollIntoView selector="#aboutSection">
            <button className="naviListButton">O nas</button>
          </ScrollIntoView>
        </li>
        <li
          className="naviListElement"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <ScrollIntoView selector="#motorcycles">
            <button className="naviListButton">Oferta</button>
          </ScrollIntoView>
        </li>

           <li
          className="naviListElement"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <ScrollIntoView selector="#contactSection">
            <button className="naviListButton">Kontakt</button>
          </ScrollIntoView>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
