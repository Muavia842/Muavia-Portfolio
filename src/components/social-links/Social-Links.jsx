import React from 'react';
import './Social-Links.css';
import {
  AiFillTwitterSquare,
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="soial-links">
      <a href="https://www.instagram.com/muavia_haidri/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
        <AiFillInstagram size={20} />
      </a>
      <a href="https://twitter.com/muaviahaidry?t=GiM0Cl4MAS9Tm_nZ29heVg&s=09">
        <AiFillTwitterSquare size={20} />
      </a>
      <a href="https://www.behance.net/muaviahaidri">
        <AiFillBehanceSquare size={20} />
      </a>
      <a href="https://www.linkedin.com/in/muavia-haidri-94b4b0226/">
        <AiFillLinkedin size={20} />
      </a>
      <a href="https://github.com/Muavia842/">
        <FaGithubSquare size={20} />
      </a>
    </div>
  );
}

export default SocialLinks;
