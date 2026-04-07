import React from 'react';
import { skills } from '../data/portfolioData';
import { Code, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    { name: 'Frontend', data: skills.frontend, icon: Code },
    { name: 'Backend', data: skills.backend, icon: Server },
    { name: 'Tools & DevOps', data: skills.tools, icon: Wrench }
  ];

  return (
    <section id="skills" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="skill-category-card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="skill-category-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="skill-category-title">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.data.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
