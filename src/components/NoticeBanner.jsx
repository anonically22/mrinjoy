import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

const NoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('siteBannerConsent');
    if (!consent) {
      // Small delay before showing to ensure smooth initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('siteBannerConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('siteBannerConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-[380px] z-50 liquid-glass p-6 shadow-2xl"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3 text-parchment">
              <Cookie className="text-gold" size={20} />
              <h3 className="font-display font-semibold text-[17px] tracking-tight">Site Notice</h3>
            </div>
            <button 
              onClick={handleDecline}
              className="text-[#737373] hover:text-white transition-colors p-1 -mr-2 -mt-2"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          
          <p className="text-[#A3A3A3] text-[13px] leading-relaxed mb-6 font-body">
            We use essential cookies to make our site work. We'd also like to set optional cookies to help us improve it. By clicking "Accept All", you agree to our use of cookies.
            <br />
            <Link to="/privacy-policy" className="text-gold hover:underline mt-2 inline-block">
              Learn more in our Privacy Policy
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 btn-primary !py-2.5 !px-4"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 btn-outline !py-2.5 !px-4"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoticeBanner;
