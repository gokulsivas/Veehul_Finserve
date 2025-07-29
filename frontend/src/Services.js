import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      icon: '📈',
      title: 'Investment Planning',
      subtitle: 'Strategic Portfolio Management',
      description: 'Build wealth through intelligent investment strategies tailored to your risk profile and financial goals.',
      features: [
        'Mutual Fund Advisory',
        'Equity Portfolio Management',
        'Systematic Investment Plans (SIP)',
        'Asset Allocation Strategy',
        'Market Research & Analysis'
      ],
      benefits: 'Average 12-15% annual returns with diversified risk management'
    },
    {
      id: 2 ,
      title: 'Insurance Solutions',
      icon: '🛡️',
      subtitle: 'Comprehensive Protection Plans',
      description: 'Safeguard your family and assets with our comprehensive insurance coverage options.',
      features: [
        'Life Insurance',
        'Health Insurance',
        'Motor Insurance',
        'Travel Insurance',
        'Business Insurance'
      ],
      benefits: 'Up to 80% coverage with tax benefits under Section 80C & 80D'
    },
    {
      id: 4,
      icon: '💼',
      title: 'Tax Planning',
      subtitle: 'Smart Tax Optimization',
      description: 'Minimize tax liability while maximizing savings through strategic tax planning solutions.',
      features: [
        'Tax Saving Investment Plans',
        'ELSS Mutual Funds',
        'PPF & EPF Advisory',
        'Tax Filing Services',
        'Capital Gains Planning'
      ],
      benefits: 'Save up to ₹1.5 lakhs annually under Section 80C'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Retirement Planning',
      subtitle: 'Secure Your Golden Years',
      description: 'Build a robust retirement corpus to maintain your lifestyle post-retirement.',
      features: [
        'Pension Plan Advisory',
        'NPS Investment',
        'Retirement Corpus Calculation',
        'Annuity Plans',
        'Post-Retirement Income Planning'
      ],
      benefits: 'Guaranteed monthly income post-retirement with tax advantages'
    },
    {
      id: 6,
      icon: '🎓',
      title: 'Education Planning',
      subtitle: 'Invest in Your Child\'s Future',
      description: 'Secure your child\'s educational dreams with systematic education funding strategies.',
      features: [
        'Child Education Plans',
        'Education Loan Advisory',
        'Scholarship Guidance',
        'Study Abroad Funding',
        'Skill Development Investment'
      ],
      benefits: 'Inflation-adjusted corpus for quality education funding'
    }
  ];

  return (
    <div className="services-container">
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
              <Link to="/services" className="nav-link active">SERVICES</Link>
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
      <section className="services-hero">
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
            <h1>Our <span className="highlight">Financial Services</span></h1>
            <p>Comprehensive financial solutions designed to grow your wealth and secure your future. From investment planning to insurance, we've got you covered.</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">6+</div>
                <div className="stat-label">Service Categories</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${activeService === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title-section">
                    <h3>{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-benefits">
                    <div className="benefit-badge">
                      <span className="benefit-icon">✨</span>
                      <span>{service.benefits}</span>
                    </div>
                  </div>
                </div>
                
                <div className="service-action">
                  <button className="service-btn">Learn More</button>
                  <Link to="/contact" className="contact-link">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our <span className="highlight">Process</span></h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>Free consultation to understand your financial goals and current situation</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Analysis</h3>
                <p>Comprehensive analysis of your financial portfolio and risk assessment</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Planning</h3>
                <p>Customized financial plan tailored to your specific needs and objectives</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Execute the plan with ongoing support and regular monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Financial Journey?</h2>
            <p>Get a free consultation with our expert financial advisors and take the first step towards financial freedom.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">Book Free Consultation</Link>
              <Link to="/calculators" className="cta-secondary">Try Our Calculators</Link>
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

export default Services;