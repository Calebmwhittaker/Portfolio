import React, { useState, useEffect } from "react";
import Header from "../parts/header/Header.js";
import resumePDF from "../assets/pdf/Resume.pdf";

const Home = (props) => {
  const [count, setCount] = useState(0);
  const [resume, setResume] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  });
  const titles = ["Web Developer", "Scientist", "Programmer"];
  return (
    <div id="home-page" className="home-wrapper">
      <Header />
      <div className="hero-background">
        <div className="hero-text row m-auto">
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              top: "35%",
            }}
          >
            <h2 style={{ textAlign: "center", color: "white" }}>
              <span
                style={{
                  fontSize: "60px",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {titles[count]}
              </span>
              Hi! I'm Caleb, a self-taught Front End Web Developer from
              Michigan. I help others make their ideas become reality by
              developing modern sites that are accessible to everyone.{" "}
            </h2>
            <a
              href="#contact-page"
              style={{
                borderRadius: "5px",
              }}
            >
              <button style={{}} className="btn btn-light">
                Contact me
              </button>
            </a>
            <a
              href={resumePDF}
              download="Resume.pdf"
              style={{ marginLeft: "10px", borderRadius: "5px" }}
            >
              <button className="btn btn-light" type="submit">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
