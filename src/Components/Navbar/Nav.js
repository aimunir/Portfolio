import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav__container">
      {/* logo section  start */}
      <div className="logo">
        <h4> Caleb </h4>
      </div>
      {/* logo section  end */}

      <div className="Nav__options">
        
          <a href="/"> about me </a>
          <a href="/"> services </a>
          <a href="/"> portfolio </a>
          <a href="/"> testimonials </a>
          <a href="/"> contact me </a>
      </div>

      <button className="btn"> hire me</button>
    </div>
  );
};

export default Nav;
