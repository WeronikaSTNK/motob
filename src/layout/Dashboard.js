import React from "react";
import '../styles/styles.scss'
export const Dashboard = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <section id="dashboard">
      <input className="moreInfoBtn" type="button" onClick={handleLogout} value="Logout" />
      uszanowanko zalogowanko
    </section>
  );
};

export default Dashboard;
