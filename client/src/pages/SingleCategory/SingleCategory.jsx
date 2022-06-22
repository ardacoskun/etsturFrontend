import React, { useEffect, useState } from "react";
import "./singleCategory.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";

const SingleCategory = () => {
  const { categoryName } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("./events.json");
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === categoryName
        );
        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, [categoryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="singleCategory">
        <div className="singleCategoryContainer">
          <div className="singleCategoryText">{`${filteredData.length} sonuç bulundu.`}</div>
          <div className="singleCategoryListContainer">
            {filteredData.map((item, index) => (
              <div className="singleCategoryEventContainer" key={index}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="singleCategoryImg"
                  onClick={() =>
                    navigate(`/${item.category.toLowerCase()}/${item.id}`)
                  }
                />
                <Link
                  to={`/${item.category.toLowerCase()}/${item.id}`}
                  className="singleCategoryName"
                >
                  {item.name}
                </Link>

                <Link
                  to={`/arama/${item.location}`}
                  className="singleCategoryPlace"
                >
                  {item.location}
                </Link>
                <div className="singleCategoryDateLinks">
                  <div className="singleCategoryDate">{item.startDate} -</div>
                  <div className="singleCategoryDate">{item.endDate}</div>
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

export default SingleCategory;
