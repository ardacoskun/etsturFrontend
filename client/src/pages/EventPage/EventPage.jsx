import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";
import "./eventPage.css";

const EventPage = () => {
  const { categoryName, id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReq = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/events.json");
        const filtered = data.filter(
          (item) =>
            item.category.toLowerCase() === categoryName && item.id == id
        );
        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        console.log("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    fetchReq();
  }, [categoryName, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="eventPage">
        <div className="eventPageContainer">
          {filteredData[0] && (
            <>
              <div className="eventPageTop">
                <img
                  src={filteredData[0].images[0]}
                  alt={filteredData[0].name}
                  className="eventPageImg"
                />
                <div className="eventPageInfo">
                  <div className="eventPageName">{filteredData[0].name}</div>

                  <ul className="eventPageArtists">
                    {filteredData[0].artist &&
                      filteredData[0].artist.map((item, index) => (
                        <li className="eventPageArtist" key={index}>
                          {item}
                        </li>
                      ))}
                  </ul>

                  <div className="eventPageLocation">
                    {filteredData[0].location}
                  </div>
                  <div className="eventPageDateContainer">
                    <div className="eventPageDate"> {filteredData[0].date}</div>
                    <div className="eventPageTime"> {filteredData[0].time}</div>
                  </div>
                </div>
              </div>
              <div className="eventPage Middle">
                <div className="eventPageDesc">
                  {" "}
                  {filteredData[0].description}
                </div>
                <div className="eventPageRules">
                  <ul className="eventPageRules">
                    {filteredData[0].details &&
                      filteredData[0].details.map((item, index) => (
                        <li className="eventPageRule" key={index}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="eventPageBottom">
                <ul className="eventPagePrices">
                  {filteredData[0].price &&
                    Object.values(filteredData[0].price).map((item, index) => (
                      <li className="eventPagePrice" key={index}>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="eventPageShare"></div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
