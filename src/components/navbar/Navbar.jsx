import React from "react";
import "./navbar.css";

import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

function Navbar({ toggle, handleClick }) {
  return (
    <div className="header-mobile">
      <div className="navbar-main-icon" onClick={handleClick}>
        {toggle ? (
          <BiMenu color="white" size={30} className=".header-toggle" />
        ) : (
          <RxCross2 color="white" size={30} className=".header-toggle" />
        )}
      </div>
      <div className="navbar-main-heading">
        <h2>Muavia Haidri</h2>
      </div>
    </div>
  );
}

export default Navbar;
