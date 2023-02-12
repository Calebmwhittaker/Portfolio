import React from "react";
import "../assets/styles/NavBar.css";

const NavBar = ({ profile }) => {
  return (
    // <nav
    //   style={{
    //     width: "50%",
    //     flexGrow: "0.8",
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <ul
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       padding: "0px",
    //       width: "40%",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Resume</li>
    //     <li>Projects</li>
    //     <li>Contact</li>
    //   </ul>
    // </nav>
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <img
          style={{
            borderRadius: "50px",
            width: "90px",
          }}
          src={profile}
          alt="Profile"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              style={{ color: "#000000" }}
              className="offcanvas-title"
              id="offcanvasNavbarLabel"
            >
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              style={{ color: "white" }}
              className="navbar-nav justify-content-end flex-grow-1 pe-3"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#home-page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-page">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#resume-page"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects-page"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact-page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
