import React from "react";
import "./burger.css";

const BurgerMenu = (props) => {
  return (
    <button className="cui-burger" onClick={props.onClick}>
      <div className="cui-burger__line" />
      <div className="cui-burger__line" />
      <div className="cui-burger__line" />
    </button>
  );
};

export default BurgerMenu;
