import "./Sidebar.css";
import Profile from "../../assets/profile5.jpg";
import NavLinks from "../navLinks/NavLinks";
import SocialLinks from "../social-links/Social-Links";
import CopyWrite from "../copy-write/CopyWrite";

function Sidebar({ toggle }) {
  return (
    <div className={`header-main ${toggle ? "header-main-hidden" : ""}`}>
      <div className="header-profile">
        <h2 className="name">MUAVIA HAIDRI</h2>
        <img src={Profile} alt="profile" />
      </div>
      <NavLinks />
      <SocialLinks />
      <CopyWrite />
    </div>
  );
}

export default Sidebar;
