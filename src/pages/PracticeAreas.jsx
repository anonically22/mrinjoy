import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, FileText, Copyright, Pencil, Target, Lightbulb, ArrowRight 
} from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const services = [
  { 
    title: 'Trademark Registration', 
    slug: 'trademark', 
    icon: Shield, 
    desc: 'Register and protect your brand name, logo, and commercial identity. Prevent unauthorized infringement across all classes in India.' 
  },
  { 
    title: 'Patent Filing', 
    slug: 'patent', 
    icon: FileText, 
    desc: 'Secure exclusive legal rights for your inventions and technical innovations. Full support from prior art search to grant prosecution.' 
  },
  { 
    title: 'Copyright Registration', 
    slug: 'copyright', 
    icon: Copyright, 
    desc: 'Safeguard original creative works including software source code, digital assets, literary texts, music, and designs.' 
  },
  { 
    title: 'Design Protection', 
    slug: 'design', 
    icon: Pencil, 
    desc: 'Defend the unique visual appearance, shape, and aesthetic elements of your products with industrial design rights.' 
  },
  { 
    title: 'Brand Protection', 
    slug: 'brand', 
    icon: Target, 
    desc: 'Active digital and physical market monitoring, anti-counterfeiting strategies, and decisive cease and desist enforcement.' 
  },
  { 
    title: 'IP Consultation', 
    slug: 'ip-consultation', 
    icon: Lightbulb, 
    desc: 'Get business-first IP audits, portfolio structuring, growth strategy planning, and licensing advisory.' 
  },
];

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const PracticeAreas = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Practice Areas — Intellectual Property Law Firm"
        description="Explore our specialized intellectual property law practice areas: Trademark, Patent, Copyright, Design, Brand Protection, and IP Consultation across India."
        path="/practice-areas"
      />

      {/* Hero */}
      <Section className="min-h-[60vh] flex flex-col justify-center relative !pt-32 !pb-24 border-b border-gold/20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-10 -right-10 w-[500px] h-[500px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
        </div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl relative z-10 text-center mx-auto">
          <span className="label text-gold tracking-[0.15em] font-mono text-[11px] uppercase block mb-6">OUR PRACTICE</span>
          <h1 className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[64px] md:text-[80px]">
            Areas of <span className="text-gold italic font-normal">Expertise.</span>
          </h1>
          <p className="max-w-[65ch] text-muted text-[18px] md:text-[20px] font-body leading-[1.8] mx-auto">
            MRINJOY Partners offers expert counsel across all core sectors of IP law. We protect creative and industrial assets for startups, established corporations, and independent creators across India.
          </p>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-background relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i} variants={fadeUp}>
                <Link to={`/${svc.slug}`} className="group block h-full">
                  <div className="flex flex-col h-full liquid-glass p-10 md:p-12 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/40">
                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-colors duration-500"></div>
                    
                    <div className="w-[40px] h-[1px] bg-gold mb-8 group-hover:w-[60px] transition-all duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold text-[24px] text-parchment transition-colors duration-300 group-hover:text-gold">{svc.title}</h3>
                      <Icon size={24} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <p className="flex-1 mb-8 text-[15px] text-muted font-body leading-[1.8] group-hover:text-parchment/80 transition-colors duration-300">{svc.desc}</p>
                    <div className="flex items-center gap-2 text-[13px] font-body font-bold tracking-wider uppercase text-gold mt-auto group-hover:translate-x-2 transition-transform duration-500">
                      View Service <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </motion.main>
  );
};

export default PracticeAreas;
