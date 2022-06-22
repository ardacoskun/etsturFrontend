import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./searchPage.css";
import { Footer, Header, Navbar } from "../../components";

const SearchPage = () => {
  const { keyword } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/events.json");
        const filtered = await data.filter(
          (item) =>
            item.location.toLowerCase().includes(keyword.toLowerCase()) ||
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );

        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin.");
      }
    };

    getData();
  }, [keyword]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="searchPage">
        <div className="searchPageContainer">
          <div className="searchPageText">{`"${keyword}" için ${filteredData.length} sonuç bulundu.`}</div>
          <div className="searchPageListContainer">
            {filteredData.map((item, index) => (
              <div className="searchPageEventContainer" key={index}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="searchPageImg"
                  onClick={() =>
                    navigate(`/${item.category.toLowerCase()}/${item.id}`)
                  }
                />
                <Link
                  to={`/${item.category.toLowerCase()}/${item.id}`}
                  className="searchPageName"
                >
                  {item.name}
                </Link>

                <div className="searchPagePlace">{item.location}</div>

                <div className="searchPageDateLinks">
                  <div className="searchPageDate">{item.startDate} -</div>
                  <div className="searchPageDate">{item.endDate}</div>
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

export default SearchPage;
