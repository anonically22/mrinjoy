import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DummyPage from './pages/DummyPage';
import DisclaimerGate from './components/DisclaimerGate';
import LoadingScreen from './components/LoadingScreen';

// Wrapper component to handle the loading/disclaimer logic for the main app
const AppContent = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  // Check initial state from localStorage to prevent flash
  useEffect(() => {
    if (localStorage.getItem('mrinjoy_disclaimer_accepted') === 'true') {
      setDisclaimerAccepted(true);
    }
    if (localStorage.getItem('mrinjoy_loaded') === 'true') {
      setLoadingComplete(true);
    }
  }, []);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<DummyPage title="Privacy Policy" />} />
          <Route path="/terms-of-service" element={<DummyPage title="Terms of Service" />} />
          <Route path="/disclaimer" element={<DummyPage title="Disclaimer" />} />
        </Routes>
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
