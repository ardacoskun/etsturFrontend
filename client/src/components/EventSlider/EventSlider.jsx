import React, { useState } from "react";
import "./eventSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const EventSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    backgroundImage: `url(${images[currentIndex]})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="eventSlider">
      <FontAwesomeIcon
        icon={faCaretLeft}
        className="eventSliderLeftArrow"
        onClick={goToPrev}
      />
      <FontAwesomeIcon
        icon={faCaretRight}
        className="eventSliderRightArrow"
        onClick={goToNext}
      />
      <div style={sliderStyles}></div>
    </div>
  );
};

export default EventSlider;
