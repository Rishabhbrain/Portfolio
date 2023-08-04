import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  // Testimonials (add or modify as needed)
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Senior Data Scientist',
      company: 'Tech Innovators',
      testimonial: "Rishabh's AI project on natural language processing impressed us all. His attention to detail and problem-solving skills are commendable."
    },
    // Add more testimonials here
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-content">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p>{testimonial.testimonial}</p>
              <p className="author">{testimonial.name}</p>
              <p className="role">{testimonial.role}, {testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
