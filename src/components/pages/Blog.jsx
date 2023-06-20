import React from "react";
import "./Blog.css";
import { NavbarData } from "../../Navbar-Data";
import { BlogData } from "../../BlogData";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";
function Blog() {
  const navigate = useNavigate();
  return (
    <Scrollbars>
      <div className="blog-main">
        <div className="blog-heading-sec">
          <h2>{NavbarData[4].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[4].icon}</h6>
        </div>
        <div className="blog-row ">
          {BlogData.map((value) => (
            <div
              className="blog-item"
              onClick={() => navigate("./BlogSecondPage")}
            >
              {/* <a href="./BlogSecondPage" className="blog-item"> */}
              <div className="blog-image">{value.pic}</div>
              <div className="blog-content">
                <span className="cate">{value.category}</span>
                <h4 className="blog-title">{value.title}</h4>
                <div className="blog-date">{value.date}</div>
              </div>
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
}

export default Blog;
