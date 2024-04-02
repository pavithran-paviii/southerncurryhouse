import React from "react";
import classNames from "./about.module.scss";

//assets
import { ReactComponent as AyurvedaBowlIcon } from "../../../assets/images/spices/ayurveda-bowl-icon.svg";
import { ReactComponent as VanillaFlowerIcon } from "../../../assets/images/spices/vanilla-flower-icon.svg";
import { ReactComponent as Divider } from "../../../assets/images/elements/divider.svg";
import about1 from "../../../assets/images/dishes/about1.jpg";
import about2 from "../../../assets/images/dishes/about2.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className={classNames.about}>
      <AyurvedaBowlIcon
        viewBox="0 0 100 100"
        style={{ right: "1rem", top: "-1rem" }}
      />
      <VanillaFlowerIcon
        viewBox="0 0 100 100"
        style={{ left: "0rem", bottom: "-1rem" }}
      />
      <div className={classNames.wrapper}>
        <div className={classNames.welcomeText}>
          DELIGHTFUL EXPERIENCE
          <Divider />
        </div>
        <div className={classNames.bigText}>We Offer Top Notch</div>
        <div className={classNames.smallTag}>
          Delectable Side Dishes, Crafted in Indian Tradition
        </div>
        <div className={classNames.availableCategories}>
          <div>
            <img
              src="https://southerncurrycup.s3.ca-central-1.amazonaws.com/Samosa%20%281%29.jpg"
              alt="about1"
            />
            <div className={classNames.title}>Appetizers</div>
            <div
              className={classNames.viewBtn}
              onClick={() => {
                navigate("/menu");
              }}
            >
              View Menu
            </div>
          </div>
          <div>
            <img
              src="https://southerncurrycup.s3.ca-central-1.amazonaws.com/Photoroom_20240328_183828.jpg"
              alt="about2"
            />
            <div className={classNames.title}>Curry</div>
            <div
              className={classNames.viewBtn}
              onClick={() => {
                navigate("/menu");
              }}
            >
              View Menu
            </div>
          </div>
          <div>
            <img
              src="https://southerncurrycup.s3.ca-central-1.amazonaws.com/Photoroom_20240330_200421.JPG"
              alt="about3"
            />
            <div className={classNames.title}>Deserts</div>
            <div
              className={classNames.viewBtn}
              onClick={() => {
                navigate("/menu");
              }}
            >
              View Menu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
