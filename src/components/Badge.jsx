import React from "react";

import "../styles/badge.css";
import confLogo from "../images/logo.svg";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>{jobTitle}</p>
          <div>{twitter}</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}
export default Badge;
