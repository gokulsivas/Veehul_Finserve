import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';

const API_URL = 'http://localhost:8000/contact';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [input, setInput] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsLoading(true);

    try {
      await axios.post(API_URL, input);
      setSuccess(true);
      setInput({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      details: ['123 Financial District', 'Mumbai, Maharashtra 400001', 'India']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 22 1234 5678', 'Mon-Sat: 9:00 AM - 6:00 PM']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@veehulfinserve.com', 'support@veehulfinserve.com', 'Quick response within 24 hours']
    }
  ];

  return (
    <div className="contact-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <img src="frontend\src\logo.png" alt="Veehul Finserve LLP" className="logo-image" />
              </div>
              <span className="logo-text">Veehul Finserve LLP</span>
            </div>
            
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/calculators" className="nav-link">CALCULATORS</Link>
              <Link to="/blog" className="nav-link">BLOG</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/contact" className="nav-link active">CONTACT</Link>
              {/* <Link to="/login" className="nav-link login-btn">LOGIN</Link> */}
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <div className="section-header">
                <h2>Send Us a <span className="highlight">Message</span></h2>
                <p>Fill out the form below and we'll get back to you as soon as possible. All information is kept strictly confidential.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={input.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={input.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={input.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Investment Planning">Investment Planning</option>
                      <option value="Insurance Solutions">Insurance Solutions</option>
                      <option value="Tax Planning">Tax Planning</option>
                      <option value="Retirement Planning">Retirement Planning</option>
                      <option value="Education Planning">Education Planning</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={input.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your financial goals and how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {success && (
                  <div className="alert alert-success">
                    <span className="alert-icon">✅</span>
                    Thank you for contacting us! We'll get back to you within 24 hours.
                  </div>
                )}

                {error && (
                  <div className="alert alert-error">
                    <span className="alert-icon">❌</span>
                    {error}
                  </div>
                )}
              </form>
            </div>

            <div className="contact-sidebar">
              <div className="sidebar-card">
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  <li>
                    <span className="benefit-icon">🎯</span>
                    <div>
                      <strong>Personalized Approach</strong>
                      <p>Tailored financial solutions for your unique needs</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon">🏆</span>
                    <div>
                      <strong>Expert Advisors</strong>
                      <p>Certified professionals with years of experience</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon">🔒</span>
                    <div>
                      <strong>Secure & Confidential</strong>
                      <p>Your financial information is always protected</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon">📈</span>
                    <div>
                      <strong>Proven Track Record</strong>
                      <p>Helping clients achieve financial success since 2015</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar-card cta-card">
                <h3>Need Immediate Help?</h3>
                <p>For urgent financial matters, call us directly or schedule a free consultation.</p>
                <div className="cta-buttons">
                  <a href="tel:+919876543210" className="cta-phone">📞 Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="logo">
                <div className="logo-icon">
                  <img src="frontend\src\logo.png" alt="Veehul Finserve LLP" className="logo-image" />
                </div>
                <span className="logo-text">Veehul Finserve LLP</span>
              </div>
              <p>Building wealth, growing futures. Your trusted partner in financial success.</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Services</h4>
                <Link to="/services">Investment Planning</Link>
                <Link to="/services">Loan Services</Link>
                <Link to="/services">Insurance</Link>
                <Link to="/services">Tax Planning</Link>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="link-group">
                <h4>Tools</h4>
                <Link to="/calculators">SIP Calculator</Link>
                <Link to="/calculators">EMI Calculator</Link>
                <Link to="/calculators">Tax Calculator</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Veehul Finserve LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;