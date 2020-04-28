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
import Dashboard from "./components/Dashboard";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};



export const App = () => {
  //state contains the state that is used in the component and its updated based on the actions dispatched
  //dispatch is a function that is used in app to call/dispatch actions that transform or change the state
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <Header logo={logo} />
      <AuthContext.Provider value={{ state, dispatch }}>
      {  <Route path="/login" /> && !state.isAuthenticated ? <Login /> : <Dashboard />}
      </AuthContext.Provider>
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
