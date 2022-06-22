import React, { useEffect, useState } from "react";
import "./singleCategory.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";

const SingleCategory = () => {
  const { categoryName } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
                />
                <Link
                  to={`/${item.category.toLowerCase()}/${item.id}`}
                  className="singleCategoryName"
                >
                  {item.name}
                </Link>

                <div className="singleCategoryPlace">{item.location}</div>
                <div className="singleCategoryDate">{item.date}</div>
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
