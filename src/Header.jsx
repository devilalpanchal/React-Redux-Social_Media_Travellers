import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faHouseUser,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="headermain">
        <p>TravelMedia.in</p>
        <p className="headerIcon">
          <FontAwesomeIcon icon={faHouseUser} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faUser} />
        </p>
      </div>
    </>
  );
};

export default Header;
