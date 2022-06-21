import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./slider.css";

const Slider = () => {
  const slides = [
    {
      url: "https://i4.hurimg.com/i/hurriyet/75/770x0/622f28ab67b0a91b484ed688.jpg",
      title: "Müzik",
    },
    {
      url: "https://static01.nyt.com/images/2016/07/23/arts/23MACBETH1/23MACBETH1-superJumbo.jpg",
      title: "Tiyatro",
    },
    {
      url: "https://cdnuploads.aa.com.tr/uploads/Contents/2021/11/06/thumbs_b_c_c0f3083541183d22ac6e9ff1e20963bf.jpg?v=023244",
      title: "Spor",
    },
    {
      url: "https://www.agk88.com/tr/tekno_dosyalar/large/12_08_20_85948_e92964894539a37a6548973038320007.jpg",
      title: "Resim",
    },
  ];

  return (
    <div className="slider">
      <h1 className="sliderTitle">Popüler Etkinlikler</h1>
      <div className="imageSliderContainer">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
