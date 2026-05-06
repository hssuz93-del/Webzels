/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import KnowledgeBase from './pages/KnowledgeBase';
import Affiliate from './pages/Affiliate';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import ServicesPage from './pages/ServicesPage';
import OrderPage from './pages/OrderPage';
import CompanyProfile from './pages/services/CompanyProfile';
import OnlineStore from './pages/services/OnlineStore';
import LandingPage from './pages/services/LandingPage';
import WebApplication from './pages/services/WebApplication';
import WebMaintenance from './pages/services/WebMaintenance';
import GlobalTech from './pages/portfolio/GlobalTech';
import FashionHub from './pages/portfolio/FashionHub';
import SaaSDashboard from './pages/portfolio/SaaSDashboard';
import HealthCare from './pages/portfolio/HealthCare';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fcfcff] selection:bg-primary selection:text-white overflow-x-hidden pt-0">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/services/company-profile" element={<CompanyProfile />} />
          <Route path="/services/online-store" element={<OnlineStore />} />
          <Route path="/services/landing-page" element={<LandingPage />} />
          <Route path="/services/web-application" element={<WebApplication />} />
          <Route path="/services/web-maintenance" element={<WebMaintenance />} />
          <Route path="/portfolio/global-tech" element={<GlobalTech />} />
          <Route path="/portfolio/fashion-hub" element={<FashionHub />} />
          <Route path="/portfolio/saas-dashboard" element={<SaaSDashboard />} />
          <Route path="/portfolio/healthcare-mobile" element={<HealthCare />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

