import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F8F6F2] relative mt-0 border-t border-white/5 font-body">
      
      {/* 1. Watermarked Banner Section */}
      <div className="relative overflow-hidden pt-16 pb-12 border-b border-white/5">
        {/* Massive Backdrop Watermark Text */}
        <div className="absolute left-6 md:left-12 -bottom-4 select-none pointer-events-none text-[120px] md:text-[220px] font-bold text-white/[0.01] tracking-tighter uppercase font-display leading-none">
          MRINJOY
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <span className="label text-gold block mb-4 text-[11px] font-mono uppercase tracking-[0.2em]">
            INTELLECTUAL PROPERTY FIRM
          </span>
          <h2 className="font-display text-[38px] md:text-[60px] font-bold text-[#F8F6F2] leading-[1.1] max-w-4xl">
            Protecting Innovation. <span className="text-gold italic font-normal">Securing Growth.</span>
          </h2>
        </div>
      </div>

      {/* 2. Main Footer Links Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block select-none hover:opacity-90 transition-opacity">
              <Logo variant="horizontal" size={36} className="text-[#F8F6F2]" />
            </Link>
            <p className="text-[#A3A3A3] text-[14px] leading-relaxed max-w-[240px]">
              Securing and enforcing the intangible assets that define your business across India.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-5">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-[0.15em] font-semibold">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Trademark Registration', href: '/trademark' },
                { label: 'Patent Filing', href: '/patent' },
                { label: 'Copyright Protection', href: '/copyright' },
                { label: 'Design Registration', href: '/design' },
                { label: 'Brand Protection', href: '/brand' },
                { label: 'IP Consultation', href: '/ip-consultation' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[14px] text-[#A3A3A3] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-5">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-[0.15em] font-semibold">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Process', href: '/process' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[14px] text-[#A3A3A3] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Resources */}
          <div className="space-y-5">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-[0.15em] font-semibold">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Use', href: '/terms-of-service' },
                { label: 'Legal Disclaimer', href: '/disclaimer' },
                { label: 'Knowledge Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[14px] text-[#A3A3A3] hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-5 col-span-2 md:col-span-1">
            <h4 className="font-mono text-[11px] text-gold uppercase tracking-[0.15em] font-semibold">
              Connect
            </h4>
            <div className="space-y-3 text-[14px] text-[#A3A3A3]">
              <p className="leading-relaxed">
                Vadodara, Gujarat, India
              </p>
              <p>
                <a href="mailto:anirbaan703@gmail.com" className="hover:text-gold transition-colors">
                  anirbaan703@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918910640567" className="hover:text-gold transition-colors">
                  +91 89106 40567
                </a>
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A3A3A3] hover:text-[#0A0A0A] hover:bg-gold hover:border-gold transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Strip */}
      <div className="border-t border-white/5 bg-[#070707] py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          
          {/* Left Side: Copyright + Legal Info Paragraph */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#E5E5E5] font-semibold">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <span className="text-white/10">|</span>
              <Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms of Use</Link>
              <span className="text-white/10">|</span>
              <Link to="/disclaimer" className="hover:text-gold transition-colors">Legal Disclaimer</Link>
            </div>
            <p className="text-[12px] text-[#737373] leading-relaxed">
              MRINJOY Partners is an Intellectual Property law firm. Legal advisory services described on this website are provided in accordance with applicable rules of the Bar Council of India and local regulations. The content on this website is for informational purposes only and does not constitute formal legal advice or create an attorney-client relationship. Under the rules of the Bar Council of India, we are prohibited from soliciting work or advertising.
            </p>
            <div className="text-[11px] text-[#525252] font-mono tracking-wider uppercase flex flex-col sm:flex-row gap-x-4 gap-y-1">
              <span>© {new Date().getFullYear()} MRINJOY Partners. All rights reserved.</span>
              <span className="hidden sm:inline text-white/5">|</span>
              <span>
                Designed & Developed by{' '}
                <Link to="/developer" className="text-[#A3A3A3] hover:text-gold transition-colors underline decoration-[#525252]">
                  Anirbaan Sarkar (anonically22)
                </Link>
              </span>
            </div>
          </div>



        </div>
      </div>

    </footer>
  );
};

export default Footer;
