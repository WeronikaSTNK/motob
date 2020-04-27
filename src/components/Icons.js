
import React, { Component } from "react";
import {  FaCocktail } from "react-icons/fa";
import {  GiAlarmClock, GiFullMotorcycleHelmet, GiReceiveMoney } from "react-icons/gi";
import '../styles/styles.scss'
export default class Services extends Component {
  state = {
    services: [
        {
        icon: <FaCocktail  size="2em" />,
        title: "Ze wszystkich sił postaramy się, aby było Ci wygodnie"
      },
      {
        icon: <GiAlarmClock  size="2.5em"/>,
        title: "Cenimy Twój czas"
      },
      {
        icon: <GiFullMotorcycleHelmet  size="2.5em"/>,
        title: "Naszym motorem napędowym jest pasja"
      },
      {
        icon: <GiReceiveMoney  size="2.5em" />,
        title: "Dbamy o przystępność cen"
      }
    ]
  };
  render() {
    return (
      <>
      <div className="rowWrapper">
  {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="iconsContainer">
                <span className="footerIcons">{item.icon}</span>
                <span className="footerIcons">{item.title}
                <hr></hr></span>
              </article>
            );
          })}
      </div>


      </>
    );
  }
}
