import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";
import "./pastEvents.css";

const PastEvents = () => {
  const { startDate, endDate } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let currentTime = new Date().getTime();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/events.json");
        const filtered = data.filter((item) => item.endDateTime <= currentTime);
        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, [startDate, endDate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="pastEvents">
        <div className="pastEventsContainer">
          <div className="pastEventsText">{`${filteredData.length} sonuç bulundu.`}</div>
          <div className="pastEventsListContainer">
            {filteredData.map((item, index) => (
              <div className="pastEventsEventContainer" key={index}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="pastEventsImg"
                  onClick={() =>
                    navigate(`/${item.category.toLowerCase()}/${item.id}`)
                  }
                />
                <Link
                  to={`/${item.category.toLowerCase()}/${item.id}`}
                  className="pastEventsName"
                >
                  {item.name}
                </Link>

                <Link
                  to={`/arama/${item.location}`}
                  className="pastEventsPlace"
                >
                  {item.location}
                </Link>
                <div className="pastEventsDateLinks">
                  <div className="pastEventsDate">{item.startDate} -</div>
                  <div className="pastEventsDate">{item.endDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastEvents;
