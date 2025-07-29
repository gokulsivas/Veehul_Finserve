import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqTopics = [
    {
      id: 'investment-planning',
      icon: '📈',
      title: 'Investment Planning',
      subtitle: 'Mutual Funds, SIP, Portfolio Management',
      description: 'Learn about investment strategies, mutual funds, SIP benefits, and portfolio diversification.',
      questionCount: 6,
      color: '#4CAF50'
    },
    {
      id: 'insurance-solutions',
      icon: '🛡️',
      title: 'Insurance Solutions',
      subtitle: 'Life, Health, Motor Insurance',
      description: 'Understanding different insurance products, coverage options, and claim processes.',
      questionCount: 5,
      color: '#2196F3'
    },
    {
      id: 'tax-planning',
      icon: '💼',
      title: 'Tax Planning',
      subtitle: 'Tax Saving, ELSS, Deductions',
      description: 'Maximize tax savings through strategic planning and investment choices.',
      questionCount: 5,
      color: '#FF9800'
    },
    {
      id: 'retirement-planning',
      icon: '🎯',
      title: 'Retirement Planning',
      subtitle: 'Pension, NPS, Retirement Corpus',
      description: 'Plan for a comfortable retirement with the right investment and savings strategies.',
      questionCount: 4,
      color: '#9C27B0'
    },
    {
      id: 'education-planning',
      icon: '🎓',
      title: 'Education Planning',
      subtitle: 'Child Education, Study Abroad',
      description: 'Secure your child\'s educational future with proper financial planning.',
      questionCount: 3,
      color: '#E91E63'
    },
    {
      id: 'loan-services',
      icon: '🏠',
      title: 'Loan Services',
      subtitle: 'Home Loan, Personal Loan, EMI',
      description: 'Get the best loan deals and understand loan processes, EMI calculations.',
      questionCount: 3,
      color: '#00BCD4'
    },
    {
      id: 'general-queries',
      icon: '❓',
      title: 'General Queries',
      subtitle: 'Account, Services, Support',
      description: 'Common questions about our services, account management, and support.',
      questionCount: 3,
      color: '#607D8B'
    },
    {
      id: 'regulatory-compliance',
      icon: '📋',
      title: 'Regulatory & Compliance',
      subtitle: 'SEBI, KYC, Documentation',
      description: 'Understanding regulatory requirements, compliance, and documentation needs.',
      questionCount: 2,
      color: '#795548'
    }
  ];

  const faqData = {
    'investment-planning': [
      {
        question: 'What is SIP and how does it work?',
        answer: 'SIP (Systematic Investment Plan) is a method of investing in mutual funds where you invest a fixed amount at regular intervals (monthly, quarterly). It works on the principle of rupee cost averaging, where you buy more units when prices are low and fewer units when prices are high, thus averaging out your purchase cost over time. SIP helps in building wealth through compounding and reduces the impact of market volatility on your investments.'
      },
      {
        question: 'How much should I invest in mutual funds monthly?',
        answer: 'The amount you should invest depends on your financial goals, income, expenses, and risk tolerance. A general rule of thumb is to invest at least 10-15% of your monthly income. Start with what you can afford consistently - even ₹500 monthly can grow significantly over time. The key is to start early and stay consistent. Our financial advisors can help you determine the optimal investment amount based on your specific financial situation and goals.'
      },
      {
        question: 'What is the difference between equity and debt mutual funds?',
        answer: 'Equity mutual funds invest primarily in stocks and offer higher potential returns but come with higher risk and volatility. They are suitable for long-term goals (5+ years) and investors with higher risk tolerance. Debt mutual funds invest in bonds, government securities, and money market instruments. They offer steady returns with lower risk and are suitable for conservative investors and short to medium-term goals. A balanced portfolio typically includes both equity and debt funds based on your risk profile and investment horizon.'
      },
      {
        question: 'How do I choose the right mutual fund?',
        answer: 'Choosing the right mutual fund involves several factors: 1) Define your investment goal and time horizon, 2) Assess your risk tolerance, 3) Research fund performance over different market cycles (not just recent returns), 4) Check the fund manager\'s track record and experience, 5) Analyze expense ratio and fees, 6) Ensure the fund\'s investment philosophy aligns with your goals, 7) Consider the fund house\'s reputation and AUM. Our experts can help you select funds that best match your profile and objectives.'
      },
      {
        question: 'Can I withdraw my SIP investment anytime?',
        answer: 'Yes, most mutual funds allow you to withdraw your investment anytime (except ELSS funds which have a 3-year lock-in period). However, the timing of withdrawal can significantly impact your returns. For equity funds, it\'s recommended to stay invested for at least 5-7 years to ride out market volatility. Some funds may charge exit load if you withdraw within a specified period (usually 1 year). You can also pause or stop your SIP anytime, though staying consistent with your investments typically yields better results.'
      },
      {
        question: 'What is NAV and how is it calculated?',
        answer: 'NAV (Net Asset Value) is the per-unit price of a mutual fund. It represents the market value of all securities held by the fund, minus liabilities, divided by the total number of units outstanding. NAV is calculated at the end of each trading day based on the closing prices of the securities in the fund\'s portfolio. For example, if a fund has total assets worth ₹100 crores, liabilities of ₹5 crores, and 10 crore units outstanding, the NAV would be (₹100 crores - ₹5 crores) ÷ 10 crore units = ₹9.50 per unit.'
      }
    ],
    'insurance-solutions': [
      {
        question: 'What is the difference between term insurance and whole life insurance?',
        answer: 'Term insurance provides pure life coverage for a specific period (10, 20, 30 years) at a lower premium. If the policyholder dies during the term, beneficiaries receive the death benefit. If the policy expires and the person is alive, there\'s no payout. Whole life insurance combines life coverage with an investment component, building cash value over time. Premiums are higher, but the policy provides lifelong coverage and can be used as a savings tool. Term insurance is generally recommended for most people due to its affordability and pure protection focus.'
      },
      {
        question: 'How much life insurance coverage do I need?',
        answer: 'A general rule is to have life insurance coverage of 10-12 times your annual income. However, the exact amount depends on factors like: your age, number of dependents, outstanding debts (home loan, personal loans), future financial goals (children\'s education, spouse\'s retirement), current savings and investments, and lifestyle expenses. The goal is to ensure your family can maintain their standard of living and meet financial goals even in your absence. Our insurance advisors can help calculate the optimal coverage amount for your specific situation.'
      },
      {
        question: 'What is health insurance and why is it important?',
        answer: 'Health insurance is a contract that provides financial coverage for medical expenses including hospitalization, surgeries, treatments, and sometimes outpatient care. It\'s crucial because: 1) Medical costs are rising rapidly due to inflation and advanced treatments, 2) A single major illness can drain your savings, 3) It provides cashless treatment at network hospitals, 4) Offers tax benefits under Section 80D, 5) Covers family members under one policy. With healthcare costs increasing by 10-15% annually, having adequate health insurance is essential for financial security.'
      },
      {
        question: 'What is the claim settlement ratio and why does it matter?',
        answer: 'Claim settlement ratio is the percentage of insurance claims settled by an insurance company in a financial year out of total claims received. For example, if an insurer receives 1000 claims and settles 950, the claim settlement ratio is 95%. This ratio indicates the insurer\'s reliability in honoring claims. A higher ratio (above 95%) suggests the company is more likely to settle your claim when needed. However, also consider factors like claim settlement time, customer service quality, and reasons for claim rejections. IRDAI publishes annual claim settlement ratios for all insurers.'
      },
      {
        question: 'Can I buy insurance online or should I use an agent?',
        answer: 'Both options have advantages. Buying online is convenient, often cheaper (no agent commission), allows easy comparison, and provides instant policy issuance. However, it requires you to understand policy terms yourself. Using an agent provides personalized advice, helps with claim assistance, explains complex terms, and offers ongoing service. For simple products like term insurance, online purchase works well. For complex products or if you need guidance, an agent is beneficial. The key is choosing a reliable platform online or a qualified, trustworthy agent offline.'
      }
    ],
    'tax-planning': [
      {
        question: 'What are the different tax-saving investment options under Section 80C?',
        answer: 'Section 80C allows deduction up to ₹1.5 lakh annually from taxable income. Investment options include: 1) ELSS Mutual Funds (3-year lock-in, market-linked returns), 2) PPF (15-year lock-in, tax-free returns), 3) EPF (until retirement, employer contribution), 4) NSC (5-year lock-in, fixed returns), 5) Tax-saving Fixed Deposits (5-year lock-in), 6) Life Insurance Premiums, 7) Home Loan Principal Repayment, 8) ULIP premiums, 9) Sukanya Samriddhi Yojana (for girl child). ELSS offers the shortest lock-in period and potential for higher returns, making it popular among investors.'
      },
      {
        question: 'How does ELSS mutual fund work for tax saving?',
        answer: 'ELSS (Equity Linked Savings Scheme) are equity mutual funds that qualify for tax deduction under Section 80C. Key features: 1) Invest primarily in stocks (65%+ in equity), 2) 3-year mandatory lock-in period (shortest among 80C options), 3) Potential for higher returns compared to traditional tax-saving instruments, 4) Can invest via SIP or lump sum, 5) Returns are tax-free if held for more than 1 year (LTCG up to ₹1 lakh is tax-free), 6) Professional fund management. Historical returns have averaged 12-15% annually, making ELSS attractive for long-term wealth creation while saving taxes.'
      },
      {
        question: 'What is the new tax regime vs old tax regime?',
        answer: 'Old Tax Regime: Higher tax rates but allows various deductions like 80C (₹1.5L), 80D (health insurance), HRA, LTA, etc. Standard deduction of ₹50,000. New Tax Regime: Lower tax rates but very limited deductions - only standard deduction of ₹50,000 and employer NPS contribution. Most popular deductions like 80C, 80D, HRA are not available. The choice depends on your deductions: if your total deductions exceed ₹2-2.5 lakhs, old regime might be better. If you have minimal deductions, new regime could save more tax. You can switch between regimes each year (salaried employees) or at the time of filing returns.'
      },
      {
        question: 'How is capital gains tax calculated on mutual funds?',
        answer: 'Capital gains tax on mutual funds depends on the type of fund and holding period: Equity Funds: Short-term (≤1 year) - 15% tax on gains, Long-term (>1 year) - 10% tax on gains exceeding ₹1 lakh per year (grandfathering available for investments before Jan 31, 2018). Debt Funds: Short-term (≤3 years) - Added to income and taxed as per slab, Long-term (>3 years) - 20% with indexation benefit. Indexation adjusts the purchase price for inflation, reducing taxable gains. For example, if you bought debt fund units for ₹1 lakh in 2020 and sold for ₹1.5 lakh in 2023, indexation might reduce taxable gains significantly.'
      },
      {
        question: 'Can I claim HRA and home loan tax benefits together?',
        answer: 'Yes, you can claim both HRA exemption and home loan tax benefits simultaneously if: 1) The rented house and owned house are in different cities, 2) You live in the rented house due to job requirements while owning a house elsewhere, 3) The owned house is not used for self-occupation (treat it as let-out property). For the owned house, you can claim: home loan interest deduction under Section 24(b), and depreciation if it\'s treated as let-out property. However, you cannot claim HRA exemption and home loan benefits for the same property. If you live in your own house, you can only claim home loan benefits, not HRA exemption.'
      }
    ],
    'retirement-planning': [
      {
        question: 'When should I start planning for retirement?',
        answer: 'The best time to start retirement planning is as early as possible, ideally in your 20s or 30s. Starting early gives you the powerful advantage of compounding - your money has more time to grow. Even small amounts invested early can grow into substantial corpus over 30-40 years. For example, investing ₹5,000 monthly from age 25 vs age 35 can result in a difference of several crores at retirement. If you haven\'t started yet, don\'t worry - the second-best time is now. The key is to start with whatever amount you can afford and gradually increase your contributions as your income grows.'
      },
      {
        question: 'How much corpus do I need for retirement?',
        answer: 'The retirement corpus needed depends on your desired lifestyle, inflation, and life expectancy. A common rule is to accumulate 25-30 times your annual expenses at retirement. For example, if you need ₹6 lakh annually (₹50,000 monthly) during retirement, you should aim for ₹1.5-1.8 crores. Consider factors like: current age and retirement age, expected inflation (7-8% in India), post-retirement life expectancy (20-25 years), medical expenses (typically higher during retirement), and any ongoing liabilities. Use retirement calculators to get a more precise estimate based on your specific situation and goals.'
      },
      {
        question: 'What is NPS and how does it help in retirement planning?',
        answer: 'NPS (National Pension System) is a government-sponsored retirement savings scheme. Key features: 1) Contribution: Minimum ₹500 annually, maximum 75% of income for salaried employees, 2) Tax benefits: Deduction up to ₹1.5 lakh under 80C + additional ₹50,000 under 80CCD(1B), 3) Investment: Money invested in equity, corporate bonds, and government securities through professional fund managers, 4) Maturity: 60% can be withdrawn tax-free at 60, remaining 40% must be used to buy annuity, 5) Low cost: Very low expense ratios compared to other investment products. NPS is excellent for retirement planning due to its tax efficiency and long-term growth potential.'
      },
      {
        question: 'Should I rely on EPF for retirement or invest additionally?',
        answer: 'While EPF is a good foundation for retirement (providing 8.1% returns with safety), it\'s usually not sufficient for comfortable retirement. EPF limitations: 1) Fixed returns may not beat inflation in the long term, 2) Limited to 12% of basic salary contribution, 3) Corpus may not be adequate for desired lifestyle. Additional investments are essential: 1) Equity mutual funds for higher growth potential, 2) NPS for additional tax benefits, 3) PPF for tax-free returns, 4) Real estate for inflation hedge. A diversified approach combining EPF with other investments typically provides better retirement security. Aim to save at least 15-20% of income for retirement across all instruments.'
      }
    ],
    'education-planning': [
      {
        question: 'How much will my child\'s education cost in the future?',
        answer: 'Education costs are rising at 10-12% annually in India. Current approximate costs: Engineering degree: ₹8-15 lakhs, Medical degree: ₹25-50 lakhs, MBA from top institutes: ₹20-30 lakhs, Study abroad (undergraduate): ₹25-50 lakhs, Study abroad (postgraduate): ₹30-75 lakhs. For a child currently 5 years old, these costs could double or triple by the time they reach college age. For example, an engineering degree costing ₹10 lakhs today might cost ₹25-30 lakhs after 15 years. Early planning and systematic investing can help accumulate the required corpus through the power of compounding.'
      },
      {
        question: 'What are the best investment options for child education planning?',
        answer: 'Best investment options depend on the time horizon: Long-term (10+ years): Equity mutual funds via SIP for maximum growth potential, ELSS for tax benefits, PPF for tax-free returns. Medium-term (5-10 years): Balanced/hybrid funds, children-specific mutual fund schemes, Sukanya Samriddhi Yojana (for girl child). Short-term (1-5 years): Debt funds, FDs, liquid funds for capital protection. Child insurance plans are generally not recommended due to poor returns. A combination of equity funds (for growth) and debt instruments (for stability) based on your risk tolerance and time horizon works best. Start with equity-heavy allocation when the child is young and gradually shift to debt as education approaches.'
      },
      {
        question: 'Should I buy a child education insurance plan?',
        answer: 'Traditional child education insurance plans are generally not recommended because: 1) Low returns (6-8% vs 12-15% from equity funds), 2) High charges and fees, 3) Inflexibility in premium payments, 4) Complexity in terms and conditions, 5) Poor liquidity options. Better alternatives: 1) Invest in mutual funds via SIP + buy separate term insurance for parent, 2) This combination provides better returns and higher life coverage, 3) More flexibility and transparency, 4) Lower costs. However, if you lack investment discipline and prefer a forced savings approach, child plans might work, but ensure you understand all charges and expected returns before investing.'
      }
    ],
    'loan-services': [
      {
        question: 'What factors affect my home loan eligibility and interest rate?',
        answer: 'Home loan eligibility and interest rates depend on several factors: 1) Credit Score: Higher score (750+) gets better rates and higher eligibility, 2) Income stability: Salaried employees often get better rates than self-employed, 3) Debt-to-Income ratio: Lower existing EMIs improve eligibility, 4) Employment history: Longer tenure with current employer is preferred, 5) Property value and location: Prime locations get better rates, 6) Loan-to-Value ratio: Higher down payment reduces risk and rates, 7) Age: Younger borrowers get longer tenure options, 8) Bank relationship: Existing customers may get preferential rates. Maintaining a good credit score and stable income history are crucial for the best loan terms.'
      },
      {
        question: 'Should I choose fixed or floating interest rate for home loan?',
        answer: 'Both have pros and cons: Floating Rate: Generally lower initial rates, benefits from rate cuts, but exposed to rate increase risk. In India\'s declining rate environment (recent years), floating rate borrowers have benefited. Fixed Rate: Protection from rate increases, predictable EMIs, easier budgeting, but may miss out on rate cuts and typically start with higher rates. Recommendation: If you expect rates to fall or remain stable, choose floating. If you prefer certainty and expect rates to rise, choose fixed. You can also opt for a combination loan (part fixed, part floating) or loans with conversion options. Consider your risk tolerance and market outlook when deciding.'
      },
      {
        question: 'How can I reduce my EMI burden?',
        answer: 'Several strategies to reduce EMI burden: 1) Prepayment: Use bonuses, windfalls to prepay principal, reducing outstanding amount, 2) Extend tenure: Increases total interest but reduces monthly EMI (use carefully), 3) Balance transfer: Switch to lender offering lower rates, 4) Loan restructuring: Some banks offer EMI holidays or step-up EMIs, 5) Interest rate negotiation: Existing customers can negotiate with current lender, 6) Increase income: Take additional projects, side business to improve income, 7) Optimize other expenses: Reduce unnecessary spending to manage EMI better. Prepayment is usually the most effective strategy for long-term savings, especially for home loans where interest savings can be substantial.'
      }
    ],
    'general-queries': [
      {
        question: 'How do I start investing with Veehul Finserve?',
        answer: 'Starting your investment journey with us is simple: 1) Schedule a free consultation through our website or phone, 2) Our advisor will understand your financial goals, risk tolerance, and current situation, 3) Complete KYC documentation (PAN, Aadhaar, bank details, photos), 4) Receive personalized investment recommendations based on your profile, 5) Choose your preferred investment options and amounts, 6) Set up automatic SIP or make lump sum investments, 7) Get regular portfolio reviews and updates. We handle all paperwork and provide ongoing support. You can start with as little as ₹500 monthly through SIP. Our goal is to make investing simple and accessible for everyone.'
      },
      {
        question: 'What fees do you charge for your services?',
        answer: 'Our fee structure is transparent and competitive: 1) Initial consultation: Completely FREE, 2) Investment advisory: We earn through trail commission from mutual fund companies (no direct charges to you), 3) Insurance services: Commission from insurance companies (no additional cost to you), 4) Loan services: Processing fees as per lender terms, 5) Tax planning: Nominal charges for complex cases, consultation usually free, 6) Portfolio review: FREE for existing clients. We believe in a fee structure that aligns our interests with yours - we succeed when your investments perform well. All fees and charges are disclosed upfront with no hidden costs.'
      },
      {
        question: 'How often will I receive updates about my investments?',
        answer: 'We provide regular and comprehensive updates: 1) Monthly statements: Detailed portfolio performance via email, 2) Quarterly reviews: Video call or meeting to discuss performance and rebalancing, 3) Annual comprehensive review: Complete financial health check and goal assessment, 4) Market updates: Weekly market commentary and insights, 5) Instant alerts: For important market events affecting your portfolio, 6) 24/7 online access: Track your investments anytime through our client portal, 7) Dedicated relationship manager: Available for queries and guidance. We believe in keeping you informed and involved in your financial journey while handling the complex details for you.'
      }
    ],
    'regulatory-compliance': [
      {
        question: 'What documents are required for KYC compliance?',
        answer: 'KYC (Know Your Customer) documents required: Identity Proof: PAN Card (mandatory), Aadhaar Card, Voter ID, Passport, or Driving License. Address Proof: Aadhaar Card, Passport, Utility bills (electricity, gas, phone), Bank statements, Rent agreement with utility bill. Income Proof: Salary slips (last 3 months), Bank statements (last 6 months), ITR (last 2 years), Form 16. Additional for high-value transactions: Bank account proof, cancelled cheque, passport-size photographs. All documents should be self-attested copies. Original documents may be required for verification. We assist with the entire KYC process to ensure compliance and quick processing.'
      },
      {
        question: 'Are mutual fund investments safe and regulated?',
        answer: 'Yes, mutual funds in India are highly regulated and safe: Regulatory oversight: SEBI (Securities and Exchange Board of India) regulates all mutual funds with strict compliance requirements. Safety measures: 1) Fund assets held separately from AMC assets, 2) Independent trustees oversee fund operations, 3) Regular audits and inspections, 4) Strict disclosure norms for transparency, 5) Risk management guidelines, 6) Investor protection measures. However, market risk remains: Equity funds can lose value due to market volatility, but regulatory framework ensures no fraud or misappropriation. Your investments are units of underlying securities, not company deposits. Choose SEBI-registered fund houses and distributors for complete safety and compliance.'
      }
    ]
  };

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    setExpandedQuestion(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setExpandedQuestion(null);
  };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  if (selectedTopic) {
    const topic = faqTopics.find(t => t.id === selectedTopic);
    const questions = faqData[selectedTopic] || [];

    return (
      <div className="faq-container">
        {/* Header */}
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <div className="logo-icon">
                  💰
                </div>
                <span className="logo-text">Veehul Finserve LLP</span>
              </div>
              
              <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/about" className="nav-link">ABOUT</Link>
                <Link to="/services" className="nav-link">SERVICES</Link>
                <Link to="/calculators" className="nav-link">CALCULATORS</Link>
                <Link to="/blog" className="nav-link">BLOG</Link>
                <Link to="/faq" className="nav-link active">FAQ</Link>
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

        {/* Topic Detail View */}
        <section className="topic-detail">
          <div className="container">
            <div className="back-navigation">
              <button onClick={handleBackToTopics} className="back-btn">
                ← Back to All Topics
              </button>
            </div>
            
            <div className="topic-header">
              <div className="topic-icon" style={{ backgroundColor: topic.color }}>
                {topic.icon}
              </div>
              <div>
                <h1>{topic.title}</h1>
                <p>{topic.description}</p>
              </div>
            </div>

            <div className="questions-container">
              {questions.map((qa, index) => (
                <div key={index} className={`question-card ${expandedQuestion === index ? 'expanded' : ''}`}>
                  <div className="question-header" onClick={() => toggleQuestion(index)}>
                    <h3>{qa.question}</h3>
                    <span className="toggle-icon">
                      {expandedQuestion === index ? '−' : '+'}
                    </span>
                  </div>
                  {expandedQuestion === index && (
                    <div className="answer-content">
                      <p>{qa.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="topic-cta">
              <h3>Still have questions about {topic.title.toLowerCase()}?</h3>
              <p>Our experts are here to help you with personalized advice.</p>
              <Link to="/contact" className="cta-btn">Get Expert Consultation</Link>
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
                    💰
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

  // Main FAQ Topics View
  // Main FAQ Topics View
  return (
    <div className="faq-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                💰
              </div>
              <span className="logo-text">Veehul Finserve LLP</span>
            </div>
            
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/calculators" className="nav-link">CALCULATORS</Link>
              <Link to="/blog" className="nav-link">BLOG</Link>
              <Link to="/faq" className="nav-link active">FAQ</Link>
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
      <section className="faq-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our financial services and solutions</p>
          </div>
        </div>
      </section>

      {/* FAQ Topics Grid */}
      <section className="faq-topics">
        <div className="container">
          <div className="topics-grid">
            {faqTopics.map((topic) => (
              <div 
                key={topic.id} 
                className="topic-card"
                onClick={() => handleTopicClick(topic.id)}
                style={{ '--topic-color': topic.color }}
              >
                <div className="topic-icon" style={{ backgroundColor: topic.color }}>
                  {topic.icon}
                </div>
                <div className="topic-content">
                  <h3>{topic.title}</h3>
                  <p className="topic-subtitle">{topic.subtitle}</p>
                  <p className="topic-description">{topic.description}</p>
                  <div className="topic-meta">
                    <span className="question-count">{topic.questionCount} Questions</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Couldn't find what you're looking for?</h2>
            <p>Our financial experts are ready to answer your specific questions and provide personalized guidance.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">Get Expert Consultation</Link>
              <Link to="/contact" className="cta-btn secondary">Schedule a Call</Link>
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
                  💰
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

export default FAQ;