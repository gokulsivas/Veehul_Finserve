import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Blog from './Blog';
import Calculators from './Calculators';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import About from './About';
import FAQ from './faq';
// import Login from './Login'; // Commented out for now
// Logo import - using require for better compatibility
const logo = require('./logo.png');

const gold = '#D4AF37';
const blueDark = '#1e3a5f';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="transparent" elevation={2} sx={{ bgcolor: blueDark }}>
        <Toolbar>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexGrow: 1 }}>
            <img 
              src={logo} 
              alt="Veehul Finserve LLP Logo" 
              style={{ 
                height: 40, 
                width: 'auto',
                marginRight: 12,
                display: 'block',
                objectFit: 'contain'
              }} 
              onError={(e) => {
                console.error('Logo failed to load');
                e.target.style.display = 'none';
              }}
            />
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, letterSpacing: 1 }}>
              Veehul Finserve LLP
            </Typography>
          </Box>
          <Button component={Link} to="/about" sx={{ color: gold }}>About</Button>
          <Button component={Link} to="/services" sx={{ color: gold }}>Services</Button>
          <Button component={Link} to="/calculators" sx={{ color: gold }}>Calculators</Button>
          <Button component={Link} to="/blog" sx={{ color: gold }}>Blog</Button>
          <Button component={Link} to="/faq" sx={{ color: gold }}>FAQ</Button>
          <Button component={Link} to="/contact" sx={{ color: gold }}>Contact</Button>
          {/* <Button component={Link} to="/login" sx={{ color: gold }}>Login</Button> */}
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: 1, bgcolor: 'background.default' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;