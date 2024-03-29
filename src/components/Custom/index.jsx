import React, { useEffect, useRef, useState } from "react";
import classNames from "./custom.module.scss";

import { toast } from "react-toastify";

//assets

import {
  IoIosEye,
  IoIosEyeOff,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";
import { BACKENDURL } from "../../assets/constant";
import axios from "axios";

const CustomInput = ({
  title,
  placeHolder,
  name,
  type,
  stateValue,
  setState,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className={classNames.customInput}>
      <div className={classNames.title}>{title}</div>
      <div className={classNames.inputContainer}>
        <input
          type={passwordVisible ? "text" : type ? type : "text"}
          placeholder={placeHolder}
          value={name ? stateValue[name] : stateValue}
          onChange={(event) => {
            if (name) {
              setState((prev) => {
                return { ...prev, [name]: event?.target?.value };
              });
            } else {
              setState(event?.target?.value);
            }
          }}
        />
        {type === "password" && passwordVisible ? (
          <IoIosEye onClick={() => setPasswordVisible((prev) => !prev)} />
        ) : type === "password" && !passwordVisible ? (
          <IoIosEyeOff onClick={() => setPasswordVisible((prev) => !prev)} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CustomInput;

export const CustomButton = ({ image, svg, buttonText, func, bg, color }) => {
  return (
    <button
      className={classNames.customButton}
      style={{ background: bg ? bg : "", color: color ? color : "" }}
      onClick={func}
    >
      {image && <img src={image} alt="" />}
      {svg && svg}
      {buttonText}
    </button>
  );
};

export const CustomCheckbox = ({ title, name, stateValue, setState }) => {
  return (
    <div className={classNames.customCheckbox}>
      <div className={classNames.checkboxContainer}>
        <input
          type="checkbox"
          checked={stateValue[name]}
          onChange={(event) => {
            setState((prev) => {
              return { ...prev, [name]: event.target.checked };
            });
          }}
        />
        <label>{title}</label>
      </div>
    </div>
  );
};

export const CustomDropdown = ({
  title,
  dropdown,
  name,
  stateValue,
  setState,
  topTitle,
  type,
  stateVal,
  mapVal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRef?.current?.contains(event?.target) &&
        !inputRef?.current?.contains(event?.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform any additional actions based on the selected option
  };

  useEffect(() => {
    if (
      name === "selectedAppStaff" &&
      Array?.isArray(dropdown) &&
      dropdown?.length > 0
    ) {
      setState({
        NameOfTeam: dropdown[0]?.NameOfTeam,
        Icon: dropdown[0]?.Icon,
        TeamUsername: dropdown[0]?.TeamUsername,
      });
    }
  }, [dropdown]);

  return (
    <div
      className={classNames.eachCustomDropdown}
      style={{
        // minWidth: isOpen ? "250px" : "",
        zIndex: isOpen ? "3" : "",
        height: topTitle ? "5.2rem" : "3rem",
      }}
    >
      {topTitle && <div className={classNames.topTitle}>{title}</div>}
      <div
        className={classNames.inputContainer}
        onClick={toggleDropdown}
        style={{
          pointerEvents: dropdown ? "" : "none",
          top: topTitle ? "2rem" : "",
          maxHeight: isOpen ? "400px" : "100%",
          borderBottom: name === "selectedAppStaff" && !isOpen ? "none" : "",
        }}
        ref={dropdownRef}
      >
        <span>
          <span style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {name && stateValue?.Icon ? (
              <img
                src={stateValue?.Icon}
                alt={stateValue?.NameOfTeam}
                style={{ height: "1.25rem" }}
              />
            ) : (
              ""
            )}
            {name === "selectedAppStaff" && stateValue?.NameOfTeam
              ? stateValue?.NameOfTeam
              : stateValue?.NameOfTeam && !name === "IndustriesId"
              ? stateValue?.NameOfTeam
              : selectedOption
              ? selectedOption
              : name === "IndustriesId"
              ? "Click to select industries"
              : title
              ? title
              : name === "selectedAppStaff"
              ? "Select an Option"
              : dropdown[0]?.NameOfTeam}
          </span>
          <span>{isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
        </span>
        {isOpen && (
          <ul className="dropdown-list">
            {title === "Select the timezone" && dropdown?.length > 0
              ? dropdown?.map((eachitem, index) => {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(
                          eachitem[mapVal?.name] +
                            " (" +
                            eachitem[mapVal?.name1] +
                            ")"
                        );
                        setState({
                          ...stateValue,
                          TimeZone: eachitem?.UTCDifference,
                          TimeZoneAbbrevation: eachitem?.Abbreviation,
                        });
                      }}
                      key={eachitem[mapVal?.name] + index}
                    >
                      {eachitem[mapVal?.name] +
                        " (" +
                        eachitem[mapVal?.name1] +
                        ")"}
                    </li>
                  );
                })
              : type === "obj" && dropdown?.length > 0
              ? dropdown?.map((eachitem, index) => {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(eachitem[mapVal]);
                        setState({
                          ...stateValue,
                          [name]: eachitem[stateVal],
                        });
                      }}
                      key={eachitem[mapVal] + index}
                    >
                      {eachitem[mapVal]}
                    </li>
                  );
                })
              : (name === "Gender" ||
                  name === "groupType" ||
                  type === "single") &&
                dropdown?.length > 0
              ? dropdown?.map((eachitem, index) => {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(eachitem);
                        setState({
                          ...stateValue,
                          [name]: eachitem,
                        });
                      }}
                      key={eachitem + index}
                    >
                      {eachitem}
                    </li>
                  );
                })
              : name === "IndustriesId" && dropdown?.length > 0
              ? dropdown?.map((eachitem, index) => {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(eachitem?.Name);
                        setState({
                          ...stateValue,
                          [name]: eachitem?._id,
                        });
                      }}
                      key={eachitem?.Name + index}
                    >
                      {eachitem?.Name}
                    </li>
                  );
                })
              : dropdown?.length > 0 &&
                dropdown?.map((eachitem, index) => {
                  return (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(eachitem?.NameOfTeam);
                        if (name === "teamUsername") {
                          setState((prev) => {
                            return { ...prev, [name]: eachitem?.TeamUsername };
                          });
                        } else if (name === "selectedAppStaff") {
                          setState({
                            NameOfTeam: eachitem?.NameOfTeam,
                            Icon: eachitem?.Icon,
                            TeamUsername: eachitem?.TeamUsername,
                          });
                        } else {
                          setState({
                            ...stateValue,
                            [name]: {
                              NameOfTeam: eachitem?.NameOfTeam,
                              Icon: eachitem?.Icon,
                            },
                          });
                        }
                      }}
                      key={eachitem?.NameOfTeam + index}
                    >
                      <img src={eachitem?.Icon} alt={eachitem?.NameOfTeam} />
                      {eachitem?.NameOfTeam}
                    </li>
                  );
                })}
          </ul>
        )}
      </div>
    </div>
  );
};

export function Toastify(message, type) {
  toast(message, type);
}

export const EachCustomDatePicker = ({
  title,
  placeholder,
  name,
  stateValue,
  setState,
  mandatory,
}) => {
  const datepickerRef = useRef(null);

  useEffect(() => {
    if (datepickerRef.current) {
      const options = {
        enableTime: true,
        // Other options here
        dateFormat: "Y-m-dTH:i:S\\Z",
        time_24hr: true,
        utc: true,
        onChange: function (selectedDates, dateStr, instance) {
          console.log(
            instance.selectedDates[0].toISOString(),
            "selected datee"
          );
          if (name) {
            setState((prev) => {
              return {
                ...prev,
                [name]: instance.selectedDates[0].toISOString(),
              };
            });
          } else {
            setState(dateStr);
          }
        },
      };

      flatpickr(datepickerRef.current, options);
    }
  }, []);

  return (
    <div className={classNames.eachInputDatePicker}>
      <div className={classNames.title}>{title}</div>
      <input
        type="text"
        id="datepicker"
        ref={datepickerRef}
        className={classNames.inputContainer}
        placeholder={placeholder}
        name={name}
        value={name ? stateValue[name] : stateValue ? stateValue : ""}
        // onChange={(event) => {
        //   setState({ ...stateValue, [name]: event?.target?.value });
        // }}
      />
    </div>
  );
};

export const CustomImageUpload = ({
  title,
  placeHolder,
  name,
  stateValue,
  setState,
  setLoading,
}) => {
  const [imageKey, setImageKey] = useState("");
  async function handleImageUpload(imageFile) {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      let response = await axios.post(`${BACKENDURL}/image/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response, "Image uploaded response");
      if (response?.data?.data?.Location) {
        if (name) {
          setImageKey(response?.data?.data?.Key);
          setState((prev) => {
            return {
              ...prev,
              [name]: response?.data?.data?.Location,
              key: response?.data?.data?.Key,
            };
          });
        } else {
          setState(response?.data?.data?.Location);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error while uploading files!");
    }
  }

  async function handleImageDelete() {
    setLoading(true);
    try {
      let response = await axios.post(`${BACKENDURL}/image/delete`, {
        key: imageKey,
      });
      setLoading(false);
      console.log(response, "Image deleted response");
    } catch (error) {
      setLoading(false);
      console.log("Error while deleting image!");
    }
  }

  return (
    <div className={classNames.customInput} style={{ position: "relative" }}>
      <div className={classNames.title}>
        {title}{" "}
        <MdDeleteOutline
          style={{ display: stateValue[name] || imageKey ? "" : "none" }}
          onClick={() => {
            setState((prev) => {
              return { ...prev, [name]: "" };
            });
            if (imageKey) {
              handleImageDelete();
            }
          }}
        />
      </div>
      {name && stateValue[name] ? (
        <>
          <img
            className={classNames.uploadedImage}
            src={name ? stateValue[name] : ""}
            alt="uploaded dish image"
          />
        </>
      ) : (
        <div className={classNames.inputContainer}>
          <input
            type="file"
            placeholder={placeHolder}
            value={name ? stateValue[name] : stateValue}
            onChange={(event) => {
              handleImageUpload(event?.target?.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
};
