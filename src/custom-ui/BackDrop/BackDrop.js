import React from "react";
import "./backdrop.css";

const BackDrop = (props) => (
  <div
    className="cui-backdrop"
    style={{ background: `rgba(0, 0, 0, ${props.opacity})` }}
    onClick={props.onClick}
  />
);

export default BackDrop;
