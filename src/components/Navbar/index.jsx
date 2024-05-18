import React, { useState } from "react";
import classNames from "./navbar.module.scss";

//assets
import mainLogo from "../../assets/images/company/logo.svg";

//icons
import { CiLocationOn } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { GeneralButton } from "../General/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  //constant
  const allNavItems = [
    { title: "Home", nav: "/" },
    { title: "Menu", nav: "/menu" },
    { title: "About us" },
    { title: "Contact" },
  ];

  return (
    <div className={classNames.navbar}>
      <div className={classNames.wrapper}>
        <div className={classNames.contactNav}>
          <div className={classNames.info}>
            <div>
              <CiLocationOn />
              416 2 St W Revelstoke BC V0E 2S0
            </div>
            <FaBowlFood />
            <div>
              <LuClock5 />
              Thursday - Friday - Saturday - Sunday : 05.00 pm to 09.00 pm
            </div>
          </div>
          <div className={classNames.contact}>
            <div>
              <FiPhone />
              +12506832178
            </div>
            <FaBowlFood />
            <div>
              <IoMailOpenOutline />
              southerncurryhouse.ca@gmail.com
            </div>
          </div>
        </div>
        <div className={classNames.navigationNav}>
          <div className={classNames.logo} onClick={() => navigate("/")}>
            <img src={mainLogo} alt="mainLogo" />
            <div className={classNames.singleLetter}>S</div>
            <div>
              <div>OUTHERN</div>
              <div>Curry house</div>
            </div>
          </div>
          <div className={classNames.navItems}>
            {allNavItems?.map((eachItem, index) => {
              return (
                <div
                  className={
                    (selectedNavItem === eachItem ||
                      window?.location?.pathname?.includes(
                        eachItem?.title?.toLowerCase()
                      )) &&
                    classNames.selectedNav
                  }
                  onClick={(event) => {
                    setSelectedNavItem(eachItem);
                    if (eachItem?.nav) {
                      navigate(eachItem?.nav);
                    }
                  }}
                >
                  {eachItem?.title}
                </div>
              );
            })}
          </div>
          <GeneralButton text="Locate" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
