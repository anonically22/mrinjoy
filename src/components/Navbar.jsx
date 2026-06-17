import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Practice Areas', 
    href: '/practice-areas',
    dropdown: [
      { label: 'Trademark Registration', href: '/trademark' },
      { label: 'Patent Filing', href: '/patent' },
      { label: 'Copyright Registration', href: '/copyright' },
      { label: 'Design Protection', href: '/design' },
      { label: 'Brand Protection', href: '/brand' },
      { label: 'IP Consultation', href: '/ip-consultation' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.3)' : '1px solid transparent',
        }}
      >
        <div className={`max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
          
          {/* Left: wordmark in Playfair Display italic, gold */}
          <Link 
            to="/" 
            className="flex items-center gap-3 select-none hover:opacity-90 transition-opacity"
          >
            <Logo variant="horizontal" size={28} />
          </Link>

          {/* Right: desktop links in Inter 12px uppercase tracking-widest */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isServices = !!link.dropdown;
              const isActive = location.pathname === link.href || 
                (isServices && location.pathname.startsWith('/practice-areas'));

              return (
                <div 
                  key={link.label} 
                  className="relative py-2"
                  onMouseEnter={() => isServices && setDesktopServicesOpen(true)}
                  onMouseLeave={() => isServices && setDesktopServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 font-body text-xs uppercase tracking-widest text-parchment hover:text-gold transition-colors duration-300 relative"
                  >
                    {link.label}
                    {isServices && (
                      <ChevronDown 
                        size={12} 
                        className={`transition-transform duration-300 text-gold/60 ${desktopServicesOpen ? 'rotate-180 text-gold' : ''}`} 
                      />
                    )}

                    {/* Active line */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-[-6px] left-0 right-0 h-[1.5px] bg-gold"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  {isServices && (
                    <AnimatePresence>
                      {desktopServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-surface border border-gold/20 shadow-2xl p-4 rounded-none"
                        >
                          <div className="flex flex-col gap-1.5">
                            {link.dropdown.map((subLink) => {
                              const isSubActive = location.pathname === subLink.href;
                              return (
                                <Link
                                  key={subLink.label}
                                  to={subLink.href}
                                  className={`px-3 py-2 text-xs font-mono tracking-wide transition-colors ${
                                    isSubActive ? 'text-gold bg-background/50 border-l border-gold' : 'text-muted hover:text-gold hover:bg-background/20'
                                  }`}
                                >
                                  {subLink.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 btn-primary !py-2.5 !px-5 !text-[11px] font-mono tracking-wider uppercase border border-gold/20 hover:border-gold hover:bg-gold hover:text-background transition-all"
          >
            Inquire Now <ArrowRight size={12} />
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            className="md:hidden p-2 text-parchment hover:text-gold transition-colors cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-[400px] h-full z-[100] bg-background border-l border-gold/20 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 h-20 flex items-center justify-between border-b border-gold/10">
              <Logo variant="horizontal" size={24} />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-parchment hover:text-gold transition-colors cursor-pointer"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isServices = !!link.dropdown;
                const isActive = location.pathname === link.href;

                return (
                  <div key={link.label} className="flex flex-col">
                    <div 
                      className="flex items-center justify-between py-2 border-b border-gold/5 cursor-pointer"
                      onClick={() => {
                        if (isServices) {
                          setMobileServicesOpen(!mobileServicesOpen);
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                    >
                      <Link
                        to={isServices ? '#' : link.href}
                        onClick={(e) => isServices && e.preventDefault()}
                        className={`text-xl font-display font-medium transition-colors ${
                          isActive || (isServices && location.pathname.startsWith('/practice-areas')) ? 'text-gold' : 'text-parchment hover:text-gold'
                        }`}
                      >
                        {link.label}
                      </Link>
                      {isServices && (
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-300 text-gold/60 ${mobileServicesOpen ? 'rotate-180 text-gold' : ''}`} 
                        />
                      )}
                    </div>

                    {isServices && mobileServicesOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-3 border-l border-gold/15">
                        {link.dropdown.map((subLink) => {
                          const isSubActive = location.pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.label}
                              to={subLink.href}
                              onClick={() => setMobileOpen(false)}
                              className={`text-sm py-1 font-mono transition-colors ${
                                isSubActive ? 'text-gold' : 'text-muted hover:text-gold'
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA in Drawer */}
            <div className="p-8 border-t border-gold/10">
              <Link
                to="/contact"
                className="btn-primary w-full py-4 justify-center text-xs tracking-widest font-mono uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Consultation <ArrowRight size={14} className="ml-2 inline" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
