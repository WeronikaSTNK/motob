import React, { useContext } from "react";
import Header from "./layout/Header";
import About from "./components/About";
import Login from "./components/Login";
import Homepage from "./layout/Homepage";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import logo from "./images/logoNapis.png";
import Offer from "./layout/Offer";
import Contact from "./layout/Contact";
import SliderCSS from "./layout/SliderCSS";
import { Route } from "react-router-dom";

export const App = () => {

  return (
      <>
        <Route exact path="/">
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
        </Route>
        <Route path="/login" component={Login} />
      </>
  );
};

export default App;
