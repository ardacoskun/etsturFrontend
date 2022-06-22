import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faMasksTheater,
  faPalette,
  faFutbolBall,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  let startEvent = date[0].startDate.getTime();
  let endEvent = date[0].startDate.getTime();

  const handleClick = () => {
    navigate(`/etkinlik-bul/${startEvent}/${endEvent}`);
  };

  return (
    <div className="header">
      <div className={`headerContainer ${type === "home" && "headerHome"}`}>
        <div className="headerList">
          <Link to="/müzik" className="headerListItem active">
            <FontAwesomeIcon icon={faMusic} />
            <span>Müzik</span>
          </Link>

          <Link to="/tiyatro" className="headerListItem">
            <FontAwesomeIcon icon={faMasksTheater} />
            <span>Tiyatro</span>
          </Link>
          <Link to="/spor" className="headerListItem">
            <FontAwesomeIcon icon={faFutbolBall} />
            <span>Spor</span>
          </Link>
          <Link to="/resim" className="headerListItem">
            <FontAwesomeIcon icon={faPalette} />
            <span>Resim</span>
          </Link>
          <Link
            to={`/gecmis-etkinlikler/${endEvent}`}
            className="headerListItem"
          >
            <FontAwesomeIcon icon={faPalette} />
            <span>Geçmiş Etkinlikler</span>
          </Link>
        </div>
        {type && type === "home" && (
          <>
            <h1 className="headerTitle">
              Yakınındaki etkinliklerden habersiz kalma
            </h1>
            <p className="headerDescription">
              Eğlence sensiz devam ediyor.Etkinliğini seç ve hayatını yaşamaya
              başla
            </p>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Konum giriniz..."
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate((prev) => !prev)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerSearchBtn" onClick={handleClick}>
                  Etkinlik Bul
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
