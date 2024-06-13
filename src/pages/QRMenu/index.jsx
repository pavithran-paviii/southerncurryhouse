import React from "react";
import classNames from "./qrmenu.module.scss";

//assets
import frame1 from "../../assets/images/menu/frame1.png";
import frame2 from "../../assets/images/menu/frame2.png";
import frame3 from "../../assets/images/menu/frame3.png";
import frame4 from "../../assets/images/menu/frame4.png";

const QRMenu = () => {
  return (
    <div className={classNames.qrMenu}>
      <img src={frame1} alt="frame1" />
      <img src={frame2} alt="frame2" />
      <img src={frame3} alt="frame3" />
      <img src={frame4} alt="frame4" />
    </div>
  );
};

export default QRMenu;
