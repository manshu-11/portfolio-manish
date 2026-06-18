import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import "./Header.css";
import user from "/user.png";
const Header = () => {
  return (
    <div className="header-box">
      <div className="user-box">
        <img src={user} alt="User" loading="eager" />
      </div>
      <div className="user-details-box">
        <div className="name">Manish Bhaskar Bonde</div>
        <div className="linkedin-Box gap">
          <span className="icon-height">
            <FaLinkedin />
          </span>
          <span>
            <a
              className="icon-text"
              href="https://www.google.com/"
              target="_blank"
            >
              https://www.google.com/
            </a>
          </span>
        </div>
        <div className="email-phone-Box">
          <div className="email gap">
            <span className="icon-height">
              <MdEmail />
            </span>
            <span>
              <a className="icon-text" href="mailto:manish-bonde@hotmail.com">
                manish-bonde@hotmail.com
              </a>
            </span>
          </div>
          <div className="mobile gap">
            <span className="icon-height">
              <FaMobileAlt />
            </span>
            <span className="icon-text">+91-7517699133</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
