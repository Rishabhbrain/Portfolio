import React from 'react';
import './workex.css';

const WorkExperience = () => {
  // Your work experience (add or modify as needed)
  const workExperience = [
    {
      company: 'ABC Tech Solutions',
      role: 'Machine Learning Intern',
      duration: 'May 2022 - Aug 2022',
      description: 'Worked on developing computer vision models for image classification and object detection using TensorFlow and OpenCV.'
    },
    // Add more work experiences here
  ];

  return (
    <section id="work-experience" className="work-experience">
      <div className="work-experience-content">
        <img
          src="https://i.gifer.com/origin/ac/acfa527e0173a1e9d0cb3d972cc85571_w200.webp"
          alt="Vector Image"
          className="vector-image"
        />
        <h2>Work Experience</h2>
        <div className="work-experience-list">
          {workExperience.map((experience, index) => (
            <div className="experience-item" key={index}>
              <h3>{experience.company}</h3>
              <p className="role">{experience.role}</p>
              <p className="duration">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
