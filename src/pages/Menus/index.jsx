import React, { useContext, useEffect, useState } from "react";
import classNames from "./menus.module.scss";
import { useNavigate } from "react-router-dom";
import {
  CustomButton,
  EachCustomDatePicker,
  Toastify,
} from "../../components/Custom";
import axios from "axios";
import { BACKENDURL } from "../../assets/constant";
import { GlobalContext } from "../../context/globalContext";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Menus = () => {
  const navigate = useNavigate();
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
        console.log(response, "all clients response");
      })
      .catch((error) => {
        console.log(error, "all clients error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  function deleteMenuItem(itemID) {
    axios
      .delete(`${BACKENDURL}/menu/${itemID}`)
      .then((response) => {
        if (response?.data?.status) {
          setLocalRefresh((prev) => !prev);
          Toastify(response?.data?.message, "success");
        } else {
          Toastify(response?.data?.message, "error");
        }
        console.log(response, "Deleted menu item response");
      })
      .catch((error) => {
        console.log(error, "Deleted menu item error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  useEffect(() => {
    getAllMenu();
  }, [localRefresh]);

  return (
    <div className={classNames.client}>
      <div className={classNames.topBar}>
        <input
          type="text"
          className={classNames.searchOption}
          placeholder="Search Item..."
          onChange={(event) => setSearchQuery(event?.target?.value)}
        />
        <button className={classNames.addClient} onClick={() => {}}>
          Add Item To Menu
        </button>
      </div>
      <div
        className={classNames.tableContainer}
        style={{ display: allMenuItems?.length > 0 ? "" : "none" }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allMenuItems?.length > 0 &&
              allMenuItems
                ?.filter((eachClient) => {
                  let searchText = searchQuery?.toLowerCase();
                  return eachClient?.name?.includes(searchText);
                })
                .map((eachItem, index) => {
                  return (
                    <tr key={eachItem?.name + index}>
                      <td>{eachItem?.name}</td>
                      <td>{eachItem?.desc}</td>
                      <td>{eachItem?.price}</td>
                      <td>{eachItem?.image}</td>
                      <td>{eachItem?.category}</td>
                      <td>
                        <MdDeleteOutline
                          onClick={() => deleteMenuItem(eachItem?._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menus;
