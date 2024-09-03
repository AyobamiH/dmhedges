import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/DmHedgesHeader/Header.jsx";
import Footer from "./components/DmHedgesFooter/Footer.jsx";
import HomePage from './components/DmHedgesHomePage/HomePage.jsx';
import DmHedgesAboutUsPage from './components/AboutUsPage/AboutUsPage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import FaQPage from './components/DmHedgesFaQ/FAQPage.jsx';
import ServicesPage from './components/DmHedgesServicesPage/ServicesPage.jsx';
import TestimonialsPage from './components/DmHedgesTestimonials/TestimonialsPage.jsx';
import Policy from './components/DmHedgesLegal/PrivacyPolicy.jsx';
import TermsOfService from './components/DmHedgesLegal/TermsOfService.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<DmHedgesAboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaQPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
