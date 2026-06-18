import React from "react";
import "./button.css";
const Button = ({ children, action, style }) => {
  return (
    <button onClick={action} style={style}>
      {children}
    </button>
  );
};
export default Button;
