import React from "react";
import classNames from "./wholemenu.module.scss";

//assets
import { ReactComponent as Divider } from "../../assets/images/elements/divider.svg";
import { allMenuItems } from "../../assets/constant/menuItems";

const WholeMenu = () => {
  return (
    <div className={classNames.menu}>
      <div className={classNames.wrapper}>
        <div className={classNames.welcomeText}>
          DELIGHTFUL FOODS
          <Divider />
        </div>
        <div className={classNames.bigText}>Delicious Menu</div>
        <div className={classNames.eachSection}>
          <div className={classNames.title}>Curries</div>
          <div className={classNames.allItems}>
            {allMenuItems?.map((eachItem, index) => {
              return (
                <div className={classNames.eachItem} key={"dish" + index}>
                  <img
                    src={eachItem?.image}
                    alt=""
                    className={classNames.itemImage}
                  />
                  <div className={classNames.itemDetails}>
                    <div className={classNames.titlePrice}>
                      <div>{"Dish " + index}</div>
                      <div></div>
                      <div>${eachItem?.price}</div>
                    </div>
                    <div className={classNames.desc}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis modi sed ducimus quibusdam
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeMenu;
