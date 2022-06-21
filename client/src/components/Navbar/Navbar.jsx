import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navLogoContainer">
          <FontAwesomeIcon icon={faCrown} className="navLogoIcon" />
          <span className="logo">EventFinder</span>
        </div>
        <div className="navItems">
          <input type="text" className="navItemsSearch" />
          <button className="navItemsSearchButton">Ara</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
