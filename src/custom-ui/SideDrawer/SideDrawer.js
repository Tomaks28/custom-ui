import React from "react";
import "./sidedrawer.css";
import { BackDrop } from "../index";

const SideDrawer = ({
  children,
  backdropOpacity = 0.3,
  onBackdropClick,
  show,
}) => {
  console.log(show ? "cui-side-drawer open" : "cui-side-drawer");
  return (
    <>
      <nav className={show ? "cui-side-drawer open" : "cui-side-drawer"}>
        {children}
      </nav>
      {show && <BackDrop opacity={backdropOpacity} onClick={onBackdropClick} />}
    </>
  );
};

export default SideDrawer;
