import React from 'react';
import './About.css';
// import Bounce from "react-reveal/Bounce";
import { NavbarData } from '../../Navbar-Data';
import { PersonalData } from '../../Navbar-Data';
import { ServicesData } from '../../Navbar-Data';
import { Scrollbars } from 'react-custom-scrollbars';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/swiper.min.css';
// import CarouselImage from "../../assets/comingSoon.jpeg";
// const PDF_FILE_URL = "../../assets/comingSoon.jpeg";

function About() {
  // const downloadFileAtURL = (url) => {
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", true);
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  SwiperCore.use([Autoplay]);

  return (
    <Scrollbars>
      <div className="about">
        <div className="heading-sec">
          <h2>{NavbarData[1].title}</h2>
          <h6 style={{ fontSize: 38 }}>{NavbarData[1].icon}</h6>
        </div>

        <div className="self-data">
          <div className="professional-data">
            <h3>UI/UX Designer & Developer</h3>
            <p>
              I am a frontend developer and UI/UX designer with 2 years of
              experience. I have a passion for creating visually appealing and
              user-friendly websites and applications that provide a great user
              experience. As a frontend developer, I am skilled in HTML, CSS,
              and JavaScript, and have experience working with a variety of
              front-end frameworks such as React I also have a strong
              understanding of responsive design, cross-browser compatibility,
              and web accessibility.
            </p>
            <p>
              As a UI/UX designer, I have a keen eye for design and a deep
              understanding of user experience principles. I have experience
              creating wireframes, prototypes, and visual designs using tools
              such as Adobe PhotoShop, Adobe Illustrator, Canva, and Figma. I am
              also proficient in conducting user research, usability testing,
              and user flow analysis to inform my design decisions.
            </p>
          </div>
          <div className="personal-data">
            <h3>Personal Information</h3>
            {PersonalData.map((item) => (
              <div className="check">
                <div className="tittle" style={{ width: '70px' }}>
                  {item.title}
                </div>
                <div className="value">{item.value}</div>
              </div>
            ))}

            <div className="button-main">
              <a href="muavia.pdf.pdf" download="Muavia Haidri Resume">
                <button className="btn-btn">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
        {/* self content end*/}

        {/* services content start*/}
        <div className="services-main">
          <div className="sub-heading">
            <h3>Services</h3>
          </div>

          <div className="services-item">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              breakpoints={{
                // Breakpoint for mobile devices
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {ServicesData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <div className="services-item-card">
                    <h1 style={{ color: '#00a3e1' }}>{item.icon}</h1>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
}

export default About;
