import React from 'react';
import './Blog.css';
import { NavbarData } from '../../data/Navbar-Data';
import { BlogData } from '../../BlogData';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';
function Blog() {
  return (
    <Scrollbars>
      <div className="blog-main">
        <div className="blog-heading-sec">
          <h2>{NavbarData[4].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[4].icon}</h6>
        </div>
        <div className="blog-row ">
          {BlogData.map((value) => (
            <NavLink className="blog-item" to="/blog/BlogSecondPage">
              <div className="blog-image">{value.pic}</div>
              <div className="blog-content">
                <span className="cate">{value.category}</span>
                <h4 className="blog-title">{value.title}</h4>
                <div className="blog-date">{value.date}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
}

export default Blog;
