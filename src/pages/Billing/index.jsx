import React, { useContext, useEffect, useState } from "react";
import classNames from "./billing.module.scss";
import CustomInput, {
  CustomDropdown,
  CustomImageUpload,
  Toastify,
} from "../../components/Custom";
import axios from "axios";
import { BACKENDURL } from "../../assets/constant";
import { GlobalContext } from "../../context/globalContext";

const Billing = () => {
  const { email } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(false);

  //functions

  function getAllMenu() {
    axios
      .get(BACKENDURL + `/menu/${email}`)
      .then((response) => {
        setAllMenuItems(response?.data?.data);
        console.log(response, "all menu items response");
      })
      .catch((error) => {
        console.log(error, "all menu items error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  //rendering

  useEffect(() => {
    getAllMenu();
  }, [localRefresh]);

  return (
    <div className={classNames.menuu}>
      <div className={classNames.topBar}>
        <input
          type="text"
          className={classNames.searchOption}
          placeholder="Search Item..."
          onChange={(event) => setSearchQuery(event?.target?.value)}
        />
      </div>
      <div className={classNames.billingCounter}>
        <div className={classNames.billingItems}>
          {Array.isArray(allMenuItems) && allMenuItems?.length > 0
            ? allMenuItems?.map((eachItem, index) => {
                return (
                  <div
                    className={classNames.eachDish}
                    key={eachItem?.image + index}
                  >
                    <img src={eachItem?.image} alt={eachItem?.name} />
                    <div className={classNames.contentBox}>
                      <div className={classNames.title}>{eachItem?.name}</div>
                      <div className={classNames.price}>${eachItem?.price}</div>
                      <div className={classNames.quantityBtn}>
                        <div>-</div>
                        <div>
                          <input type="text" placeholder="0" />
                        </div>
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className={classNames.billingCart}></div>
      </div>
    </div>
  );
};

export default Billing;
