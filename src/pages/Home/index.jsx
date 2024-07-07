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
    <div className={classNames.home}>
      <Navbar />
      <Landing />
      <About />
      <MenuCarousal />
      <Feedback />
      {/* {offerData && (
        <div className={classNames.offerCard}>
          <div className={classNames.title}>{offerData?.title}</div>
          <div className={classNames.description}>{offerData?.description}</div>
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
      {offerData && (
        <div className={classNames.offerPoster}>
          <img src={offerToday} alt="offerToday" />
          <div className={classNames.closeBtn} onClick={() => setOfferData("")}>
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
