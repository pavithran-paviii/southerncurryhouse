import React from "react";
import classNames from "./landing.module.scss";

//assets
import { ReactComponent as Divider } from "../../../assets/images/elements/divider.svg";
import { GeneralButton } from "../../General/Button";

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
        <GeneralButton text="View our menu" />
      </div>
    </div>
  );
};

export default Landing;
