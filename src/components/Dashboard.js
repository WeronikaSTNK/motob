import React from 'react'

export const Dashboard = (props) => {
   const handleLogout = () => {
    props.history.push('/login');
  }
  return (
    <div>
      uszanowanko zalogowanko
            <input type="button" onClick={handleLogout} value="Logout" />

    </div>
  )
}

export default Dashboard
