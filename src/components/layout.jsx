import React from "react";
import NavBar from "../components/NavBar";

function Layout(props) {
  // const children = pros.children
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
