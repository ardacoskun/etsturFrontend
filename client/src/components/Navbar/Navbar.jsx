import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/arama/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="navLogoContainer">
          <FontAwesomeIcon icon={faCrown} className="navLogoIcon" />
          <span className="logo">EventFinder</span>
        </Link>
        <div className="navItems">
          <input
            type="text"
            className="navItemsSearch"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="navItemsSearchButton"
            onClick={handleSubmit}
            type="submit"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
