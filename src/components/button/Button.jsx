import React, { useState } from "react";
import "./button.css";
const Button = ({ children, action, style }) => {
  const [over, setOver] = useState(false);
  return (
    <button
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
