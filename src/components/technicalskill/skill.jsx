import React, { useState } from "react";
import "./skill.css";
import Cards from "../reuseablecard/cards";

const TechnicalSkills = () => {
  const [activetab, setActivetab] = useState("All");

  const skillsData = {
    "Web Development": [
      {
        name: "HTML5",
        level: "85",
        bar: "85%",
        tag: "Beginner",
      },
      {
        name: "CSS3",
        level: "65",
        bar: "65%",
        tag: "Intermediate",
      },
      {
        name: "JS",
        level: "67",
        bar: "67%",
        tag: "Beginner",
      },
      {
        name: "ReactJS",
        level: "32",
        bar: "32%",
        tag: "Beginner",
      },
    ],

    "Graphic Designing": [
      {
        name: "Figma",
        level: "78",
        bar: "78%",
        tag: "Expert",
      },

      {
        name: "PhotoShop",
        level: "78",
        bar: "78%",
        tag: "Expert",
      }, 

      {
        name: "Illustrator",
        level: "98",
        bar: "98%",
        tag: "Expert",
      },

      {
        name: "Indesign",
        level: "35",
        bar: "35%",
        tag: "Beginner",
      },

      {
        name: "Lightroom",
        level: "18",
        bar: "18%",
        tag: "Beginner",
      },


    ],


  };

 const categories = ["All", ...Object.keys(skillsData)];

  console.log(categories);

  const displayedSkills =
    activetab === "All"
      ? Object.values(skillsData).flat()
      : skillsData[activetab];

  console.log(displayedSkills, "SKILLS");

  return (
    <div>
      <h1 className="ts" >Technical Skills</h1>

      <div className="buttons-container">
        {categories.map((btn, index) => (
          <button
            className={btn === activetab ? "active" : "" }
            key={index}
            onClick={() => setActivetab(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="card-container">
        {displayedSkills.map((skills) => (
          <Cards
            name={skills.name}
            level={skills.level}
            bar={skills.bar}
            tag={skills.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;