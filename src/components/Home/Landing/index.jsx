import React from "react";
import classNames from "./landing.module.scss";

//assets
import { ReactComponent as Divider } from "../../../assets/images/elements/divider.svg";

const Landing = () => {
  return (
    <div className={classNames.landing}>
      <div className={classNames.wrapper}>
        <div className={classNames.welcomeText}>
          DELIGHTFUL EXPERIENCE
          <Divider />
        </div>
        <div className={classNames.bigText}>
          Savory Sides Straight from the
          <br /> Southern Kitchens
        </div>
        <div className={classNames.smallTag}>
          Try out the finest south indian dishes
        </div>
      </div>
    </div>
  );
};

export default Landing;
