import React, { useState } from "react";
import "./Portfolio.css";
import { NavbarData } from "../../Navbar-Data";
import PortfolioData from "../../PortfolioData";
import { Scrollbars } from "react-custom-scrollbars";

function Portfolio() {
  const [item, setItem] = useState(PortfolioData);
  const [activeItem, setActiveItem] = useState("ALL");

  const filterItem = (categItem) => {
    const updateData = PortfolioData.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateData);
    setActiveItem(categItem);
  };

  return (
    <Scrollbars>
      <div className="portfolio-main">
        <div className="portfolio-heading-sec">
          <h2>{NavbarData[3].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[3].icon}</h6>
        </div>
        <div className="portfolio-btn-section">
          <ul className="portfolio-ul">
            <li
              onClick={() => {
                setItem(PortfolioData);
                setActiveItem("ALL");
              }}
              className={activeItem === "ALL" ? "active" : ""}
            >
              ALL
            </li>
            <li
              onClick={() => filterItem("brand")}
              className={activeItem === "brand" ? "active" : ""}
            >
              BRAND
            </li>
            <li
              onClick={() => filterItem("designe")}
              className={activeItem === "designe" ? "active" : ""}
            >
              DESIGN
            </li>
            <li
              onClick={() => filterItem("graphic")}
              className={activeItem === "graphic" ? "active" : ""}
            >
              GRAPHIC
            </li>
          </ul>
        </div>
        <div className="portfolio-items">
          {item.map((val, id) => (
            <div className="item-port" key={id}>
              <div className="mmm">{val.pic}</div>

              <div className="container">
                <div className="image-text">
                  <div className="img-text">
                    <h4>{val.title}</h4>
                  </div>
                  <div className="code-btn">
                    <button className="source-code">Code</button>
                    <button className="demo">Demo</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
}

export default Portfolio;
