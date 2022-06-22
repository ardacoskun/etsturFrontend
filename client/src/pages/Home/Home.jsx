import React, { useEffect, useState } from "react";
import "./home.css";
import {
  CategoryList,
  Footer,
  Header,
  Navbar,
  Slider,
  UpcomingEvents,
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header type="home" />
      <div className="homeContainer">
        <Slider />
        <CategoryList />
        <UpcomingEvents />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
