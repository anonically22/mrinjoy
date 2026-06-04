import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DummyPage from './pages/DummyPage';
import ServiceDetail from './pages/ServiceDetail';
import DisclaimerGate from './components/DisclaimerGate';
import LoadingScreen from './components/LoadingScreen';

// Scroll-to-top on route change for SPA navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
        className="flex flex-col min-h-screen transition-opacity duration-1000"
        style={{ opacity: showContent ? 1 : 0, pointerEvents: showContent ? 'auto' : 'none' }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<DummyPage title="Privacy Policy" />} />
            <Route path="/terms-of-service" element={<DummyPage title="Terms of Service" />} />
            <Route path="/disclaimer" element={<DummyPage title="Disclaimer" />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
