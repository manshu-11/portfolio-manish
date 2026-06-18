import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-box">
      <div className="user-box"></div>
      <div className="user-details-box">
        <div className="name">Manish Bhaskar Bonde</div>
        <div className="linkedin-Box">
          <span>
            <FaLinkedin />
          </span>
          <span>
            <a href="https://www.google.com/" target="_blank">
              https://www.google.com/
            </a>
          </span>
        </div>
        <div className="email-phone-Box">
          <div className="email">
            <span>
              <MdEmail />
            </span>
            <span>
              <a href="mailto:manish-bonde@hotmail.com">
                manish-bonde@hotmail.com
              </a>
            </span>
          </div>
          <div className="mobile">
            <span>
              <FaMobileAlt />
            </span>
            <span>+91-7517699133</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
