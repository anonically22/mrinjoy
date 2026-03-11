import { motion } from 'framer-motion';

const Navbar = () => {
  const links = ['About', 'Services', 'Insights', 'Clients', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[var(--bg-primary)] editorial-border-b px-6 md:px-12 py-6 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex flex-col text-xl font-black leading-none tracking-tighter uppercase">
        <span>MRINJOY</span>
        <span className="text-gray-400">PARTNERS</span>
      </div>

      {/* Links */}
      <div className="hidden lg:flex items-center gap-12 font-semibold text-sm tracking-wide uppercase">
        {links.map((link) => (
          <motion.a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="relative overflow-hidden group"
            whileHover="hover"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-[0.22,1,0.36,1]">
              {link}
            </span>
            <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 text-[var(--accent)] transition-transform duration-300 ease-[0.22,1,0.36,1]">
              {link}
            </span>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <button className="hidden md:block btn-primary px-6 py-3 text-xs">
        Book Consultation
      </button>

      {/* Mobile Menu Icon (Placeholder) */}
      <button className="lg:hidden text-2xl">
        ☰
      </button>
    </motion.nav>
  );
};

export default Navbar;
