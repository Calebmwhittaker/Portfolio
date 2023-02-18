import React from "react";
import NavBar from "../../shared/NavBar.js";
import profile from "../../assets/images/profile.webp";

const Header = () => {
  return (
    <header className="header-wrapper">
      <NavBar profile={profile} />
    </header>
  );
};

export default Header;
