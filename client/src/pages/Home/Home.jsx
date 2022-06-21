import React from "react";
import "./home.css";
import {
  CategoryList,
  Header,
  Navbar,
  Slider,
  UpcomingEvents,
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Slider />
        <CategoryList />
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Home;
