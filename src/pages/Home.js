import React from "react";
import Header from "../parts/header/Header.js";

const Home = () => {
  return (
    <div id="home-page" className="home-wrapper">
      <Header />
      <div className="hero-background">
        <div
          style={{ position: "absolute", top: "43%", left: "20%" }}
          className="hero-text"
        >
          <h1>I am Caleb Whittaker</h1>
          <p>I'm a self-taught Web Developer</p>
          <a href="#contact-page-wrapper">
            <button style={{ marginBottom: "15px" }} className="btn btn-light">
              Contact me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
