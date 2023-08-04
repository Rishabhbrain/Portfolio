import React from 'react';
import './projects.css';

const Projects = () => {
  // Your project data, you can fetch this dynamically if you have a backend
  const projectsData = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'project-image-1.jpg',
      link: 'project-link-1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'project-image-2.jpg',
      link: 'project-link-2'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
