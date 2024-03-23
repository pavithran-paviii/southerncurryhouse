import React, { useContext, useEffect, useState } from "react";
import classNames from "./menus.module.scss";
import CustomInput, {
  CustomDropdown,
  CustomImageUpload,
  Toastify,
} from "../../components/Custom";
import axios from "axios";
import { BACKENDURL } from "../../assets/constant";
import { GlobalContext } from "../../context/globalContext";
import { MdDeleteOutline } from "react-icons/md";
import logoWhite from "../../assets/images/company/logo.svg";

const Menus = () => {
  const { email } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(false);
  const [newItem, setNewItem] = useState({});
  const [createNewItem, setCreateNewItem] = useState(false);
  const [menuUploadLoading, setMenuUploadLoading] = useState(false);

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

  async function handleImageDelete(key) {
    setMenuUploadLoading(true);
    try {
      let response = await axios.post(`${BACKENDURL}/image/delete`, {
        key,
      });
      setMenuUploadLoading(false);
      console.log(response, "Image deleted response");
    } catch (error) {
      setMenuUploadLoading(false);
      console.log("Error while deleting image!");
    }
  }

  function deleteMenuItem(itemID, key) {
    setMenuUploadLoading(true);
    handleImageDelete(key);
    axios
      .delete(`${BACKENDURL}/menu/${itemID}`)
      .then((response) => {
        if (response?.data?.status) {
          setLocalRefresh((prev) => !prev);
          Toastify(response?.data?.message, "success");
        } else {
          Toastify(response?.data?.message, "error");
        }
        setMenuUploadLoading(false);
        console.log(response, "Deleted menu item response");
      })
      .catch((error) => {
        setMenuUploadLoading(false);
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

  function addMenuItem() {
    setMenuUploadLoading(true);
    newItem.email = email;
    axios
      .post(`${BACKENDURL}/menu`, newItem)
      .then((response) => {
        if (response?.data?.status) {
          setCreateNewItem(false);
          setLocalRefresh((prev) => !prev);
          Toastify(response?.data?.message, "success");
        } else {
          Toastify(response?.data?.message, "error");
        }
        setNewItem("");
        setMenuUploadLoading(false);
        console.log(response, "Added menu item response");
      })
      .catch((error) => {
        setMenuUploadLoading(false);
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
                          onClick={() =>
                            deleteMenuItem(eachItem?._id, eachItem?.key)
                          }
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
          <div className={classNames.title}>Add item to menu</div>
          <div className={classNames.inputContainer}>
            <CustomInput
              title="Name"
              placeHolder="Enter dish name..."
              name="name"
              stateValue={newItem}
              setState={setNewItem}
            />
            <CustomInput
              title="Description"
              placeHolder="Enter description..."
              name="desc"
              stateValue={newItem}
              setState={setNewItem}
            />
            <CustomInput
              title="Price"
              placeHolder="Enter price..."
              name="price"
              stateValue={newItem}
              setState={setNewItem}
            />
            <CustomImageUpload
              title="Dish Image"
              placeHolder="Enter image URL..."
              name="image"
              stateValue={newItem}
              setState={setNewItem}
              setLoading={setMenuUploadLoading}
            />
            <div>
              <CustomDropdown
                dropdown={[
                  { name: "VEG-APPETIZERS", value: "VEG-APPETIZERS" },
                  { name: "NON-VEG-APPETIZERS", value: "NON-VEG-APPETIZERS" },
                  { name: "VEGETARIAN-ENTRIESS", value: "VEGETARIAN-ENTRIESS" },
                  {
                    name: "NON-VEGETARIAN-ENTRIESS",
                    value: "NON-VEGETARIAN-ENTRIESS",
                  },
                  { name: "DESSERTS", value: "DESSERTS" },
                  { name: "SIDES", value: "SIDES" },
                ]}
                name="category"
                title="Select Category"
                stateValue={newItem}
                setState={setNewItem}
                topTitle="true"
                type="obj"
                mapVal={"name"}
                stateVal={"value"}
              />
            </div>
          </div>
          <div className={classNames.submitBtn} onClick={addMenuItem}>
            Submit
          </div>
          {menuUploadLoading && (
            <div className={classNames.loadingAnimation}>
              <img src={logoWhite} alt="logoWhite" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menus;
