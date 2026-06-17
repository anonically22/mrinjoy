import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { SITE_URL, breadcrumbSchema } from '../seo/seoConfig';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const PracticeAreaLayout = ({ 
  slug,
  eyebrow,
  headline,
  tagline,
  covers,
  matters,
  approach,
  personas 
}) => {
  const servicePath = `/${slug}`;
  
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Practice Areas', url: `${SITE_URL}/practice-areas` },
    { name: eyebrow, url: `${SITE_URL}${servicePath}` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: eyebrow,
    description: tagline,
    provider: {
      '@type': 'LegalService',
      name: 'MRINJOY Partners',
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}${servicePath}`,
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background min-h-screen text-parchment"
    >
      <SEOHead
        title={`${eyebrow} — MRINJOY Partners`}
        description={tagline}
        path={servicePath}
        jsonLd={[breadcrumbs, serviceSchema]}
      />

      {/* Hero Section */}
      <Section className="min-h-[70vh] flex flex-col justify-center relative !pt-40 !pb-24 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] right-[10%] w-[600px] h-[600px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 90,85 10,85" stroke="currentColor" strokeWidth="0.2" fill="none" />
            <circle cx="50" cy="60" r="20" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="mb-16 relative z-10">
          <Link to="/practice-areas" className="inline-flex items-center gap-2 label text-xs uppercase tracking-[0.2em] text-gold hover:text-parchment transition-colors font-mono">
            <ArrowLeft size={14} />
            Practice Areas
          </Link>
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">{eyebrow}</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[56px] md:text-[80px] whitespace-pre-line"
          >
            {headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-muted text-[18px] md:text-[22px] font-body leading-[1.8] max-w-[55ch]"
          >
            {tagline}
          </motion.p>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="!py-32 bg-surface relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          
          <div className="lg:col-span-8 space-y-32">
            {/* Why it matters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em]">Why It Matters</span>
              <blockquote className="font-display italic text-[36px] md:text-[44px] leading-[1.3] text-parchment border-l-2 border-gold pl-8 md:pl-12 relative">
                <span className="absolute -top-10 -left-6 text-gold/20 text-[100px] font-serif leading-none hidden md:block">"</span>
                {matters}
              </blockquote>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label text-gold block mb-12 text-[11px] font-mono uppercase tracking-[0.15em]">Our Approach</span>
              <div className="space-y-12">
                {approach.map((step, i) => (
                  <div key={i} className="flex items-start gap-8 md:gap-12 border-t border-gold/20 pt-10 group hover:border-gold/60 transition-colors duration-500">
                    <span className="font-mono font-bold text-[48px] text-gold/30 leading-none group-hover:text-gold transition-colors duration-500">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-[26px] text-parchment mb-4">{step.title}</h3>
                      <p className="text-muted text-[16px] font-body leading-[1.8] group-hover:text-parchment/80 transition-colors duration-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-16">
            {/* What it covers (Glass Sidebar) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-10 md:p-12 border border-gold/20 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-colors duration-500"></div>
              <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em] relative z-10">What It Covers</span>
              <ul className="space-y-6 relative z-10">
                {covers.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-l-2 border-gold/40 group-hover:border-gold pl-6 py-1 transition-colors duration-300">
                    <span className="font-display text-[20px] text-parchment">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who it's for */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">Who It's For</span>
              <ul className="space-y-4">
                {personas.map((persona, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-gold/40 group-hover:bg-gold rounded-full transition-colors duration-300" />
                    <span className="font-body text-[16px] text-muted group-hover:text-parchment transition-colors duration-300">{persona}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>
    </motion.main>
  );
};

export default PracticeAreaLayout;
