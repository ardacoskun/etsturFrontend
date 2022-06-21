import React from "react";
import "./home.css";
import { Header, Navbar, Slider } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Slider />
    </div>
  );
};

export default Home;
