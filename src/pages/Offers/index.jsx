import React, { useContext, useEffect, useState } from "react";
import classNames from "./offers.module.scss";
import CustomInput, { Toastify } from "../../components/Custom";
import axios from "axios";
import { BACKENDURL } from "../../assets/constant";
import { GlobalContext } from "../../context/globalContext";
import { MdDeleteOutline } from "react-icons/md";

const Offers = () => {
  const { email } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [allOffersAvailable, setAllOffersAvailable] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [createNewItem, setCreateNewItem] = useState(false);

  //functions

  function getAllOffers() {
    axios
      .get(BACKENDURL + `/offer`)
      .then((response) => {
        setAllOffersAvailable(response?.data?.data);
        console.log(response, "all offers response");
      })
      .catch((error) => {
        console.log(error, "all offers error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  function deleteOffer(itemID) {
    axios
      .delete(`${BACKENDURL}/offer/${itemID}`)
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

  function addNewOffer() {
    newItem.email = email;
    axios
      .post(`${BACKENDURL}/offer`, newItem)
      .then((response) => {
        if (response?.data?.status) {
          setCreateNewItem(false);
          setLocalRefresh((prev) => !prev);
          Toastify(response?.data?.message, "success");
        } else {
          Toastify(response?.data?.message, "error");
        }
        console.log(response, "Added menu item response");
      })
      .catch((error) => {
        console.log(error, "Added menu item error");
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
    getAllOffers();
  }, [localRefresh]);

  return (
    <div className={classNames.offers}>
      <div className={classNames.topBar}>
        <input
          type="text"
          className={classNames.searchOption}
          placeholder="Search Item..."
          onChange={(event) => setSearchQuery(event?.target?.value)}
        />
        <button
          className={classNames.addClient}
          onClick={() => {
            setCreateNewItem((prev) => !prev);
          }}
        >
          {createNewItem ? "Close" : "Add Item To Menu"}
        </button>
      </div>
      <div
        className={classNames.tableContainer}
        style={{ display: allOffersAvailable?.length > 0 ? "" : "none" }}
      >
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Offer percentage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allOffersAvailable?.length > 0 &&
              allOffersAvailable
                ?.filter((eachClient) => {
                  let searchText = searchQuery?.toLowerCase();
                  return eachClient?.title?.includes(searchText);
                })
                .map((eachItem, index) => {
                  return (
                    <tr key={eachItem?.name + index}>
                      <td>{eachItem?.title}</td>
                      <td>{eachItem?.description}</td>
                      <td>{eachItem?.offerPercentage}</td>
                      <td>
                        <MdDeleteOutline
                          onClick={() => deleteOffer(eachItem?._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      {createNewItem && (
        <div className={classNames.addItem}>
          <div className={classNames.title}>Add new offer</div>
          <div className={classNames.inputContainer}>
            <CustomInput
              title="Title"
              placeHolder="Enter offer title..."
              name="title"
              stateValue={newItem}
              setState={setNewItem}
            />
            <CustomInput
              title="Description"
              placeHolder="Enter offer description..."
              name="description"
              stateValue={newItem}
              setState={setNewItem}
            />
            <CustomInput
              title="Percentage"
              placeHolder="Enter offer percentage..."
              name="offerPercentage"
              stateValue={newItem}
              setState={setNewItem}
            />
          </div>
          <div className={classNames.submitBtn} onClick={addNewOffer}>
            Submit
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
