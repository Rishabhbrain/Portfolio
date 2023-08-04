import React from 'react';
import './resume.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const VirtualResume = () => {
  // Your resume data goes here
  const resumeData = {
    contactInformation: {
      email: 'rishabjain.jain1@gmail.com',
      address: '76, 15 i, Osian Heights Chennai 21',
      phone: '6369022216',
      nationality: 'Indian',
      linkedin: 'https://www.linkedin.com/in/rishabhja',
      github: 'https://github.com/inmodi',
    },
    skills: ['Python', 'JavaScript', 'React', 'Machine Learning', 'Data Analysis', 'HTML', 'CSS'],
    about: `As a second-year B.Tech CSE student with a passion for AI and ML, I am
    committed to constantly expanding my knowledge and skills through projects,
    courses, and certifications. With a strong interest in psychology and philosophy,
    I believe in the power of interdisciplinary learning to drive innovation and solve
    complex problems. I am a multi-dimensional Conversationalist and curious
    individual who is always eager to explore new ideas and concepts, and I believe
    that this curiosity has driven my success in multiple projects. In my free time, I
    express my creativity as a poet, rapper, and lyricist. I am excited to bring my
    unique perspective and diverse skill set to a dynamic team that values
    innovation and collaboration.`,
    experience: [
      {
        title: 'Content Writing',
        company: 'Freelancer',
        location: 'Chennai, Tamil Nadu',
        duration: 'Sep 2021 - Nov 2021',
        description: 'Wrote blogs and contents for people as a freelancer, got connected to people on social media platforms like Telegram.',
      },
      {
        title: ' Web Developer',
        company: 'BaatKaro',
        location: 'Chennai, Tamil Nadu',
        duration: 'May 2023 - present',
        description: 'Worked on the companys website dvelopment team and learnt about the business model and applied that to the website',
      },
    ],
    education: [
      {
        degree: 'BTECH COMPUTER SCIENCE',
        university: 'Amity University Mumbai',
        location: 'Mumbai',
        duration: 'Aug 2021 - Present',
      },
      {
        degree: 'GRADUATION',
        university: 'Maharishi Vidya Mandir',
        location: 'Chennai',
        duration: 'Jan 2008 - May 2021',
      },
    ],
    projects: [
      {
        title: 'Chatbot using Python',
        description: 'After doing the course on Great learning i used the concepts and made a basic chatbot which works on a small dataset of questions and answers and responds to the user input.',
      },
      {
        title: 'Fake news detection',
        description: 'Done using NLP in python. The datasets were taken from Kaggle and other sources on the internet.',
      },
      {
        title: 'Face Mask Detection',
        description: 'This project was done in python programming language using the OpenCV(computer vision) Library',
      },
      {
        title: 'The Knowledge Catalyst (No code-website making)',
        description: 'This was a project given by the institute. The knowledge Catalyst is a platform I was planning to work on since a longtime now. This website will be providing people with all the skills that are needed in the real world but aren\'t in academia.',
      },
      {
        title: 'Portfolio Creator',
        description: 'Designing a portfolio creator using python, HTML and CSS. This project will get data from the user and give them template options and create a portfolio web page.',
      },
      {
        title: 'Graph Plotter',
        description: 'This program majorly uses Matplotlib and Tkinter module in Python. It takes the coordinates of the graphs as input and creates 2D and 3D graphical representations.',
      },
    ],
    certifications: [
      {
        title: 'Machine Learning And Artificial Intelligence',
        organization: 'Coincent (with Microsoft)',
        duration: 'May 2022 - Present',
      },
      {
        title: 'Ethical Hacking',
        organization: 'My Captain',
        duration: 'Ongoing',
      },
      {
        title: 'Google IT Automation With Python',
        organization: 'Coursera',
        duration: 'Mar 2023 - Present',
      },
      {
        title: 'Psychology',
        organization: 'My Captain',
        duration: 'Ongoing',
      },
      {
        title: 'Chatbot Using Python',
        organization: 'Great Learning',
        duration: 'Completed',
      },
      {
        title: 'Structured Query Language (SQL) From Study-Section',
        organization: 'Study-Section',
        duration: 'Completed',
      },
    ],
  };

  return (
    <section id="resume" className="virtual-resume container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="resume-header">
            <h1>RISHABH JAIN</h1>
            <h2>Web Developer | Seeking Opportunities</h2>
          </div>
          <div className="resume-section">
            <h3>Contact Information</h3>
            <ul className="list-unstyled">
              <li><i className="fa fa-envelope"></i> {resumeData.contactInformation.email}</li>
              <li><i className="fa fa-map-marker"></i> {resumeData.contactInformation.address}</li>
              <li><i className="fa fa-phone"></i> {resumeData.contactInformation.phone}</li>
              <li><i className="fa fa-globe"></i> {resumeData.contactInformation.nationality}</li>
              <li><i className="fa fa-linkedin"></i> <a href={resumeData.contactInformation.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><i className="fa fa-github"></i> <a href={resumeData.contactInformation.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>About</h3>
            <p>{resumeData.about}</p>
          </div>

          <div className="resume-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3>Work Experience</h3>
            <div className="timeline">
              {resumeData.experience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <h4>{exp.title}</h4>
                  <p>{exp.company} | {exp.location} | {exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <ul>
              {resumeData.education.map((edu, index) => (
                <li key={index}><i className="fa fa-graduation-cap"></i> {edu.degree}, {edu.university} | {edu.location} | {edu.duration}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3>Projects</h3>
            <div className="row">
              {resumeData.projects.map((project, index) => (
                <div className="col-md-6" key={index}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3>Certifications & Courses</h3>
            <div className="row">
              {resumeData.certifications.map((cert, index) => (
                <div className="col-md-6" key={index}>
                  <h4>{cert.title}</h4>
                  <p>{cert.organization} | {cert.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <a href='#' download className="btn btn-primary">Download Resume</a>
      </div>
    </section>
  );
}

export default VirtualResume;
