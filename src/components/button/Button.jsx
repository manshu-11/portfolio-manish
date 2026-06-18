import React, { useState } from "react";
import "./button.css";
const Button = ({ children, isSelected, action, style }) => {
  const [over, setOver] = useState(false);
  console.log(isSelected);
  return (
    <button
      className={isSelected ? "selected" : ""}
      onClick={action}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      style={{
        ...style,
        color: over ? "var(--icon-hover-color)" : "var(--icon-color)",
      }}
    >
      {children}
    </button>
  );
};
export default Button;
