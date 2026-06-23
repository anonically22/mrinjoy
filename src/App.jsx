import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisclaimerGate from './components/DisclaimerGate';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages for Code Splitting (Core Web Vitals Optimization)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const LegalPrivacy = lazy(() => import('./pages/LegalPrivacy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const PracticeAreas = lazy(() => import('./pages/PracticeAreas'));
const Trademark = lazy(() => import('./pages/Trademark'));
const Patent = lazy(() => import('./pages/Patent'));
const Copyright = lazy(() => import('./pages/Copyright'));
const Design = lazy(() => import('./pages/Design'));
const Brand = lazy(() => import('./pages/Brand'));
const IPConsultation = lazy(() => import('./pages/IPConsultation'));
const Process = lazy(() => import('./pages/Process'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Developer = lazy(() => import('./pages/Developer'));

// Geo-Targeted Location Pages
const TrademarkKolkata = lazy(() => import('./pages/TrademarkKolkata'));

// Blog System
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Scroll-to-top on route change for SPA navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
};

// Wrapper component to handle the loading/disclaimer logic for the main app
const AppContent = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();



  const handleDisclaimerAccept = () => {
    setDisclaimerAccepted(true);
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  // Only show the gate/loader on the home page if not accepted
  const isHomePage = location.pathname === '/';
  
  // If we are on a dummy page, just show it
  // If we are on home, we enforce gate -> loader
  const showContent = (!isHomePage) || (disclaimerAccepted && loadingComplete);

  return (
    <>
      <ScrollToTop />
      {isHomePage && <DisclaimerGate onAccept={handleDisclaimerAccept} />}
      
      {isHomePage && disclaimerAccepted && !loadingComplete && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Render app content immediately if previously loaded or not on home page */}
      <div 
        className="flex flex-col min-h-screen relative transition-opacity duration-1000"
        style={{ opacity: showContent ? 1 : 0, pointerEvents: showContent ? 'auto' : 'none' }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div></div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/trademark" element={<Trademark />} />
              <Route path="/patent" element={<Patent />} />
              <Route path="/copyright" element={<Copyright />} />
              <Route path="/design" element={<Design />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/ip-consultation" element={<IPConsultation />} />
              <Route path="/about" element={<About />} />
              <Route path="/process" element={<Process />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/developer" element={<Developer />} />
              
              {/* Location Routes */}
              <Route path="/trademark-registration-kolkata" element={<TrademarkKolkata />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              <Route path="/privacy-policy" element={<LegalPrivacy />} />
              <Route path="/terms-of-service" element={<TermsOfUse />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;
