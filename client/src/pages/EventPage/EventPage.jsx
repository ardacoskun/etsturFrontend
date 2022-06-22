import axios from "axios";
import React, { useEffect, useState } from "react";
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
        setFilteredData(filtered[0]);
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

  console.log(filteredData);

  return (
    <>
      <Navbar />
      <Header />
      <div className="eventPage">
        <div className="eventPageContainer">
          <div className="eventPageTop">
            <img src="" alt="" className="eventPageImg" />
            <div className="eventPageInfo">
              <div className="eventPageName"></div>
              <ol className="eventPageArtists">
                <li className="eventPageArtist"></li>
              </ol>
              <div className="eventPageLocation"></div>
              <div className="eventPageDateContainer">
                <div className="eventPageDate"></div>
                <div className="eventPageTime"></div>
              </div>
            </div>
          </div>
          <div className="eventPage Middle">
            <div className="eventPageDesc"></div>
            <div className="eventPageRules">
              <ol className="eventPageRules">
                <li className="eventPageRule"></li>
              </ol>
            </div>
          </div>
          <div className="eventPageBottom"></div>
          <div className="eventPageShare"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
