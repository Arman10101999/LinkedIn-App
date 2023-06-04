import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type=" text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avtaar="https://ih1.redbubble.net/image.4687614567.2927/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
