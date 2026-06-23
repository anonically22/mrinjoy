import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="About Us — MRINJOY Partners"
        description="Learn about MRINJOY Partners, our mission, values, and why we are India's trusted Intellectual Property Law Firm."
        path="/about"
      />

      {/* ── Section 1: Hero ── */}
      <Section className="min-h-[85vh] flex flex-col justify-center relative !pt-32 !pb-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-20 -right-20 w-[800px] h-[800px] opacity-[0.02] text-parchment" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
          <motion.div className="lg:col-span-8" variants={stagger} initial="hidden" animate="show">
            <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">ABOUT MRINJOY PARTNERS</span>
            <motion.h1 
              variants={fadeUp}
              className="font-bold tracking-tight leading-[1.1] mb-10 font-display text-[64px] md:text-[80px]"
            >
              Who We <span className="text-gold italic font-normal">Are.</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-muted text-[18px] md:text-[20px] font-body leading-[1.8] max-w-[55ch]"
            >
              Founded in 2022, MRINJOY Partners was established with a singular focus: to provide aggressive, business-first intellectual property protection for India's rapidly growing ecosystem of startups, creators, and enterprises.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* ── Section 2: Mission (Asymmetrical Layout) ── */}
      <Section className="!py-32 bg-surface relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em]">OUR MISSION</span>
            <blockquote className="font-display italic text-[36px] md:text-[48px] leading-[1.1] text-parchment relative z-10">
              <span className="absolute -top-10 -left-8 text-gold/20 text-[120px] font-serif leading-none hidden md:block">"</span>
              To make world-class intellectual property protection accessible, strategic, and uncompromising.
            </blockquote>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="glass p-10 md:p-12 relative overflow-hidden group hover:border-gold/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>
              <div className="space-y-6 text-muted text-[16px] leading-[1.8] font-body relative z-10">
                <p>
                  The traditional legal landscape is often fragmented and opaque. Our mission is to bridge the gap between complex IP laws and practical business needs. We don't just file paperwork; we build impenetrable moats around your commercial assets.
                </p>
                <p>
                  From prosecuting intricate software patents to enforcing global trademark rights, we act as a formidable shield for your innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Section 3: Values ── */}
      <Section className="!py-32 bg-background relative overflow-hidden">
        <div className="mb-16 text-center md:text-left">
          <span className="label text-gold block mb-4 text-[11px] font-mono uppercase tracking-[0.15em]">CORE PRINCIPLES</span>
          <h2 className="font-bold tracking-tight leading-none font-display text-[48px] md:text-[56px]">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Integrity', desc: 'Total transparency in counsel, billing, and likelihood of success. We never advise filings that don\'t serve your commercial goals.' },
            { title: 'Expertise', desc: 'Deep, specialized knowledge of IP law. We focus exclusively on intellectual property so we can be absolute masters of our domain.' },
            { title: 'Innovation', desc: 'We utilize modern tech to streamline our processes, delivering faster turnarounds and more accurate prior art searches.' }
          ].map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col bg-surface border border-gold/20 p-12 rounded-none relative overflow-hidden group hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-colors duration-500"></div>
              <span className="font-mono font-bold text-[48px] text-gold/30 mb-8 block leading-none group-hover:text-gold transition-colors duration-500">0{i + 1}</span>
              <h3 className="font-display font-bold text-[26px] text-parchment mb-4">{v.title}</h3>
              <p className="text-muted text-[15px] font-body leading-[1.8] group-hover:text-parchment/80 transition-colors duration-500">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Section 4: Developer & IP Background ── */}
      <Section className="!py-32 bg-surface relative overflow-hidden border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em]">DEVELOPMENT & IP</span>
            <h2 className="font-bold tracking-tight leading-none font-display text-[42px] md:text-[48px] mb-8 text-parchment">
              Engineering meets <span className="text-gold italic">Legal Acumen.</span>
            </h2>
            <p className="text-muted text-[16px] font-body leading-[1.8] mb-8">
              At MRINJOY Partners, our digital presence is crafted by an engineer with firsthand experience inside the Indian Intellectual Property Office. This unique blend ensures our systems are as legally sound as they are technologically advanced.
            </p>
            <ul className="space-y-4 mb-10">
              {['Former IP Intern at O/o CGPDTM, Kolkata', 'Exposure to IPR Law & Trademark Analysis', 'Published Researcher on IPR Fundamentals', 'Full-Stack Dev & Machine Learning Engineer'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[15px] font-body text-parchment/90">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="glass p-12 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/15 transition-colors duration-500"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <span className="font-display text-[32px] text-parchment">Anirbaan Sarkar</span>
                <span className="font-mono text-gold text-[12px] uppercase tracking-widest mb-6">Developer & IP Researcher</span>
                <p className="text-muted text-[15px] leading-[1.8] font-body max-w-[50ch] mb-8 border-l-2 border-gold/40 pl-6">
                  "Building secure, product-first platforms with a deep understanding of the intellectual property frameworks that protect them."
                </p>
                <div className="flex items-center gap-6 mt-4">
                  <a href="/developer" className="btn-primary !px-6 !py-3">
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Section 5: Why Choose Us ── */}
      <Section className="!py-0 relative z-10 border-t border-gold/20 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gold/20">
          {[
            { title: 'Business-First Strategy', desc: 'We don\'t practice law in a vacuum. Every legal action is aligned with your runway, valuation, and exit goals.' },
            { title: 'Aggressive Enforcement', desc: 'We are known for our zero-tolerance approach to infringement and rapid cease & desist actions.' },
            { title: 'End-to-End Handling', desc: 'From the first novelty search to the final grant and subsequent renewals, we handle the entire lifecycle.' },
            { title: 'Transparent Communication', desc: 'No legal jargon. You receive clear, actionable updates on the status of your IP portfolio at all times.' }
          ].map((d, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`p-16 ${i > 1 ? 'lg:border-t border-gold/20' : ''} bg-transparent hover:bg-gold/5 transition-colors duration-500 group`}
            >
              <div className="w-[40px] h-[1px] bg-gold mb-8 group-hover:w-[60px] transition-all duration-500"></div>
              <h3 className="font-display text-[24px] text-parchment mb-4 group-hover:text-gold transition-colors duration-300">{d.title}</h3>
              <p className="text-muted text-[16px] font-body leading-[1.8] max-w-[45ch]">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

    </motion.main>
  );
};

export default About;
