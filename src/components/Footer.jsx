import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#F8F6F2] relative mt-0">
      
      {/* Standalone CTA Section */}
      <div className="relative overflow-hidden bg-[#0A0A0A] border-b border-[#333333]">
        {/* Diagonal lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(-45deg, #C9A96E 0, #C9A96E 1px, transparent 1px, transparent 12px)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_90%)] pointer-events-none"></div>

        <div className="max-w-[900px] mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
          <h2 className="font-display text-[40px] md:text-[64px] font-bold text-[#F8F6F2] leading-[1.1] mb-6">
            Protect Your IP Before Someone Else Claims It.
          </h2>
          <p className="text-[#A3A3A3] font-body text-[16px] md:text-[18px] mb-10 max-w-2xl leading-relaxed">
            Our team of Intellectual Property experts is ready to help you build a robust protection strategy.
          </p>
          <Link to="/contact" className="btn-primary !bg-gold !text-[#111111] hover:!bg-[#F8F6F2] hover:!text-[#111111] !border-none !py-4 !px-8 uppercase tracking-[0.15em] text-[13px] font-bold">
            FREE CONSULTATION <ArrowRight className="ml-2 btn-arrow" size={16} />
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Column 1: Firm Info + Tagline */}
          <div className="lg:col-span-5 space-y-8">
            <Link 
              to="/" 
              className="inline-block select-none hover:opacity-90 transition-opacity"
            >
              <Logo variant="horizontal" size={40} className="text-[#F8F6F2]" />
            </Link>
            <div>
              <h2 className="font-display text-[32px] font-bold text-[#F8F6F2] mb-4 leading-tight">
                Protecting Innovation<br/>Across India.
              </h2>
              <p className="text-[#A3A3A3] text-[15px] leading-relaxed max-w-[360px] font-body">
                MRINJOY Partners is an intellectual property law firm dedicated to securing and enforcing the assets that define your business.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="label text-gold tracking-widest text-xs font-semibold uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Process', href: '/process' },
                { label: 'FAQ', href: '/faq' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-[#E5E5E5] hover:text-gold transition-colors duration-300 w-fit flex items-center gap-2 group font-body"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-gold"></span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="label text-gold tracking-widest text-xs font-semibold uppercase">
              Contact Us
            </h4>
            <div className="flex flex-col gap-6 text-sm">
              <a href="tel:+918910640567" className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#111111] transition-all">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3] block mb-1 uppercase tracking-wider font-mono">Phone Inquiry</span>
                  <span className="text-[#F8F6F2] group-hover:text-gold transition-colors font-body text-[15px]">+91 89106 40567</span>
                </div>
              </a>

              <a href="mailto:mrinjoypartners@gmail.com" className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#111111] transition-all">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3] block mb-1 uppercase tracking-wider font-mono">Direct Email</span>
                  <span className="text-[#F8F6F2] group-hover:text-gold transition-colors font-body text-[15px]">mrinjoypartners@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-xs text-[#A3A3A3] block mb-1 uppercase tracking-wider font-mono">Location</span>
                  <span className="text-[#F8F6F2] font-body text-[15px]">India — Pan-India Advisory</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#333333] bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-[#A3A3A3] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} MRINJOY Partners. All rights reserved.
          </span>
          <span className="text-[11px] text-[#A3A3A3] font-mono tracking-widest uppercase">
            Designed & Developed by{' '}
            <Link 
              to="/developer" 
              className="text-[#F8F6F2] hover:text-gold border-b border-[#F8F6F2]/30 hover:border-gold transition-colors pb-1 ml-1"
            >
              Anirbaan Sarkar (anonically22)
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
