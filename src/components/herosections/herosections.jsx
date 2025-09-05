import React from "react";
import "./herosections.css";
import myimage from "../../assets/saaad.png.jpg";
import { CiDesktopMouse2 } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection-image">
        <img src={myimage} alt="My picture" />
      </div>
      <h1 className="herosection-heading">Frontend ReactJS Developer + Graphic Designer</h1>

      <span className="herosection-span">
        Learning, building, and experimenting with creative web solutions
      </span>

      <p className="herosection-paragraph">
        Currently exploring ReactJS, Frontend Development, and Graphic Design
       Passionate about turning ideas into designs and interactive websites
      </p>

      <div className="herosection-button">
        <button className="herosection-buttons">View my work</button>
        <button className="herosection-buttons">Let's Connect</button>
      </div>

      <h1 className="mouse">
        <CiDesktopMouse2 className="mouse-icon"/>
      </h1>
    </div>
  );
};

export default HeroSection;