import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding SIP Investments: A Beginner's Guide",
      excerpt: "Learn how Systematic Investment Plans can help you build wealth over time with disciplined investing...",
      author: "Rajesh Kumar",
      category: "Investment",
      date: "2025-01-20",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250/1e3a5f/ffffff?text=SIP+Investment",
      content: "Full blog content goes here..."
    },
    {
      id: 2,
      title: "Tax Planning Strategies for 2025",
      excerpt: "Discover effective tax-saving strategies and instruments to maximize your savings this financial year...",
      author: "Priya Sharma",
      category: "Tax Planning",
      date: "2025-01-18",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x250/2c5aa0/ffffff?text=Tax+Planning",
      content: "Full blog content goes here..."
    },
    {
      id: 3,
      title: "Home Loan vs Rent: What's Better in 2025?",
      excerpt: "A comprehensive analysis of buying vs renting property in the current market scenario...",
      author: "Amit Gupta",
      category: "Loans",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/D4AF37/1e3a5f?text=Home+Loan",
      content: "Full blog content goes here..."
    },
    {
      id: 4,
      title: "Life Insurance: Term vs Whole Life",
      excerpt: "Understanding the differences between term and whole life insurance to make informed decisions...",
      author: "Meera Patel",
      category: "Insurance",
      date: "2025-01-12",
      readTime: "4 min read",
      image: "https://via.placeholder.com/400x250/1e3a5f/ffffff?text=Life+Insurance",
      content: "Full blog content goes here..."
    },
    {
      id: 5,
      title: "Mutual Fund Performance Analysis 2024",
      excerpt: "A detailed review of top-performing mutual funds and what to expect in the coming year...",
      author: "Suresh Reddy",
      category: "Investment",
      date: "2025-01-10",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250/2c5aa0/ffffff?text=Mutual+Funds",
      content: "Full blog content goes here..."
    },
    {
      id: 6,
      title: "Emergency Fund: How Much is Enough?",
      excerpt: "Guidelines for building and maintaining an adequate emergency fund for financial security...",
      author: "Kavitha Nair",
      category: "Financial Planning",
      date: "2025-01-08",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250/D4AF37/1e3a5f?text=Emergency+Fund",
      content: "Full blog content goes here..."
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'delete'
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    content: '',
    image: '',
    readTime: ''
  });

  const categories = ['Investment', 'Tax Planning', 'Loans', 'Insurance', 'Financial Planning'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openModal = (type, blog = null) => {
    setModalType(type);
    setSelectedBlog(blog);
    
    if (type === 'add') {
      setFormData({
        title: '',
        excerpt: '',
        author: '',
        category: '',
        content: '',
        image: '',
        readTime: ''
      });
    } else if (type === 'edit' && blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        author: blog.author,
        category: blog.category,
        content: blog.content,
        image: blog.image,
        readTime: blog.readTime
      });
    }
    
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
    setFormData({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      content: '',
      image: '',
      readTime: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalType === 'add') {
      const newBlog = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      setBlogs(prev => [newBlog, ...prev]);
    } else if (modalType === 'edit') {
      setBlogs(prev => prev.map(blog => 
        blog.id === selectedBlog.id 
          ? { ...blog, ...formData }
          : blog
      ));
    }
    
    closeModal();
  };

  const handleDelete = () => {
    if (selectedBlog) {
      setBlogs(prev => prev.filter(blog => blog.id !== selectedBlog.id));
      closeModal();
    }
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blog-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">💰</div>
              <span className="logo-text">Veehul Finserve LLP</span>
            </div>
            
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/calculators" className="nav-link">CALCULATORS</Link>
              <Link to="/blog" className="nav-link active">BLOG</Link>
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

      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="hero-bg-animation">
          <div className="floating-elements">
            <div className="floating-icon">📝</div>
            <div className="floating-icon">💡</div>
            <div className="floating-icon">📊</div>
            <div className="floating-icon">🎯</div>
            <div className="floating-icon">📈</div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1>Financial <span className="highlight">Insights</span> & Tips</h1>
            <p>Stay informed with the latest trends, tips, and strategies in personal finance and investment planning.</p>
            
            <div className="blog-actions">
              <button 
                className="action-btn add-btn"
                onClick={() => openModal('add')}
              >
                <span className="btn-icon">➕</span>
                Add New Blog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Explore our collection of expert insights and financial guidance</p>
          </div>

          <div className="blog-grid">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-category">{blog.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                  </div>
                  
                  <h3 
                    className="blog-title"
                    onClick={() => handleBlogClick(blog.id)}
                  >
                    {blog.title}
                  </h3>
                  
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  
                  <div className="blog-footer">
                    <div className="blog-author">
                      <div className="author-avatar">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="author-name">{blog.author}</span>
                    </div>
                    
                    <div className="blog-actions-mini">
                      <button 
                        className="mini-btn edit-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal('edit', blog);
                        }}
                        title="Edit Blog"
                      >
                        ✏️
                      </button>
                      <button 
                        className="mini-btn delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal('delete', blog);
                        }}
                        title="Delete Blog"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="blog-overlay"
                  onClick={() => handleBlogClick(blog.id)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {modalType === 'add' && 'Add New Blog'}
                {modalType === 'edit' && 'Edit Blog'}
                {modalType === 'delete' && 'Delete Blog'}
              </h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            
            <div className="modal-body">
              {modalType === 'delete' ? (
                <div className="delete-confirmation">
                  <p>Are you sure you want to delete this blog?</p>
                  <h4>"{selectedBlog?.title}"</h4>
                  <div className="modal-actions">
                    <button className="btn btn-secondary" onClick={closeModal}>
                      Cancel
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter blog title"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Author</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                        placeholder="Author name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Read Time</label>
                      <input
                        type="text"
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleInputChange}
                        placeholder="e.g., 5 min read"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Image URL</label>
                      <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="Enter image URL"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Excerpt</label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Brief description of the blog"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Content</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows="8"
                      placeholder="Write your blog content here..."
                      required
                    />
                  </div>
                  
                  <div className="modal-actions">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {modalType === 'add' ? 'Create Blog' : 'Update Blog'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

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

export default Blog;