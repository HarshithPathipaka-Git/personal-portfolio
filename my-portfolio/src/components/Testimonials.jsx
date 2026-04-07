import React from 'react';
import { testimonials } from '../data/portfolioData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote size={32} className="testimonial-quote" />
              
              <p className="testimonial-content">
                {testimonial.content}
              </p>

              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
