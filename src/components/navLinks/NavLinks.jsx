import React from "react";
import "./navlinks.css";
import { NavbarData } from "../../Navbar-Data";
import { NavLink } from "react-router-dom";
function NavLinks() {
  return (
    <div className="navlinks">
      {NavbarData.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className="link"
          activeclassName="active"
        >
          <div className="icon" style={{ fontSize: 26 }}>
            {item.icon}
          </div>
          <h6 className="title">{item.title}</h6>
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
