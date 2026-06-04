import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { LogoFull } from './Logo';
import { Link } from 'react-router-dom';

const footerNav = ['Home', 'About', 'Services', 'Process', 'Contact'];
const footerServices = ['Patent Filing', 'Trademark', 'Copyright', 'Design Rights', 'Litigation', 'Advisory'];
const footerLegal = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Disclaimer', path: '/disclaimer' }
];

const FLink = ({ href, children, ...props }) => (
  <a
    href={href}
    className="transition-colors duration-300 w-fit group flex items-center gap-1"
    style={{ fontSize: '15px', lineHeight: '1.5', color: 'rgba(255,255,255,0.85)' }}
    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
    {...props}
  >
    {children}
    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </a>
);

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--footer-bg)' }}>
    {/* Main */}
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

        {/* Brand — large block */}
        <div className="lg:col-span-5">
          <LogoFull size={34} variant="light" className="mb-8" />
          <p className="max-w-[340px] mb-5" style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.85)' }}>
            Intellectual property law practice dedicated to
            protecting innovation, creativity, and commercial identity.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mrinjoypartners@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition-colors"
            >
              <Mail size={14} strokeWidth={1.5} className="text-[var(--accent)] group-hover:text-white transition-colors" />
              <span style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.85)' }} className="group-hover:text-[var(--accent)]">
                mrinjoypartners@gmail.com
              </span>
            </a>
            <a href="tel:+918910640567" className="flex items-center gap-3 group transition-colors">
              <Phone size={14} strokeWidth={1.5} className="text-[var(--accent)] group-hover:text-white transition-colors" />
              <span style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.85)' }} className="group-hover:text-[var(--accent)]">
                +91 89106 40567
              </span>
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.85)' }}>Serving clients across India</span>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.a
              href="https://www.linkedin.com/in/anirbaan-sarkar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-9 h-9 flex items-center justify-center transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
            >
              <Linkedin size={14} strokeWidth={1.5} />
            </motion.a>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-3">
          <h4 className="font-bold uppercase tracking-[0.14em] mb-7" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
            Navigation
          </h4>
          <div className="flex flex-col gap-3.5">
            {footerNav.map((item) => {
              const href = item === 'Home' ? '/#' : item === 'Contact' ? 'https://mail.google.com/mail/?view=cm&fs=1&to=mrinjoypartners@gmail.com' : `/#${item.toLowerCase()}`;
              const isExternal = item === 'Contact';
              return (
                <FLink 
                  key={item} 
                  href={href} 
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {item}
                </FLink>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-4">
          <h4 className="font-bold uppercase tracking-[0.14em] mb-7" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
            Services
          </h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
            {footerServices.map((item) => (
              <FLink key={item} href="/#services">{item}</FLink>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom strip */}
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} Mrinjoy Partners
          </span>
          <span className="hidden sm:inline" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.4)' }}>
            Crafted by anonically22
          </span>
        </div>
        <div className="flex gap-6">
          {footerLegal.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="transition-colors duration-300"
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anirbaan703@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            Report Issue
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
