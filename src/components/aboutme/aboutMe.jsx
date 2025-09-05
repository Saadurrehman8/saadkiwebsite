import React from "react";
import './aboutme.css'
import aboutmepic from "../../assets/aboutme.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-pic">
        <img src={aboutmepic} />
      </div>

      <div className="text-div">
        <h1>About Me</h1>

        <h2> A Beginner Front-end Developer & Graphic Designer based in Karachi, Pakistan. 🎨💻</h2>

        <p>
          I am a beginner Front-End Developer currently learning and practicing HTML5, CSS3, JavaScript,
          and ReactJS to build simple and responsive web interfaces. My focus is on creating clean layouts,
          interactive components, and improving my skills through small projects. Alongside coding, 
          I am also passionate about graphic design. I use Figma, Adobe Illustrator, Photoshop, Lightroom, and InDesign
          to design creative visuals, user interfaces, and digital content.I am on a journey of continuous learning, combining frontend development and design to create engaging user experiences.
          With curiosity and creativity, I am building my foundation step by step and working towards becoming a skilled Developer + Designer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;