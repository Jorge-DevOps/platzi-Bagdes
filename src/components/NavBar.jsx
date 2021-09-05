import React from "react";
import logo from "../images/logoNav.svg";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a href="https://platzi.com">
            <img src={logo} alt="Logo" />
            <span className="font-weigth-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
