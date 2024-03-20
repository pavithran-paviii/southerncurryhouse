import React from "react";
import classNames from "./landing.module.scss";
import "animate.css";

//assets
import { ReactComponent as Divider } from "../../../assets/images/elements/divider.svg";
import { GeneralButton } from "../../General/Button";

const Landing = () => {
  return (
    <div className={classNames.landing}>
      <div className={classNames.wrapper}>
        <div
          className={`${classNames.welcomeText} animate__animated animate__fadeIn animate__slower	2s`}
        >
          DELIGHTFUL EXPERIENCE
          <Divider />
        </div>
        <div
          className={`${classNames.bigText} animate__animated animate__fadeIn animate__slower	6s`}
        >
          Savory Sides Straight from the
          <br /> Southern Kitchens
        </div>
        <div
          className={`${classNames.smallTag} animate__animated animate__fadeIn animate__slower 8s`}
        >
          Try out the finest indian dishes
        </div>
        <GeneralButton text="View our menu" />
      </div>
    </div>
  );
};

export default Landing;
