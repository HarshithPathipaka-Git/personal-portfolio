import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="hero-content">
            <div className="inline-block mb-6 animate-float">
              <div className="hero-avatar">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">{personalInfo.name}</span>
            </h1>
            
            <p className="hero-subtitle">
              {personalInfo.title}
            </p>
            
            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="mt-10">
              <button
                onClick={scrollToAbout}
                className="hero-cta"
              >
                View My Work
              </button>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="scroll-indicator"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
