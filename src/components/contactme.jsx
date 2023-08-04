import React from 'react';
import './contactme.css';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="contact-info">
      <div className="contact-info-content">
        <h2>Contact Information</h2>
        <p>
          Email: rishab.modi@s.amity.edu<br />
          LinkedIn: <a href="https://www.linkedin.com/in/rishabhjain/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rishabhjain</a><br/>
          GitHub: <a  href='https://github.com/Rishabhbrain' target="_blank" rel="noopener noreferrer">https://github.com/Rishabhbrain</a> 
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
