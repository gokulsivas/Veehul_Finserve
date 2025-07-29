import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Calculators.css';

const formatIndianNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) return '0';
  const numStr = Math.round(num).toString();
  const lastThree = numStr.substring(numStr.length - 3);
  const otherNumbers = numStr.substring(0, numStr.length - 3);
  if (otherNumbers !== '') {
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
  } else {
    return lastThree;
  }
};

function SIPCalculator() {
  const [input, setInput] = useState({ monthly_investment: '', years: '', annual_return: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const monthlyInvestment = parseFloat(input.monthly_investment);
      const years = parseFloat(input.years);
      const annualReturn = parseFloat(input.annual_return);
      const monthlyReturn = annualReturn / 12 / 100;
      const totalMonths = years * 12;
      const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
      setResult(Math.round(futureValue));
    } catch (error) {
      setResult(null);
      alert('Calculation failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <div className="calculator-icon">📈</div>
        <h3>SIP Calculator</h3>
        <p>Calculate the future value of your Systematic Investment Plan</p>
      </div>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="input-group">
          <label>Monthly Investment (₹)</label>
          <input type="number" name="monthly_investment" value={input.monthly_investment} onChange={handleChange} placeholder="Enter monthly investment amount" required />
        </div>
        <div className="input-group">
          <label>Investment Period (Years)</label>
          <input type="number" name="years" value={input.years} onChange={handleChange} placeholder="Enter investment period" required />
        </div>
        <div className="input-group">
          <label>Expected Annual Return (%)</label>
          <input type="number" step="0.1" name="annual_return" value={input.annual_return} onChange={handleChange} placeholder="Enter expected return rate" required />
        </div>
        <button type="submit" className="calculate-btn" disabled={loading}>{loading ? 'Calculating...' : 'Calculate SIP'}</button>
      </form>
      {result !== null && (
        <div className="result-section">
          <div className="result-card">
            <h4>Investment Summary</h4>
            <div className="result-details">
              <div className="result-item">
                <span>Total Investment:</span>
                <span>₹{formatIndianNumber(input.monthly_investment * input.years * 12)}</span>
              </div>
              <div className="result-item">
                <span>Future Value:</span>
                <span className="highlight">₹{formatIndianNumber(result)}</span>
              </div>
              <div className="result-item">
                <span>Total Gains:</span>
                <span className="gain">₹{formatIndianNumber(result - (input.monthly_investment * input.years * 12))}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LumpsumCalculator() {
  const [input, setInput] = useState({ principal: '', years: '', annual_return: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const principal = parseFloat(input.principal);
      const years = parseFloat(input.years);
      const annualReturn = parseFloat(input.annual_return);
      const futureValue = principal * Math.pow(1 + (annualReturn / 100), years);
      setResult(Math.round(futureValue));
    } catch (error) {
      setResult(null);
      alert('Calculation failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <div className="calculator-icon">💰</div>
        <h3>Lumpsum Calculator</h3>
        <p>Calculate returns on your one-time investment</p>
      </div>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="input-group">
          <label>Investment Amount (₹)</label>
          <input type="number" name="principal" value={input.principal} onChange={handleChange} placeholder="Enter lumpsum amount" required />
        </div>
        <div className="input-group">
          <label>Investment Period (Years)</label>
          <input type="number" name="years" value={input.years} onChange={handleChange} placeholder="Enter investment period" required />
        </div>
        <div className="input-group">
          <label>Expected Annual Return (%)</label>
          <input type="number" step="0.1" name="annual_return" value={input.annual_return} onChange={handleChange} placeholder="Enter expected return rate" required />
        </div>
        <button type="submit" className="calculate-btn" disabled={loading}>{loading ? 'Calculating...' : 'Calculate Returns'}</button>
      </form>
      {result !== null && (
        <div className="result-section">
          <div className="result-card">
            <h4>Investment Summary</h4>
            <div className="result-details">
              <div className="result-item">
                <span>Initial Investment:</span>
                <span>₹{formatIndianNumber(parseFloat(input.principal))}</span>
              </div>
              <div className="result-item">
                <span>Future Value:</span>
                <span className="highlight">₹{formatIndianNumber(result)}</span>
              </div>
              <div className="result-item">
                <span>Total Gains:</span>
                <span className="gain">₹{formatIndianNumber(result - input.principal)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RetirementCalculator() {
  const [input, setInput] = useState({ current_age: '', retirement_age: '', monthly_expense: '', inflation_rate: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const currentAge = parseFloat(input.current_age);
      const retirementAge = parseFloat(input.retirement_age);
      const monthlyExpense = parseFloat(input.monthly_expense);
      const inflationRate = parseFloat(input.inflation_rate);
      const yearsToRetirement = retirementAge - currentAge;
      const futureExpense = monthlyExpense * Math.pow(1 + (inflationRate / 100), yearsToRetirement);
      setResult(Math.round(futureExpense));
    } catch (error) {
      setResult(null);
      alert('Calculation failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <div className="calculator-icon">🏖️</div>
        <h3>Retirement Calculator</h3>
        <p>Plan your retirement with inflation-adjusted expenses</p>
      </div>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="input-group">
          <label>Current Age</label>
          <input type="number" name="current_age" value={input.current_age} onChange={handleChange} placeholder="Enter your current age" required />
        </div>
        <div className="input-group">
          <label>Retirement Age</label>
          <input type="number" name="retirement_age" value={input.retirement_age} onChange={handleChange} placeholder="Enter retirement age" required />
        </div>
        <div className="input-group">
          <label>Current Monthly Expenses (₹)</label>
          <input type="number" name="monthly_expense" value={input.monthly_expense} onChange={handleChange} placeholder="Enter current monthly expenses" required />
        </div>
        <div className="input-group">
          <label>Expected Inflation Rate (%)</label>
          <input type="number" step="0.1" name="inflation_rate" value={input.inflation_rate} onChange={handleChange} placeholder="Enter inflation rate" required />
        </div>
        <button type="submit" className="calculate-btn" disabled={loading}>{loading ? 'Calculating...' : 'Calculate Retirement Needs'}</button>
      </form>
      {result !== null && (
        <div className="result-section">
          <div className="result-card">
            <h4>Retirement Planning Summary</h4>
            <div className="result-details">
              <div className="result-item">
                <span>Years to Retirement:</span>
                <span>{input.retirement_age - input.current_age} years</span>
              </div>
              <div className="result-item">
                <span>Current Monthly Expenses:</span>
                <span>₹{formatIndianNumber(parseFloat(input.monthly_expense))}</span>
              </div>
              <div className="result-item">
                <span>Future Monthly Expenses:</span>
                <span className="highlight">₹{formatIndianNumber(result)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Calculators() {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 0, label: 'SIP Calculator', icon: '📈' },
    { id: 1, label: 'Lumpsum Calculator', icon: '💰' },
    { id: 2, label: 'Retirement Calculator', icon: '🏖️' }
  ];

  return (
    <div className="calculators-container">
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
              <Link to="/calculators" className="nav-link active">CALCULATORS</Link>
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
      <section className="calculators-hero">
        <div className="hero-bg-animation">
          <div className="floating-elements">
            <div className="calc-icon">📊</div>
            <div className="calc-icon">💹</div>
            <div className="calc-icon">📈</div>
            <div className="calc-icon">💰</div>
            <div className="calc-icon">🏖️</div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1>Financial <span className="highlight">Calculators</span></h1>
            <p>Make informed financial decisions with our comprehensive suite of calculators. Plan your investments, track your SIP returns, and secure your retirement with precision.</p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="calculators-section">
        <div className="container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Calculator Content */}
          <div className="calculator-content">
            {activeTab === 0 && <SIPCalculator />}
            {activeTab === 1 && <LumpsumCalculator />}
            {activeTab === 2 && <RetirementCalculator />}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">Why Use Our <span className="highlight">Calculators?</span></h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Accurate Calculations</h3>
              <p>Get precise calculations based on proven financial formulas and real market scenarios.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h3>Instant Results</h3>
              <p>Receive immediate calculations to help you make quick and informed investment decisions.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Use our calculators on any device, anywhere, anytime for your financial planning needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Expert Financial Advice?</h2>
            <p>Our calculators are just the beginning. Get personalized financial planning and investment strategies from our expert team.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">Schedule Consultation</Link>
              <Link to="/services" className="cta-secondary">Explore Services</Link>
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
}

export default Calculators;