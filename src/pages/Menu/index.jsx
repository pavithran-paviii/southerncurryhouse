import React from "react";
import classNames from "./menu.module.scss";

//assets
import WholeMenu from "../../components/Menu";
import Navbar from "../../components/Navbar";

const Menu = () => {
  return (
    <div className={classNames.menu}>
      <Navbar />
      <WholeMenu />
    </div>
  );
};

export default Menu;
