import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4> {heading} </h4>
        <i> {subtitle}</i>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn in News </h2>
        <InfoIcon />
      </div>

      {newsArticle("Arman Srivastava - A Tech billionaire - 9909 readers ")}
      {newsArticle("Arman Srivastava - A Tech billionaire - 9911 readers ")}
      {newsArticle("Arman Srivastava - A Tech billionaire - 9922 readers ")}
      {newsArticle("Arman Srivastava - A Tech billionaire - 9933 readers ")}
      {newsArticle("Arman Srivastava - A Tech billionaire - 9955 readers ")}
    </div>
  );
}

export default Widgets;
