import React, { useContext } from "react";
import classNames from "./dashboardLayout.module.scss";

//assets
import logoWhite from "../../assets/images/company/logo.svg";
import { dashboardItems } from "../../assets/constant/mapItems";
import { IoIosSettings } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { GlobalContext } from "../../context/globalContext";
import { IoLogOut } from "react-icons/io5";

const DashboardLayout = ({ child }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { email } = useContext(GlobalContext);

  //functions
  function logoutFunc() {
    localStorage.clear();
    router.push("/");
  }

  if (!email) {
    router.push("/signin");
    return null;
  }
  return (
    <section className={classNames.dashboardLayout}>
      <div className={classNames.leftSidebar}>
        <div className={classNames.logo}>
          <img src={logoWhite} alt="logoWhite" />
        </div>
        <div className={classNames.dashItems}>
          {dashboardItems?.map((eachItem, index) => {
            return (
              <div
                className={`${classNames.sidebarItem} ${
                  pathname?.includes(eachItem?.name?.toLowerCase())
                    ? classNames.selectedItem
                    : ""
                }`}
                key={eachItem?.name + index}
                onClick={() => {
                  router.push(`/${eachItem?.name?.toLowerCase()}`);
                }}
              >
                {eachItem.icon}
                <span>{eachItem?.name}</span>
              </div>
            );
          })}
          <div className={`${classNames.sidebarItem} ${classNames.otherItems}`}>
            <IoIosSettings />
            Settings
          </div>
          <div
            className={`${classNames.sidebarItem} ${classNames.logoutBtn}`}
            onClick={logoutFunc}
          >
            <IoLogOut />
            Logout
          </div>
        </div>
      </div>
      <div className={classNames.rightLayout}>{child}</div>
    </section>
  );
};

export default DashboardLayout;
