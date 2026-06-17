import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MPLogo } from './Logo';

const STORAGE_KEY = 'mrinjoy_disclaimer_accepted';

const DisclaimerGate = ({ onAccept }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isAccepted = sessionStorage.getItem(STORAGE_KEY);
    if (!isAccepted) {
      setVisible(true);
    } else {
      onAccept();
    }
  }, [onAccept]);

  const handleAgree = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
    onAccept();
  };

  const handleDisagree = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(248, 246, 242, 0.96)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full max-w-[640px] mx-6 p-10 bg-surface shadow-2xl rounded-none border border-gold/20"
          >
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <MPLogo size={48} variant="gold" />
            </div>

            {/* Title */}
            <h2
              className="text-center font-extrabold uppercase tracking-tight mb-2"
              style={{ fontSize: '28px', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}
            >
              Disclaimer & Confirmation
            </h2>
            <div className="w-8 h-px mx-auto mb-8" style={{ background: '#C8A96E' }} />

            {/* Content */}
            <div
              className="text-center mb-6"
              style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-muted)' }}
            >
              <p className="mb-6">
                As per the rules of the Bar Council of India, we are not permitted to solicit work
                and advertise through website except as permitted under applicable rules.
              </p>
              <p className="mb-6" style={{ color: 'var(--text-main)' }}>
                By accessing this website, you acknowledge:
              </p>
            </div>

            <ul
              className="space-y-3 mb-10 max-w-[340px] mx-auto"
              style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-main)' }}
            >
              {[
                'You are seeking information voluntarily.',
                'There has been no solicitation.',
                'Information is for informational purposes only.',
                'No lawyer-client relationship is created.',
                'No liability arises from use of this site.',
                'Legal advice must be sought independently.',
                'You agree to the Privacy Policy.',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C8A96E' }} />
                  <span className="text-muted text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDisagree}
                className="px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 rounded-none cursor-pointer"
                style={{ border: '1px solid var(--border-ui)', color: 'var(--text-muted)', background: 'transparent' }}
                onMouseEnter={(e) => { e.target.style.borderColor = 'var(--text-main)'; e.target.style.color = 'var(--text-main)'; }}
                onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border-ui)'; e.target.style.color = 'var(--text-muted)'; }}
              >
                Disagree
              </button>
              <button
                onClick={handleAgree}
                className="px-10 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 rounded-none cursor-pointer"
                style={{ background: 'var(--accent)', color: '#FFFFFF', border: 'none' }}
                onMouseEnter={(e) => { e.target.style.background = 'var(--accent-hover)'; e.target.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerGate;
