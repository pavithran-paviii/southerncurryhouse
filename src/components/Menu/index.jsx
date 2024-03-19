import React, { useEffect, useState } from "react";
import classNames from "./wholemenu.module.scss";

//assets
import { ReactComponent as Divider } from "../../assets/images/elements/divider.svg";
import axios from "axios";
import { BACKENDURL, OMAIL } from "../../assets/constant";
// import { allMenuItems } from "../../assets/constant/menuItems";

const WholeMenu = () => {
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
    <div className={classNames.menu}>
      <div className={classNames.wrapper}>
        <div className={classNames.welcomeText}>
          DELIGHTFUL FOODS
          <Divider />
        </div>
        <div className={classNames.bigText}>Delicious Menu</div>
        {/* VEG-APPETIZERS */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>VEG-APPETIZERS</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return eachItem?.category?.toLowerCase() === "veg-appetizers";
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* NON-VEG-APPETIZERS */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>NON-VEG-APPETIZERS</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return (
                    eachItem?.category?.toLowerCase() === "non-veg-appetizers"
                  );
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* vegeterian entries */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>VEGETARIAN-ENTRIESS</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return (
                    eachItem?.category?.toLowerCase() === "vegetarian-entriess"
                  );
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* non vegeterian entries */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>NON-VEGETARIAN-ENTRIESS</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return (
                    eachItem?.category?.toLowerCase() ===
                    "non-vegetarian-entriess"
                  );
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* desserts */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>DESSERTS</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return eachItem?.category?.toLowerCase() === "desserts";
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* sides */}
        <div className={classNames.eachSection}>
          <div className={classNames.title}>SIDES</div>
          <div className={classNames.allItems}>
            {Array.isArray(allMenuItems) &&
              allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachItem) => {
                  return eachItem?.category?.toLowerCase() === "sides";
                })
                ?.map((eachItem, index) => {
                  return (
                    <div className={classNames.eachItem} key={"dish" + index}>
                      <img
                        src={eachItem?.image}
                        alt=""
                        className={classNames.itemImage}
                      />
                      <div className={classNames.itemDetails}>
                        <div className={classNames.titlePrice}>
                          <div>{eachItem?.name}</div>
                          <div></div>
                          <div>${eachItem?.price}</div>
                        </div>
                        <div className={classNames.desc}>{eachItem?.desc}</div>
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
