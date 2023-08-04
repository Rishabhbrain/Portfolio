import React from 'react';
import './skills.css';

const Skills = () => {
  // Your technical skills (add or modify as needed)
  const skills = [
    'Python', 'HTML', 'CSS', 'JavaScript',
    'Java', 'React.js', 'Pandas', 'NumPy',
    'TensorFlow', 'OpenCV', 'Natural Language Processing (NLP)'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
