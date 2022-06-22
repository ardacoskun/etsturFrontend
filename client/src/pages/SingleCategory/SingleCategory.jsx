import React, { useEffect, useState } from "react";
import "./singleCategory.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header, Navbar } from "../../components";

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
    <div className="singleCategory">
      <Navbar />
      <Header />
      {filteredData.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default SingleCategory;
