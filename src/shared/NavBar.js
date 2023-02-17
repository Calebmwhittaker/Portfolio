import React from "react";
import "../assets/styles/NavBar.css";

const NavBar = ({ profile }) => {
  return (
    <nav
      style={{ backgroundColor: "#000000" }}
      className="navbar navbar-expand-lg fixed-top"
    >
      <div className="container-fluid">
        <img
          style={{
            borderRadius: "50px",
            width: "80px",
          }}
          src={profile}
          alt="Profile"
        />
        <button
          style={{ backgroundColor: "gray" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="menu"
        >
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              style={{ color: "white" }}
              className="offcanvas-title"
              id="offcanvasDark"
            >
              Menu
            </h5>
            <button
              style={{ backgroundColor: "white" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home-page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-page">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#resume-page">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#projects-page"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
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
