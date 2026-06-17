import React from 'react';

const Monogram = ({ size = 48, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 60 50" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {/* Geometric M */}
    <path d="M12,40 L12,10 L26,26 L40,10 L40,40" />
    {/* P Loop attaching to the right stem of the M */}
    <path d="M40,10 A13,13 0 0,1 40,36" />
  </svg>
);

const LogoText = ({ horizontal }) => (
  <div className={`flex ${horizontal ? 'flex-row items-center gap-3' : 'flex-col items-center mt-3'}`}>
    <span className="font-display font-semibold text-[1.2em] tracking-tight leading-none text-main">
      MRINJOY
    </span>
    {horizontal ? (
      <span className="text-accent opacity-50 mx-1">|</span>
    ) : null}
    <span className="font-body text-[0.45em] tracking-[0.35em] uppercase text-muted leading-none mt-1">
      PARTNERS
    </span>
  </div>
);

export const Logo = ({ variant = 'primary', size = 48, className = "" }) => {
  if (variant === 'icon') {
    return <Monogram size={size} className={`text-accent ${className}`} />;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <Monogram size={size} className="text-accent" />
        <div className="w-px h-8 bg-gold/20" />
        <LogoText horizontal={true} />
      </div>
    );
  }

  // Primary (Stacked)
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Monogram size={size} className="text-accent" />
      <LogoText horizontal={false} />
    </div>
  );
};

// Fallback for older imports if any
export const MPLogo = ({ size, variant }) => <Logo variant="icon" size={size} />;
