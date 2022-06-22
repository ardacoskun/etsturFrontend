import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";
import "./searchToDate.css";

const SearchToDate = () => {
  const { location, startDateTime, endDateTime } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/events.json");

        const filtered = data.filter(
          (item) =>
            item.city.toString().toLowerCase() === location.toLowerCase() &&
            item.startDateTime >= startDateTime &&
            item.endDateTime <= endDateTime
        );
        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, [location, startDateTime, endDateTime]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="searchToDate">
        <div className="searchToDateContainer">
          <div className="searchToDateText">{`${filteredData.length} sonuç bulundu.`}</div>
          <div className="searchToDateListContainer">
            {filteredData.map((item, index) => (
              <div className="searchToDateEventContainer" key={index}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="searchToDateImg"
                  onClick={() =>
                    navigate(`/${item.category.toLowerCase()}/${item.id}`)
                  }
                />
                <Link
                  to={`/${item.category.toLowerCase()}/${item.id}`}
                  className="searchToDateName"
                >
                  {item.name}
                </Link>

                <Link
                  to={`/arama/${item.location}`}
                  className="searchToDatePlace"
                >
                  {item.location}
                </Link>
                <div className="searchToDateLinks">
                  <div className="searchToDateDate">{item.startDate} -</div>
                  <div className="searchToDateDate">{item.endDate}</div>
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

export default SearchToDate;
