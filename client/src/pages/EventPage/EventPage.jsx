import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, Navbar } from "../../components";
import axios from "axios";
import "./eventPage.css";

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
        {filteredData.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
