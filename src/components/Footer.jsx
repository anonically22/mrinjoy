import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import ProtectedMailto from './ProtectedMailto';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F8F6F2] relative pt-20 overflow-hidden font-body flex flex-col">
      {/* Scroll to Top Button */}
      <div className="absolute top-8 right-6 md:right-16 z-20">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-gold hover:border-gold hover:bg-white/5 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10 flex flex-col justify-between flex-1">
        
        {/* Top: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block select-none hover:opacity-80 transition-opacity mb-4">
              <Logo variant="horizontal" size={28} inverted={true} />
            </Link>
            <p className="text-[#A3A3A3] text-[13px] leading-relaxed max-w-[240px]">
              Securing and enforcing intangible assets across India.
            </p>
          </div>

          {/* Product/Services */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Trademark', href: '/trademark' },
                { label: 'Patent', href: '/patent' },
                { label: 'Copyright', href: '/copyright' },
                { label: 'Design', href: '/design' },
                { label: 'IP Consultation', href: '/ip-consultation' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Process', href: '/process' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-service' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] text-muted uppercase tracking-[0.15em] font-semibold">Connect</h4>
            <ul className="space-y-3">
              <li>
                <ProtectedMailto email="anirbaan703@gmail.com" className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors" />
              </li>
              <li>
                <a href="tel:+918910640567" className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors">+91 89106 40567</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#E5E5E5] hover:text-gold transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-muted font-mono tracking-wider pt-8 pb-4 border-t border-white/5">
          <p>© {new Date().getFullYear()} MRINJOY Partners. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0 text-right sm:items-center">
            <Link to="/developer" className="hover:text-gold transition-colors">Dev Assistance</Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>
              Designed by <a href="https://anonical.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">anonically22</a>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>
              Developed by <a href="https://anirbaansarkar.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Anirbaan Sarkar</a>
            </span>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text with Hover Effect */}
      <div className="relative w-full flex justify-center overflow-hidden mt-2 leading-[0.75] select-none pb-0">
        <h1 className="footer-massive-text text-[18vw] md:text-[20vw] font-display font-bold tracking-tighter transition-all duration-1000 ease-out whitespace-nowrap pointer-events-auto">
          MRINJOY
        </h1>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .footer-massive-text {
          color: rgba(255,255,255,0.03);
          position: relative;
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .footer-massive-text:hover {
          background: linear-gradient(90deg, rgba(200,169,110,0.1) 0%, rgba(200,169,110,0.8) 50%, rgba(200,169,110,0.1) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine 3s linear infinite;
          transform: scale(1.02);
          text-shadow: 0 10px 40px rgba(200, 169, 110, 0.15);
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
