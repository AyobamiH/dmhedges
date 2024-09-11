import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/uizard/Header';
import Footer from './components/uizard/Footer';
import LandingPage from './components/uizard/LandingPage';
import ServicesPage from './components/uizard/ServicesPage';
import Contact from './components/uizard/Contact';
function App() {
  return (
    <Router>

      
      {/* Header should be shown on all pages */}
      <Header />
      
      <Routes>
        {/* Route for the Landing/Home page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the Services page */}
        <Route path="/services" element={<ServicesPage />} />

        {/* You can add more routes for other pages if needed */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      {/* Footer should be shown on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
