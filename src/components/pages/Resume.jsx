import React from "react";
import "./Resume.css";
import { NavbarData } from "../../Navbar-Data";
import { ResumeDataEducation, ResumeDataExperience } from "../ResumeData";
import { Scrollbars } from "react-custom-scrollbars";
import { ProgressDataCoding, ProgressDataDesigning } from "../ProgressBarData";
function Resume() {
  return (
    <Scrollbars>
      <div className="resume-main">
        <div className="resume-heading-sec">
          <h2>{NavbarData[2].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[2].icon}</h6>
        </div>
        <div className="experience-main">
          <div className="experienceset">
            <div className="experience">
              <div className="experience-sub-heading">
                <h3>EXPERIENCE</h3>
              </div>
              <div className="experience-content">
                <ul className="experience-ul">
                  {ResumeDataExperience.map((item) => (
                    <li>
                      <span className="left-line"></span>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <h5>{item.insitute}</h5>
                        <p>{item.about}</p>
                      </div>
                      <span className="year">
                        <span className="to">{item.yearTo}</span>
                        <span className="from">{item.yearFrom}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="educationset">
            <div className="education">
              <div className="experience-sub-heading">
                <h3>EDUCATION</h3>
              </div>
              <div className="experience-content">
                <ul className="experience-ul">
                  {ResumeDataEducation.map((item) => (
                    <li>
                      <span className="left-line"></span>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <h5>{item.insitute}</h5>
                        <p>{item.about}</p>
                      </div>
                      <span className="year">
                        <span className="to">{item.yearTo}</span>
                        <span className="from">{item.yearFrom}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-showing">
          <div className="setwidht">
            <div className="coding-skills">
              <div className="coding-heading">
                <h3>CODING SKILLS</h3>
              </div>

              {ProgressDataCoding.map((item) => (
                <div className="skill-box">
                  <>
                    <span className="title">{item.title}</span>
                    <div className="skill-bar">
                      <span className={`skill-per ${item.class}`}>
                        <span className="tooltip">{item.persentage}</span>
                      </span>
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
          <div className="setheight">
            <div className="Desiging-skills">
              <div className="coding-heading">
                <h3>DESIGNING SKILLS</h3>
              </div>
              {ProgressDataDesigning.map((item) => (
                <div className="skill-box">
                  <>
                    <span className="title">{item.title}</span>
                    <div className="skill-bar">
                      <span className={`skill-per ${item.class}`}>
                        <span className="tooltip">{item.persentage}</span>
                      </span>
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
}

export default Resume;
