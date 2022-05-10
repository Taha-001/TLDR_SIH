import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";
import logo from "./logo.svg"

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src = {logo}
        height="60%" 
        alt="logo"
      />
    </div>
  );
};
       
export default NavInshort;
