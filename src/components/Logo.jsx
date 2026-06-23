import React from 'react';

const Monogram = ({ size = 48, className = "", inverted = false }) => {
  const mainColor = inverted ? '#FFFFFF' : 'currentColor';
  const accentColor = 'var(--color-gold)'; // Use CSS variable for gold

  return (
    <svg 
      width={size} 
      height={(size * 250) / 180} // maintain bounding box aspect ratio roughly
      viewBox="0 0 200 270" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(10, 10)">
        {/* Outer Shape */}
        <path d="M100 20 C45 20 20 60 20 105 L20 250 L180 250 L180 105 C180 60 155 20 100 20Z" stroke={mainColor} strokeWidth="8" fill="none"/>
        
        {/* Sun */}
        <circle cx="135" cy="80" r="16" fill={accentColor}/>

        {/* Bridge */}
        <line x1="100" y1="75" x2="100" y2="150" stroke={mainColor} strokeWidth="8" strokeLinecap="round"/>
        <line x1="100" y1="85" x2="35" y2="130" stroke={mainColor} strokeWidth="5"/>
        <line x1="100" y1="95" x2="35" y2="145" stroke={mainColor} strokeWidth="5"/>
        <line x1="100" y1="105" x2="35" y2="160" stroke={mainColor} strokeWidth="5"/>
        
        <line x1="100" y1="85" x2="165" y2="130" stroke={mainColor} strokeWidth="5"/>
        <line x1="100" y1="95" x2="165" y2="145" stroke={mainColor} strokeWidth="5"/>
        <line x1="100" y1="105" x2="165" y2="160" stroke={mainColor} strokeWidth="5"/>

        {/* Divider */}
        <line x1="20" y1="165" x2="180" y2="165" stroke={mainColor} strokeWidth="6"/>

        {/* Gateway Arch */}
        <path d="M75 250 L75 190 C75 165 90 150 100 150 C110 150 125 165 125 190 L125 250" stroke={mainColor} strokeWidth="8" fill="none"/>

        {/* Side Pillars */}
        <line x1="50" y1="250" x2="50" y2="200" stroke={mainColor} strokeWidth="12" strokeLinecap="round"/>
        <line x1="150" y1="250" x2="150" y2="200" stroke={mainColor} strokeWidth="12" strokeLinecap="round"/>

        {/* Inner Door */}
        <path d="M88 250 L88 210 C88 195 95 185 100 185 C105 185 112 195 112 210 L112 250" stroke={mainColor} strokeWidth="5" fill="none"/>
      </g>
    </svg>
  );
};

import { motion, AnimatePresence } from 'framer-motion';

const LogoText = ({ horizontal, inverted, hideText }) => (
  <AnimatePresence>
    {!hideText && (
      <motion.div 
        initial={{ opacity: 0, width: 0, marginLeft: 0 }}
        animate={{ opacity: 1, width: 'auto', marginLeft: horizontal ? 16 : 0 }}
        exit={{ opacity: 0, width: 0, marginLeft: 0, overflow: 'hidden' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`flex flex-col ${horizontal ? 'items-start justify-center' : 'items-center mt-3'} whitespace-nowrap`}
      >
        <span className={`font-display font-semibold text-[1.2em] tracking-widest leading-none ${inverted ? 'text-white' : 'text-main'}`}>
          MRINJOY
        </span>
        <span className={`font-mono text-[0.6em] tracking-[0.6em] uppercase leading-none mt-1.5 ${inverted ? 'text-gold' : 'text-accent'}`}>
          PARTNERS
        </span>
      </motion.div>
    )}
  </AnimatePresence>
);

export const Logo = ({ variant = 'primary', size = 48, className = "", inverted = false, hideText = false }) => {
  if (variant === 'icon') {
    return <Monogram size={size} className={className} inverted={inverted} />;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center ${className}`}>
        <Monogram size={size} className="" inverted={inverted} />
        {!hideText && <div className="w-px h-8 bg-gold/20 ml-4" />}
        <LogoText horizontal={true} inverted={inverted} hideText={hideText} />
      </div>
    );
  }

  // Primary (Stacked)
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Monogram size={size} className="" inverted={inverted} />
      <LogoText horizontal={false} inverted={inverted} hideText={hideText} />
    </div>
  );
};

// Fallback for older imports if any
export const MPLogo = ({ size, variant }) => <Logo variant="icon" size={size} />;
