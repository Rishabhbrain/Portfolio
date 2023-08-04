import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Rishabh Jain</h1>
        <p>Currently pursuing BTech in Computer Science. Passionate about AI and Machine Learning.</p>
        {/* Add a call-to-action button here */}
        <button>View Projects</button>
      </div>
    </section>
  );
}

export default Hero;
