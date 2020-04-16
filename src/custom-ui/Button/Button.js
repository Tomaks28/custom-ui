import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button {...props} className="cui-button">
      mon bouton
    </button>
  );
};

export default Button;
