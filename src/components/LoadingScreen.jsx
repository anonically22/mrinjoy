import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'mrinjoy_loaded';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=logo, 1=text, 2=retract, 3=exit
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loaded = localStorage.getItem(STORAGE_KEY);
    if (loaded === 'true') {
      onComplete();
      return;
    }
    setShow(true);

    const timers = [
      setTimeout(() => setPhase(1), 400),   // show text
      setTimeout(() => setPhase(2), 1600),   // retract text
      setTimeout(() => setPhase(3), 2200),   // begin exit
      setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setShow(false);
        onComplete();
      }, 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {phase < 3 ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[150] flex items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
        >
          <div className="flex items-center gap-0 overflow-hidden">
            {/* MP Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="46" height="46" stroke="var(--text-main)" strokeWidth="1" fill="none" />
                <path d="M8 38V12L16 24L24 12V38" stroke="var(--text-main)" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
                <path d="M28 38V12H36C39.3137 12 42 14.6863 42 18V22C42 25.3137 39.3137 28 36 28H28" stroke="var(--text-main)" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              </svg>
            </motion.div>

            {/* Text reveal */}
            <motion.div
              className="overflow-hidden ml-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: phase >= 1 && phase < 2 ? 'auto' : 0,
                opacity: phase >= 1 && phase < 2 ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col leading-none whitespace-nowrap">
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: '20px',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-main)',
                  }}
                >
                  MRINJOY
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  PARTNERS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-32 h-px" style={{ background: 'var(--border-ui)' }}>
              <motion.div
                className="h-full"
                style={{ background: 'var(--accent)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
