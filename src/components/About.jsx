import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="hero-cont">
        <div className="left-inner-cont">
          <div className="left-inner-cont-inner">
            <span className="welcome">About </span>
            <span className="hero-name">Ancient Tales</span>
            <p>
              Ancient Tales is an online platform for storytelling, allowing
              users to share, upload, and explore diverse narratives from
              various cultures
            </p>
          </div>
        </div>
        <div className="right-inner-cont">
          <img
            src={require("../assets/AdobeStock_733205005_Preview.jpeg")}
            alt="image.."
          />
        </div>
      </div>
      <footer>
        <h1>Copyright© Ancient Tales 2024</h1>
      </footer>
    </>
  );
}

export default About;
