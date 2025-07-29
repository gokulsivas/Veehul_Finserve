import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      id: 1,
      icon: '🎯',
      title: 'Client-Centric Approach',
      description: 'Every decision we make is driven by our clients\' best interests. We prioritize transparency, trust, and long-term relationships over short-term gains.'
    },
    {
      id: 2,
      icon: '💡',
      title: 'Innovation & Excellence',
      description: 'We leverage cutting-edge financial tools and strategies to deliver superior results. Our commitment to excellence drives continuous improvement in all our services.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Integrity & Trust',
      description: 'Built on a foundation of honesty and ethical practices, we maintain the highest standards of professional conduct in all our client interactions.'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Growth Mindset',
      description: 'We believe in the power of compound growth - not just for investments, but for knowledge, relationships, and our clients\' financial well-being.'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sivasubramaniam N',
      position: 'Founder & Managing Director',
      experience: '15+ Years',
      specialization: 'Investment Strategy & Wealth Management',
      description: 'A seasoned financial expert with extensive experience in portfolio management and strategic financial planning.',
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Renukadevi S',
      position: 'Senior Financial Advisor',
      experience: '12+ Years',
      specialization: 'Insurance & Risk Management',
      description: 'Specializes in comprehensive insurance solutions and risk assessment for individuals and businesses.',
      image: '👩‍💼'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Veehul Finserve LLP was established with a vision to democratize wealth creation for Indian families.'
    },
    {
      year: '2019',
      title: '100 Clients Milestone',
      description: 'Reached our first major milestone of serving 100+ satisfied clients with comprehensive financial solutions.'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Launched digital platforms for seamless client experience and online financial planning tools.'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Recognized as "Best Financial Advisory Firm" by the Regional Finance Awards for exceptional client service.'
    },
    {
      year: '2024',
      title: '500+ Clients',
      description: 'Celebrated serving over 500 clients with ₹50+ Crores in assets under management.'
    },
    {
      year: '2025',
      title: 'Expansion Plans',
      description: 'Expanding services to include international investment opportunities and cryptocurrency advisory.'
    }
  ];

  return (
    <div className="about-container">
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
              <Link to="/about" className="nav-link active">ABOUT</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/calculators" className="nav-link">CALCULATORS</Link>
              <Link to="/blog" className="nav-link">BLOG</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/contact" className="nav-link">CONTACT</Link>
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

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg-animation">
          <div className="floating-elements">
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1>About <span className="highlight">Veehul Finserve LLP</span></h1>
            <p>Building financial success stories for over 7 years. We are your trusted partners in creating wealth, securing futures, and achieving financial freedom through expert guidance and innovative solutions.</p>
            <div className="hero-achievement">
              <div className="achievement-item">
                <div className="achievement-number">7+</div>
                <div className="achievement-label">Years of Excellence</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">500+</div>
                <div className="achievement-label">Lives Transformed</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">₹50Cr+</div>
                <div className="achievement-label">Wealth Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our <span className="highlight">Story</span></h2>
              <p>Founded in 2018 with a simple yet powerful vision: to make comprehensive financial planning accessible to every Indian family. What started as a small advisory firm in Coimbatore has grown into a trusted financial partner for hundreds of clients across Tamil Nadu.</p>
              
              <p>At Veehul Finserve LLP, we believe that financial success isn't just about numbers - it's about dreams, aspirations, and the peace of mind that comes from knowing your future is secure. Our journey began when our founder recognized the gap between traditional banking services and the personalized financial guidance that modern families need.</p>
              
              <p>Today, we combine time-tested investment principles with innovative digital tools to deliver exceptional results. Our holistic approach covers everything from basic insurance needs to complex investment strategies, ensuring that every client receives comprehensive financial solutions tailored to their unique circumstances.</p>
            </div>
            
            <div className="story-visual">
              <div className="timeline-preview">
                <div className="timeline-line"></div>
                <div className="timeline-dot active"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
              </div>
              <div className="growth-stats">
                <div className="stat-circle">
                  <div className="stat-value">99%</div>
                  <div className="stat-desc">Client Satisfaction</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-value">15%</div>
                  <div className="stat-desc">Avg. Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower every individual and family with the knowledge, tools, and strategies needed to build lasting wealth and achieve financial independence. We are committed to providing transparent, ethical, and personalized financial guidance that transforms lives and secures futures.</p>
            </div>
            
            <div className="mv-card vision">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>To be India's most trusted financial advisory firm, recognized for our innovative solutions, exceptional client service, and unwavering commitment to our clients' financial success. We envision a future where every family has access to professional financial guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core <span className="highlight">Values</span></h2>
          <div className="values-grid">
            {values.map((value) => (
              <div 
                key={value.id} 
                className={`value-card ${activeValue === value.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveValue(value.id)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our <span className="highlight">Expert Team</span></h2>
          <p className="team-intro">Our success is driven by a team of dedicated financial professionals who bring decades of combined experience and unwavering commitment to your financial growth.</p>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">{member.image}</div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-position">{member.position}</div>
                  <div className="team-experience">{member.experience} Experience</div>
                  <div className="team-specialization">{member.specialization}</div>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our <span className="highlight">Journey</span></h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards-section">
        <div className="container">
          <h2 className="section-title">Awards & <span className="highlight">Recognition</span></h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best Financial Advisory Firm 2023</h3>
              <p>Regional Finance Awards</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h3>Excellence in Client Service</h3>
              <p>Tamil Nadu Business Excellence Awards</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎖️</div>
              <h3>Top Performing Advisor</h3>
              <p>Mutual Fund Industry Recognition</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <h3>Innovation in Financial Planning</h3>
              <p>FinTech Innovation Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Success Story?</h2>
            <p>Join hundreds of satisfied clients who have transformed their financial lives with our expert guidance. Your journey to financial freedom starts with a single consultation.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">Schedule Free Consultation</Link>
              <Link to="/services" className="cta-secondary">Explore Our Services</Link>
            </div>
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

export default About;