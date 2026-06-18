import React, { useState } from "react";
import "./sidebar.css";
import Button from "../button/Button";
import { BsBackpack } from "react-icons/bs";
import { LuSquareArrowRight } from "react-icons/lu";
const SideBar = ({ menuButtonAction, status }) => {
  const [compButton, setCompButton] = useState(
    Array.from(
      { length: 50 },
      (_, i) => "Component " + (i + 1).toString().padStart(2, "0"),
    ),
  );
  console.log(compButton);
  const buttonStyle = {
    width: "100%",
    color: "var(--text-color)",
    padding: "5px",
  };
  return (
    <div className={`sideBar ${status ? "open" : "close"}`}>
      <aside className="menu-list">
        {compButton.map((ele) => {
          return (
            <Button key={ele} action={menuButtonAction} style={buttonStyle}>
              <span className="buttonText">{ele}</span>
              <span>
                <LuSquareArrowRight
                  fontSize={16}
                  color={"var(--icon-hover-color)"}
                />
              </span>
            </Button>
          );
        })}
      </aside>
    </div>
  );
};

export default SideBar;
