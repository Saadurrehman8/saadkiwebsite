import React from "react";
import "./feature.css";
import Typewriter from "typewriter-effect";

const Features = () => {
  const features = [
    {
      value: "10+ Designs",
      title: "Graphic Creations",
    },
    {
      value: "5+ Frontend Demos",
      title: "ReactJS Interfaces",
    },
    {
      value: "Learning Daily",
      title: "Step_by_step Growth",
    },
    {
      value: "Creative + Code",
      title: "Designing with Logic",
    },
  ];

  return (
    <div className="features">
      <div className="top-features">
        <span className="features-tag">My Journey</span>

        <Typewriter
          options={{
            strings: [
              "Learning ReactJS, one component at a time",
              "Designing graphics that inspire and engage",
              "Growing skills at the intersection of design & code",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "animation",
          }}
        />

        <p>
          Exploring creativity and code building beginner level ReactJS interfaces and designing eye catching graphics with passion.
        </p>
      </div>

      <div className="features-card">
        {features.map((item, index) => (
          <div key={index}>
            <h1>{item.value}</h1>

            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;