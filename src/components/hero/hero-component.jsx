import React from "react";
import { Link } from "react-router-dom";
import './hero.styles.scss'
import Button from '../button/button.component'
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1 className="hero-text">
          <strong> KOBINA BUDU</strong>{" "}
        </h1>
        <p>order the best fashion styles at your choice</p>
        <Link to={"/home"}>
          <button className="btn"> SHOP</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
