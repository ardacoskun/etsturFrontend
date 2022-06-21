import React from "react";
import "./home.css";
import { CategoryList, Header, Navbar, Slider } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Slider />
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
