import React, { useContext, lazy, Suspense } from "react";
import Header from "./layout/Header";
import About from "./components/About";
import Login from "./layout/Login";
import Homepage from "./layout/Homepage";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import logo from "./images/logoNapis.png";
import Offer from "./layout/Offer";
import Contact from "./layout/Contact";
import SliderCSS from "./layout/SliderCSS";
import { Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import { MotorcyclesContext } from "./context";
import PrivateRoute from "./components/PrivateRoute";

export const App = () => {
  const { initialStateAuth, reducer } = useContext(MotorcyclesContext);
  const [state, dispatch] = React.useReducer(reducer, initialStateAuth);

  return (
    <>
      <Header logo={logo} />
      <MotorcyclesContext.Provider value={{ state, dispatch }}>
        {!state.isAuthenticated ? (
          <PrivateRoute path="/login" component={Login} />
        ) : (
          <Dashboard />
        )}
      </MotorcyclesContext.Provider>
      <Route exact path="/">
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
    </>
  );
};

export default App;
