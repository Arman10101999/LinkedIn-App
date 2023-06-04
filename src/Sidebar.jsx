import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"> #</span>
      <p> {topic} </p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1685028667224-55f94b358d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
        {/* React Avatar is a pure CSS component used to add initials, icons, or images representing people or objects in different shapes and sizes. */}
        <Avatar className="sidebar__avatar" />
        <h2> Arman Srivastava </h2>
        <h4> arman.bxm@gmail.com </h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you </p>
          <p className="sidebar__statNumber">7777 </p>
        </div>

        <div className="sidebar__stat">
          <p> Views on post </p>
          <p className="sidebar__statNumber">9999</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p className="p__recent"> Recent </p>
        {recentItem("ReactJS")}
        {recentItem("DeveloperTools")}
        {recentItem("NEXTJS")}
        {recentItem("HTML-CSS")}
        {recentItem("Google")}
      </div>
    </div>
  );
}

export default Sidebar;
