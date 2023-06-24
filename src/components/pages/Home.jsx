import React from "react";
import "./Home.css";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home">
      <div className="bg">
        <diV className="heading">
          <h1>
            Muavia <span>Haidry</span>
          </h1>
          <p className="intro">
            <span className="text first-text">I am a&nbsp;</span>
            <span className="text sec-text">
              <Typed
                strings={["Front-end Developer", "UI/UX Designer"]}
                typeSpeed={40}
                backSpeed={13}
                loop
              />
            </span>
          </p>
        </diV>
      </div>
    </div>
  );
}

export default Home;
