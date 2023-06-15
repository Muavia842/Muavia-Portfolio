// import React, { Component } from "react";
// import Slider from "react-slick";
import "../src/components/pages/About.css";
// export default class CarouselImage extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <Slider {...settings}>
//         <div className="slider">
//           <div className="slider-card">
//             <h3>1</h3>
//           </div>
//           <div className="slider-card">
//             <h3>2</h3>
//           </div>
//           <div className="slider-card">
//             <h3>3</h3>
//           </div>
//           <div className="slider-card">
//             <h3>4</h3>
//           </div>
//           <div className="slider-card">
//             <h3>5</h3>
//           </div>
//           <div className="slider-card">
//             <h3>6</h3>
//           </div>
//         </div>
//       </Slider>
//     );
//   }
// }

import React from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Download from "./assets/downoad.png";
import Download1 from "./assets/download1 (2).png";
function CarouselImage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-main">
      <Slider {...settings}>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download1} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
        <div className="slider-card">
          <img src={Download} alt="image" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselImage;
