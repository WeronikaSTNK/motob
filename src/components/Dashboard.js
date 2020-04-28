import React from "react";

export const Dashboard = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      uszanowanko zalogowanko
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
};

export default Dashboard;
