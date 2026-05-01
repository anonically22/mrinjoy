/**
 * MP Monogram Logo — Geometric minimal logomark
 * Strict monochrome — no gold accent
 */
const MPLogo = ({ size = 40, className = '', variant = 'dark' }) => {
  const stroke = variant === 'light' ? '#FFFFFF' : '#111111';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mrinjoy Partners Logo"
    >
      <rect x="1" y="1" width="46" height="46" stroke={stroke} strokeWidth="1" fill="none" />
      <path d="M8 38V12L16 24L24 12V38" stroke={stroke} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      <path d="M28 38V12H36C39.3137 12 42 14.6863 42 18V22C42 25.3137 39.3137 28 36 28H28" stroke={stroke} strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
    </svg>
  );
};

/**
 * Full logo lockup: Monogram + Wordmark
 */
const LogoFull = ({ size = 36, className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#111111';
  const mutedColor = variant === 'light' ? 'rgba(255,255,255,0.45)' : '#6B7280';

  return (
    <a href="#" className={`flex items-center gap-2.5 select-none ${className}`}>
      <MPLogo size={size} variant={variant} />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: `${size * 0.38}px`,
            letterSpacing: '-0.02em',
            color: textColor,
          }}
        >
          MRINJOY
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: `${size * 0.21}px`,
            letterSpacing: '0.2em',
            color: mutedColor,
            marginTop: '1px',
          }}
        >
          PARTNERS
        </span>
      </div>
    </a>
  );
};

export { MPLogo, LogoFull };
export default LogoFull;
