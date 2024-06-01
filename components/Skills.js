import React from "react";
import '@/styles/Skills.scss';

const Skills = () => {
  const skills = [
    { name: "HTML/CSS", value: 0.7 },
    { name: "JavaScript", value: 0.9 },
    { name: "React JS", value: 0.8 },
    { name: "Python", value: 0.7 },
    { name: "SQL", value: 0.7 },
    { name: "Data Structure", value: 0.6 },
  ];

  return (
    <div id="skills">
      <h1 style={{textAlign:'center',backgroundColor: 'white', paddingTop: '4rem'}}>Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <label>{skill.name}</label>
            <progress value={skill.value} max={1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
