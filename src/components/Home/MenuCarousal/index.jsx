import React, { useEffect, useState } from "react";
import classNames from "./menucarousal.module.scss";
import "./menucarousalnormal.scss";

import Carousel from "react-simply-carousel";

//assets
import { ReactComponent as Divider } from "../../../assets/images/elements/divider.svg";
// import { allMenuItems } from "../../../assets/constant/menuItems";
import { BACKENDURL, OMAIL } from "../../../assets/constant";
import axios from "axios";

const MenuCarousal = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [allMenuItems, setAllMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/menu/${OMAIL}`)
      .then((response) => {
        if (response?.data?.status) {
          setAllMenuItems(response?.data?.data);
        }
      })
      .catch((error) => {
        console.log(error?.message);
      });
  }, []);

  return (
    <div className={classNames.menuCarousal}>
      <div className={classNames.wrapper}>
        <div className={classNames.welcomeText}>
          DELIGHTFUL EXPERIENCE
          <Divider />
        </div>

        <div className={classNames.carousalContainer}>
          <Carousel
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-between",
                userSelect: "none",
              },
            }}
            autoplay={true}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            // activeSlideProps={{
            //   style: {
            //     background: "blue",
            //     transition: "all linear 0.3s",
            //   },
            // }}
            onRequestChange={setActiveSlide}
            itemsToShow={5}
            speed={4000}
            easing="linear"
          >
            {allMenuItems?.map((item, index) => (
              <div
                className="eachDish"
                style={{
                  //   background: "yellow",
                  //   border: "30px solid white",
                  textAlign: "center",
                  lineHeight: "240px",
                  boxSizing: "border-box",
                  border: "1px solid white",
                  borderRadius: "7px",
                  overflow: "hidden",
                }}
                key={index}
              >
                <div className="imageDiv">
                  <img src={item?.image} alt={"dish" + index} />
                  <div className="price">${item?.price}</div>
                </div>
                <div className="dishName">{item?.name}</div>
                <div className="dishDesc">{item?.desc}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MenuCarousal;
