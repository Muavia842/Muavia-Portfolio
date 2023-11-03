import React from "react";
import "./Contact.css";
import { Scrollbars } from "react-custom-scrollbars";
import { NavbarData } from "../../Navbar-Data";
import { PersonalData } from "../../Navbar-Data";

function Contact() {
  return (
    <Scrollbars>
      <div className="contact-main">
        <div className="contact-heading-sec">
          <h2>{NavbarData[5].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[5].icon}</h6>
        </div>
        <div className="center">
          <div className="ghq">
            <div className="contact-sub-heading">
              <h3>Let's talk</h3>
            </div>
            <form
              className="form1"
              id="contact-form"
              action="https://formspree.io/f/mayzgazv"
              method="POST"
            >
              <div className="input-flex">
                <div className="input-name">
                  <input type="text" required name="name" />
                  <label for="">Name</label>
                </div>
                <div className="input-name name1">
                  <input type="email" required name="email" />
                  <label for="">Email</label>
                </div>
              </div>
              <textarea
                className="textarea"
                name="message"
                rows="10"
                placeholder="How can we help you?"
              ></textarea>
              <div className="button-main">
                <button type="submit" value="send" className="btn-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-sec">
          <div className="call-sec">
            <h2>{PersonalData[2].icon}</h2>
            <h3>{PersonalData[2].value}</h3>
          </div>
          <div className="email-sec">
            <h2>{PersonalData[3].icon}</h2>
            <h3>{PersonalData[3].value}</h3>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
}

export default Contact;
