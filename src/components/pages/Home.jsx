import React from "react";
import "./Home.css";
import Typed from "react-typed";
// import Bounce from "react-reveal/Bounce";
function Home() {
  return (
    // <Bounce top>
    <div className="home">
      <div className="bg">
        <diV className="heading">
          {/* <Bounce left> */}
          <h1>
            Muavia <span>Haidry</span>
          </h1>
          {/* </Bounce> */}

          {/* <Bounce right> */}
          <p className="intro">
            <span className="text first-text"> I am a </span>
            <span className="text sec-text">
              <Typed
                strings={[" Front-end Developer", " UI/UX Designer"]}
                typeSpeed={40}
                backSpeed={13}
                loop
              />
            </span>
          </p>
          {/* </Bounce> */}
        </diV>
      </div>
    </div>
    // </Bounce>
  );
}

export default Home;
