import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avtaar, Icon, title }) {
  return (
    <div className="HeaderOption">
      {/*If the Icon variable is truthy (evaluates to true), the JSX element <Icon className="headerOption__icon" /> will be rendered*/}
      {Icon && <Icon className="HeaderOption__icon" />}
      {avtaar && <Avatar className="HeaderOption__icon" src={avtaar} />}
      <p className="HeaderOption__title"> {title} </p>
    </div>
  );
}
export default HeaderOption;
