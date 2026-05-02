import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LogoFull } from './Logo';

const navLinks = [
  { label: 'Home', href: '/#' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="sticky top-0 z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(247, 247, 244, 0.95)' : 'rgba(247, 247, 244, 0.7)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
          borderBottom: scrolled ? '1px solid var(--border-ui)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.04)' : 'none',
        }}
      >
        <div
          className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between transition-all duration-500"
          style={{ height: scrolled ? '56px' : '68px' }}
        >
          <LogoFull size={scrolled ? 26 : 30} />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: 'var(--text-muted)',
                  transition: 'color 0.3s ease, opacity 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full"
                  style={{
                    background: 'var(--accent)',
                    transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="mailto:mrinjoypartners@gmail.com"
            className="hidden lg:flex items-center gap-2 group"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'white',
              background: 'var(--accent)',
              padding: '10px 22px',
              transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(31,79,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Started
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav-overlay flex flex-col"
          >
            <div className="px-6 h-16 flex items-center justify-between border-b-ui">
              <LogoFull size={26} />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl font-bold tracking-tight py-3 transition-colors hover:text-[var(--accent)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="px-8 pb-8">
              <a
                href="mailto:mrinjoypartners@gmail.com"
                className="btn-primary w-full py-4 justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
