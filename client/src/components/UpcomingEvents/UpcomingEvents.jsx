import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./upcomingEvents.css";

const UpcomingEvents = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  let currentTime = new Date().getTime();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("./events.json");
        setFilteredData(
          data
            .sort((a, b) => b.startDateTime - a.startDateTime)
            .filter((item) => currentTime <= item.startDateTime)
            .slice(0, 6)
        );
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="upcomingEvents">
      <h1 className="upcomingEventsTitle">Yaklaşan Etkinlikler</h1>
      <div className="upcomingEventsList">
        {filteredData.map((item, index) => (
          <div
            className="upcomingEventsItem"
            key={index}
            onClick={() =>
              navigate(`/${item.category.toLowerCase()}/${item.id}`)
            }
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="upcomingEventsImg"
            />
            <div className="upcomingEventsListTitles">
              <h2>{item.title}</h2>
              <h1>{item.name}</h1>
              <h4>{item.location}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
