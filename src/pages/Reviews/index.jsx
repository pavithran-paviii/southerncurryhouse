import React, { useContext, useEffect, useState } from "react";
import classNames from "./reviews.module.scss";
import CustomInput, { Toastify } from "../../components/Custom";
import axios from "axios";
import { BACKENDURL } from "../../assets/constant";
import { GlobalContext } from "../../context/globalContext";
import { MdDeleteOutline } from "react-icons/md";

const Reviews = () => {
  const { email } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [allReviewsAvailable, setAllReviewsAvailable] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [createNewItem, setCreateNewItem] = useState(false);

  //functions

  function getAllReviews() {
    axios
      .get(BACKENDURL + `/review`)
      .then((response) => {
        setAllReviewsAvailable(response?.data?.data);
        console.log(response, "all reviews response");
      })
      .catch((error) => {
        console.log(error, "all reviews error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error",
          "error"
        );
      });
  }

  function deleteReview(itemID) {
    axios
      .delete(`${BACKENDURL}/review/${itemID}`)
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
      .post(`${BACKENDURL}/review`, newItem)
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

  function approveReviewById(reviewID) {
    axios
      .get(BACKENDURL + `/review/approve/${reviewID}`)
      .then((response) => {
        if (response?.data?.status) {
          Toastify(response?.data?.message, "success");
        } else {
          Toastify(response?.data?.message, "error");
        }
        console.log(response, "Review approve response");
      })
      .catch((error) => {
        console.log(error, "Review approve error");
        Toastify(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
          "error"
        );
      });
  }

  useEffect(() => {
    getAllReviews();
  }, [localRefresh]);

  return (
    <div className={classNames.reviews}>
      <div className={classNames.topBar}>
        <input
          type="text"
          className={classNames.searchOption}
          placeholder="Search Item..."
          onChange={(event) => setSearchQuery(event?.target?.value)}
        />
        {/* <button
          className={classNames.addClient}
          onClick={() => {
            setCreateNewItem((prev) => !prev);
          }}
        >
          {createNewItem ? "Close" : "Add Item To Menu"}
        </button> */}
      </div>
      <div
        className={classNames.tableContainer}
        style={{ display: allReviewsAvailable?.length > 0 ? "" : "none" }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th>isApproved</th>
              <th>Approve</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allReviewsAvailable?.length > 0 &&
              allReviewsAvailable
                ?.filter((eachClient) => {
                  let searchText = searchQuery?.toLowerCase();
                  return eachClient?.name?.includes(searchText);
                })
                .map((eachItem, index) => {
                  return (
                    <tr key={eachItem?.name + index}>
                      <td>{eachItem?.name}</td>
                      <td>{eachItem?.message}</td>
                      <td>{eachItem?.approved}</td>
                      <td>
                        <div
                          className={classNames.approveBtn}
                          // style={{
                          //   pointerEvents:
                          //     eachItem?.approved == "true" ||
                          //     eachItem?.approved == "True" ||
                          //     eachItem?.approved
                          //       ? "none"
                          //       : "unset",
                          //   opacity:
                          //     eachItem?.approved == "true" ||
                          //     eachItem?.approved == "True" ||
                          //     eachItem?.approved
                          //       ? "0.5"
                          //       : "1",
                          // }}
                          onClick={() => approveReviewById(eachItem?._id)}
                        >
                          Approve
                        </div>
                      </td>
                      <td>
                        <MdDeleteOutline
                          onClick={() => deleteReview(eachItem?._id)}
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

export default Reviews;
