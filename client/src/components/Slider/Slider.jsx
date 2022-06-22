import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Loading from "../Loading/Loading";
import "./slider.css";

const Slider = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("./events.json");
        setPopulars(data.sort((a, b) => b.likes - a.likes));
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="slider">
      <h1 className="sliderTitle">Popüler Etkinlikler</h1>
      <div className="imageSliderContainer">
        <ImageSlider slides={populars.slice(0, 4)} />
      </div>
    </div>
  );
};

export default Slider;
