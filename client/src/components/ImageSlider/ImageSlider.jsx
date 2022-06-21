import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="imageSlider">
      <FontAwesomeIcon
        icon={faCaretLeft}
        className="imageSliderLeftArrow"
        onClick={goToPrev}
      />
      <FontAwesomeIcon
        icon={faCaretRight}
        className="imageSliderRightArrow"
        onClick={goToNext}
      />
      <div style={sliderStyles}></div>
    </div>
  );
};

export default ImageSlider;
