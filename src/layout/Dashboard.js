import React, { useContext } from "react";
import "../styles/styles.scss";
import { MotorcyclesContext } from "../context";

export const Dashboard = () => {
  const { initialStateAuth, reducer } = useContext(MotorcyclesContext);
  const [data, setData] = React.useState(initialStateAuth);

  const [state, dispatch] = React.useReducer(reducer, initialStateAuth);
  const handleLogout = (e) => {
    e.preventDefault();
    setData({
      ...data,
      isAuthanticated: false,
      user: null,
    });
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <MotorcyclesContext.Provider value={{ state, dispatch }}>
      <section id="dashboard">
        <input
          className="moreInfoBtn"
          type="button"
          onClick={handleLogout}
          value="Logout"
        />
        uszanowanko zalogowanko
      </section>
    </MotorcyclesContext.Provider>
  );
};

export default Dashboard;
