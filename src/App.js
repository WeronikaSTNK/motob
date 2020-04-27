import React    from "react";
import Header from "./layout/Header";
import About from "./components/About";
import Homepage from "./layout/Homepage";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import logo from'./images/logoNapis.png'
import Offer from "./layout/Offer";
import Contact from "./layout/Contact";
import SliderCSS from "./layout/SliderCSS";
import { Router, Route, Link } from 'react-router-dom';


export const App = () => {
  return (
    <>
    {/* <Router> */}
      <Header logo={logo} />
        <Nav logo={logo} />
        <main>
          <Homepage />
          <About />
          <Offer />
          <Contact />
          <SliderCSS />
          <Footer />
        </main>
    {/* </Router> */}

    </>
  );
};

export default App;
