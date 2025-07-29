import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to include the CSS file

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
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
              <Link to="/about" className="nav-link">ABOUT</Link>
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
      <section className="hero-section">
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
            <div className="hero-text">
              <h1>Building Wealth,<br/><span className="highlight">Growing Futures</span></h1>
              <p>At Veehul Finserve LLP, we don't just manage your finances – we cultivate your prosperity. Experience the power of strategic financial planning that grows with your ambitions.</p>
              <button className="cta-button">Start Your Growth Journey</button>
            </div>
            
            <div className="hero-visual">
              <div className="growth-chart">
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
              </div>
              <div className="growth-arrow">↗</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Empowered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹50Cr+</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15%</div>
              <div className="stat-label">Average Annual Growth</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Growth Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Investment Planning</h3>
              <p>Strategic portfolio management designed to maximize your returns while minimizing risks through diversified investment approaches.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Wealth Creation</h3>
              <p>Long-term wealth building strategies that compound your assets over time, ensuring sustainable financial growth.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Financial Goals</h3>
              <p>Personalized financial planning to help you achieve your life goals, from home ownership to retirement planning.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Risk Management</h3>
              <p>Comprehensive insurance and protection strategies to safeguard your growing wealth against unforeseen circumstances.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Financial Advisory</h3>
              <p>Expert guidance and consultation to make informed financial decisions that align with your growth objectives.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Portfolio Review</h3>
              <p>Regular assessment and optimization of your investments to ensure they remain aligned with market conditions and your goals.</p>
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
                <div className="logo-icon">💰</div>
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

export default Home;