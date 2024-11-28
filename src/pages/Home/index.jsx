import React, { useEffect, useState } from "react";
import classNames from "./home.module.scss";

//components
import Landing from "../../components/Home/Landing";
import Navbar from "../../components/Navbar";
import About from "../../components/Home/About";
import MenuCarousal from "../../components/Home/MenuCarousal";
import Feedback from "../../components/Home/Feedback";
import axios from "axios";
import { BACKENDURL, OMAIL } from "../../assets/constant";

//assets

import offerToday from "../../assets/posters/07-07-2024.jpg";

const Home = () => {
  const [offerData, setOfferData] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(`${BACKENDURL}/offer/${OMAIL}`)
  //     .then((response) => {
  //       if (response?.data?.status) {
  //         setOfferData(response?.data?.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error?.message);
  //     });
  // }, []);

  return (
    <div className={classNames.home} onClick={() => setOfferData("")}>
      <Navbar />
      <Landing />
      <About />
      <MenuCarousal />
      <Feedback />
      {/* {offerData && (
        <div className={classNames.offerCard}>
          <div className={classNames.title}>
            Temporary Closure due to slow season
          </div>
          <div className={classNames.description}>
            We will be closed from 8/11/2024 to 27/11/2024 due to slow season.
            Thank you for your understanding, and we wish you a wonderful
            holiday season!"
          </div>
          {offerData?.offerPercentage !== "0" && (
            <div className={classNames.offer}>
              {"UP TO " + offerData?.offerPercentage + "% OFF"}
            </div>
          )}
          <div className={classNames.closeBtn} onClick={() => setOfferData("")}>
            X
          </div>
        </div>
      )} */}
      {/* {offerData && (
        <div className={classNames.offerPoster}>
          <img src={offerToday} alt="offerToday" />
        </div>
      )} */}
    </div>
  );
};

export default Home;
