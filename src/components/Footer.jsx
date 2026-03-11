import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-surface)] pt-24 pb-8 px-6 md:px-12 lg:px-24 editorial-border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        
        {/* Left Column */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-col text-3xl font-black leading-none tracking-tighter uppercase mb-6">
              <span>MRINJOY</span>
              <span className="text-gray-400">PARTNERS</span>
            </div>
            <p className="text-xl md:text-2xl font-medium tracking-tight max-w-sm">
              Defending the ideas that build the future.
            </p>
          </div>
        </div>

        {/* Right Columns */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Services</h4>
          {['Patents', 'Trademarks', 'Copyright', 'Litigation'].map(link => (
            <motion.a 
              key={link} href="#" 
              className="font-semibold hover:text-[var(--accent)] transition-colors w-fit"
              whileHover={{ x: 5 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Law Firm</h4>
          {['About Us', 'The Team', 'Careers', 'Contact'].map(link => (
            <motion.a 
              key={link} href="#" 
              className="font-semibold hover:text-[var(--accent)] transition-colors w-fit"
              whileHover={{ x: 5 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto pt-8 editorial-border-t flex flex-col md:flex-row items-center justify-between text-xs font-semibold tracking-wider text-gray-500 uppercase">
        <span>© MRINJOY Partners. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[var(--text-main)] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[var(--text-main)] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
