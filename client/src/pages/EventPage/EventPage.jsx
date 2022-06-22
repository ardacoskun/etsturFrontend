import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventSlider, Footer, Header, Navbar } from "../../components";
import "./eventPage.css";
import Map from "../../components/GoogleMap/Map";

const EventPage = () => {
  const { categoryName, id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
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
    getData();
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
                {filteredData[0].images.length > 1 ? (
                  <EventSlider images={filteredData[0].images} />
                ) : (
                  <img
                    src={filteredData[0].images[0]}
                    alt={filteredData[0].name}
                    className="eventPageImg"
                  />
                )}

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
              <div className="eventPageMiddle">
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
                <div className="eventPageBottomLeft">
                  <h2 className="eventPricesTitle">Bilet Fiyatları</h2>
                  <ul className="eventPagePrices">
                    {filteredData[0].price &&
                      Object.values(filteredData[0].price).map(
                        (item, index) => (
                          <li className="eventPagePrice" key={index}>
                            {item} TL
                          </li>
                        )
                      )}
                  </ul>
                </div>
                <div className="eventPageBottomRight">
                  <Map />
                </div>
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
