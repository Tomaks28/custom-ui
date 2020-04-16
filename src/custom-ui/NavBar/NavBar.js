import React, { useState } from "react";
import "./navbar.css";
import { BurgerMenu, SideDrawer } from "../index";

const NavBar = (props) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  console.log(isDrawerVisible);

  const handleDrawerToggle = () => {
    // console.log("handleDrawerToggle");
    setIsDrawerVisible((prevState) => !prevState);
  };

  const handleBackdropClose = () => {
    // console.log("handleBackdropClose");
    setIsDrawerVisible(false);
  };

  return (
    <>
      <SideDrawer show={isDrawerVisible} onBackdropClick={handleBackdropClose}>
        {props.sideDrawerContent}
      </SideDrawer>
      <header className="cui-navbar">
        <nav className="cui-navbar__nav">
          <BurgerMenu onClick={handleDrawerToggle} />
          <div className="cui-navbar__logo">
            <a href="/">My Web Site</a>
          </div>
          <div className="spacer" />
          <div className="cui-navbar__items">
            <ul>
              <li>
                <a href="/">Items 1</a>
              </li>
              <li>
                <a href="/">Items 2</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
