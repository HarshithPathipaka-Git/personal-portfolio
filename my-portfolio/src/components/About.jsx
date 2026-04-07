import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="about-content">
            <p className="about-text">
              {personalInfo.bio}
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="about-info-item">
                <MapPin size={20} className="about-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="about-info-item">
                <Mail size={20} className="about-icon" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="about-info-item">
                <Phone size={20} className="about-icon" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Developer workspace"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
