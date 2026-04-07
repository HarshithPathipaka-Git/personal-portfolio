import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="footer-title">&lt;Dev/&gt;</h3>
            <p className="footer-text mt-4">
              Full Stack Developer passionate about building modern web applications.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Connect</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} className="inline text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
