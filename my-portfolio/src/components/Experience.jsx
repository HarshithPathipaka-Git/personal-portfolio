import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="mt-12 space-y-8">
          {experience.map((exp, idx) => (
            <div key={exp.id} className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="experience-icon-container">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  {idx !== experience.length - 1 && (
                    <div className="experience-line"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin size={16} className="experience-location-icon" />
                    <span className="experience-location">{exp.location}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="experience-achievement">
                        <CheckCircle2 size={18} className="experience-achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
