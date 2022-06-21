import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faMasksTheater,
  faPalette,
  faFutbolBall,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMusic} />
            <span>Müzik</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMasksTheater} />
            <span>Tiyatro</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faFutbolBall} />
            <span>Spor</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPalette} />
            <span>Resim</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
