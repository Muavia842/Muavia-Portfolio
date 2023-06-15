import React from "react";
import "./Social-Links.css";
// import { GrFacebookOption } from "react-icons/gr";
import {
  AiFillTwitterSquare,
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="soial-links">
      <a href="home">
        <AiFillFacebook size={20} />
      </a>
      <a href="home">
        <AiFillTwitterSquare size={20} />
      </a>
      <a href="home">
        <AiFillBehanceSquare size={20} />
      </a>
      <a href="home">
        <AiFillLinkedin size={20} />
      </a>
      <a href="home">
        <FaGithubSquare size={20} />
      </a>
    </div>
  );
}

export default SocialLinks;
