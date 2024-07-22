import React from "react";
import "../style.css";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
    </div>
  );
}

export default Home;
