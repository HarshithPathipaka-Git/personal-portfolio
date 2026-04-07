import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'featured', ...new Set(projects.flatMap(p => p.tech))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
          {filters.slice(0, 8).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-button ${
                filter === f ? 'filter-button-active' : ''
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
