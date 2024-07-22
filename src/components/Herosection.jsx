import React from "react";
import { useNavigate } from "react-router-dom";

function Herosection() {
  let navigate = useNavigate();
  function openHandler(){
    navigate('/dashboard/stories')
  }
  return (
    <>
      <div className="hero-cont">
        <div className="left-inner-cont">
          <div className="left-inner-cont-inner">
            <span className="welcome">Welcome </span>
            <span className="hero-name">{localStorage.getItem('username')}</span>
            <p>
              Ancient Tales is an online platform for storytelling, allowing
              users to share, upload, and explore diverse narratives from
              various cultures
            </p>
            <button className="explore-btn" onClick={openHandler}>Explore</button>
          </div>
        </div>
        <div className="right-inner-cont">
          <img
            src={require("../assets/AdobeStock_727660678_Preview-removebg-preview.png")}
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

export default Herosection;
