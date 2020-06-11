import React from "react";
import "../styles.css";

export default function Entry(props){
  return (
    <div className="content">
      <p className="content-title">{props.title}</p>
      <p className="description">{props.desc}</p>
    </div>
  );
  }