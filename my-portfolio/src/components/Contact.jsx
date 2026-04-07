import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (frontend only)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-underline"></div>
          <p className="section-subtitle mt-4">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
            </p>

            <div className="space-y-6 mt-8">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="contact-info-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-value">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={64} className="contact-success-icon" />
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="contact-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="contact-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="contact-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="contact-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="contact-input"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
