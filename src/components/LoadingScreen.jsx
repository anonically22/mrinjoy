import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const STORAGE_KEY = 'mrinjoy_loaded';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=logo, 1=text, 2=retract, 3=exit
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timers = [
      setTimeout(() => setPhase(1), 400),   // show text
      setTimeout(() => setPhase(2), 1600),   // retract text
      setTimeout(() => setPhase(3), 2200),   // begin exit
      setTimeout(() => {
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
              <Logo variant="icon" size={52} className="text-main" />
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
                <span className="font-display font-semibold text-[20px] tracking-tight leading-none text-main">
                  MRINJOY
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted leading-none mt-1">
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
