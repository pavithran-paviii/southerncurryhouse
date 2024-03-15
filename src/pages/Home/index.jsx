import React from "react";
import classNames from "./home.module.scss";

//components
import Landing from "../../components/Home/Landing";
import Navbar from "../../components/Navbar";
import About from "../../components/Home/About";
import MenuCarousal from "../../components/Home/MenuCarousal";
import Feedback from "../../components/Home/Feedback";

const Home = () => {
  return (
    <div className={classNames.home}>
      <Navbar />
      <Landing />
      <About />
      <MenuCarousal />
      <Feedback />
    </div>
  );
};

export default Home;
