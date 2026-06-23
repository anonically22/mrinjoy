import { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, animate, useScroll, useTransform } from 'framer-motion';
import {
  Shield, FileText, Copyright, Pencil, Target, Lightbulb,
  ArrowRight, ChevronDown
} from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { generateFaqSchema, organizationSchema, localBusinessSchema } from '../seo/seoConfig';
import { SITE_URL, legalServiceSchema, breadcrumbSchema } from '../seo/seoConfig';

/* ─── Data ─── */
const services = [
  { title: 'Trademark Registration', slug: 'trademark', icon: Shield, desc: 'Register and defend your brand name, logo, and identity to build legal brand equity in India.' },
  { title: 'Patent Filing', slug: 'patent', icon: FileText, desc: 'Secure exclusive legal rights for your technology inventions and industrial processes.' },
  { title: 'Copyright Registration', slug: 'copyright', icon: Copyright, desc: 'Protect creative expressions — including software code, writing, and digital artwork.' },
  { title: 'Design Protection', slug: 'design', icon: Pencil, desc: 'Safeguard the unique visual appearance and industrial shape designs of your products.' },
  { title: 'Brand Protection', slug: 'brand', icon: Target, desc: 'Active infringement monitoring and rapid cease and desist enforcement across markets.' },
  { title: 'IP Consultation', slug: 'ip-consultation', icon: Lightbulb, desc: 'Receive expert advisory on IP audits, portfolio growth, and strategic licensing.' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your IP landscape, goals, and objectives.' },
  { num: '02', title: 'Evaluation', desc: 'Comprehensive review and formulating a strategy.' },
  { num: '03', title: 'Filing', desc: 'Documentation, submissions, and legal proceedings.' },
  { num: '04', title: 'Protection', desc: 'Ongoing monitoring, enforcement, and threat detection.' },
];

const faqs = [
  { q: 'How long does trademark registration take in India?', a: 'Typically 18–24 months from filing to registration, depending on objections and opposition.' },
  { q: 'What is the difference between a trademark and a copyright?', a: 'Trademarks protect brand identity (names, logos, slogans). Copyrights protect original creative works (art, writing, music, code). Both are forms of IP but cover different assets.' },
  { q: 'Do I need a lawyer to file a patent in India?', a: 'While self-filing is possible, a patent attorney significantly improves the quality and scope of claims, reducing chances of rejection.' },
  { q: 'Can I trademark a logo that\'s similar to an existing one?', a: 'No — a trademark search is conducted before filing to identify conflicts. We handle this as part of our trademark service.' },
  { q: 'What happens if someone infringes on my registered trademark?', a: 'You have legal grounds to send a cease & desist, file for injunction, and claim damages. MRINJOY handles enforcement cases.' },
];

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

/* ─── Ticker Marquee Component ─── */
const TickerMarquee = () => (
  <div className="w-full py-5 border-y border-gold/20 overflow-hidden bg-background relative z-10">
    <div className="marquee-track flex gap-8 whitespace-nowrap text-xs font-mono uppercase tracking-widest text-gold">
      {[...Array(4)].map((_, i) => (
        <span key={i}>
          TRADEMARK REGISTRATION · PATENT FILING · COPYRIGHT PROTECTION · DESIGN IP · BRAND PROTECTION · IP CONSULTATION ·{' '}
        </span>
      ))}
    </div>
  </div>
);

const AnimatedCounter = ({ value, label }) => {
  const nodeRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });
  const numMatch = value.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, targetNum, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, targetNum, suffix]);

  return (
    <div ref={inViewRef} className="relative text-left p-8 glass hover:shadow-[0_8px_30px_rgba(200,169,110,0.15)] transition-shadow duration-500 rounded-none border border-gold/20 group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,_var(--accent),_transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
      <span ref={nodeRef} className="block font-mono font-bold text-[48px] lg:text-[56px] leading-none text-parchment mb-4 group-hover:text-gold transition-colors duration-500 relative z-10">
        0{suffix}
      </span>
      <span className="label text-muted text-[13px] font-body uppercase tracking-wider block relative z-10">{label}</span>
    </div>
  );
};

/* ─── FAQ Item ─── */
const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div className="faq-item border-b border-gold/40 hover:border-gold transition-colors">
    <button className="w-full flex items-center justify-between gap-8 py-8 text-left group" onClick={() => onToggle(index)} aria-expanded={isOpen}>
      <span className={`font-display text-[20px] transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-parchment group-hover:text-gold'}`}>{faq.q}</span>
      <div className={`faq-icon ${isOpen ? 'bg-gold text-[#FFFFFF] border-gold rotate-45 rounded-full' : 'bg-transparent text-gold border-gold/40 rounded-none group-hover:border-gold'}`}>
        <ChevronDown size={18} strokeWidth={2} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <p className="pb-8 text-[15px] leading-relaxed text-muted font-body max-w-[65ch] pl-2">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);


const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = useCallback((i) => setOpenFaq(p => p === i ? null : i), []);

  const breadcrumbs = breadcrumbSchema([{ name: 'Home', url: SITE_URL }]);

  // Process timeline scroll setup
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 20%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="MRINJOY Partners | Intellectual Property Law Firm"
        description="MRINJOY Partners provides aggressive, business-first IP protection for startups and enterprises across India."
        path="/"
        jsonLd={[
          organizationSchema,
          localBusinessSchema,
          generateFaqSchema(faqs),
          legalServiceSchema,
          breadcrumbs
        ]}
      />

      {/* ── HERO ── */}
      <Section className="min-h-[100vh] flex flex-col justify-center relative !pt-32 !pb-24 overflow-hidden">
        {/* Abstract Architectural Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.15] mix-blend-multiply">
          <motion.svg 
            className="w-[800px] h-[800px] text-gold absolute top-[-100px] lg:top-[-200px]" 
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {/* Outer ring (Sun) */}
            <motion.circle 
              cx="200" cy="200" r="100" 
              stroke="currentColor" 
              strokeWidth="0.5"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 270 }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Inner pulsing sun */}
            <motion.circle 
              cx="200" cy="200" r="80" 
              stroke="currentColor" 
              strokeWidth="1"
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Gateway Arch */}
            <motion.path 
              d="M 120 400 L 120 280 C 120 230 160 190 200 190 C 240 190 280 230 280 280 L 280 400" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Architectural Pillars */}
            <motion.line x1="160" y1="200" x2="160" y2="400" stroke="currentColor" strokeWidth="0.5" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1, ease: "easeOut" }}
            />
            <motion.line x1="240" y1="200" x2="240" y2="400" stroke="currentColor" strokeWidth="0.5" 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1, ease: "easeOut" }}
            />

            {/* Diagonal Bridge Cables */}
            <motion.line x1="200" y1="190" x2="60" y2="350" stroke="currentColor" strokeWidth="0.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
            />
            <motion.line x1="200" y1="190" x2="340" y2="350" stroke="currentColor" strokeWidth="0.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
            />
            <motion.line x1="200" y1="190" x2="20" y2="400" stroke="currentColor" strokeWidth="0.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2, ease: "easeOut" }}
            />
            <motion.line x1="200" y1="190" x2="380" y2="400" stroke="currentColor" strokeWidth="0.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2, ease: "easeOut" }}
            />
          </motion.svg>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
          <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent"></div>
        </div>

        <div className="mb-10 relative z-10 flex flex-col items-center text-center">
          <span className="label text-gold tracking-[0.2em] text-[10px] uppercase font-mono font-semibold mb-6">INTELLECTUAL PROPERTY LAW FIRM · INDIA</span>
          
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl flex flex-col items-center">
            <h1 className="leading-[1.1] tracking-tighter font-display text-clamp-5xl mb-6 text-parchment">
              Protecting What <br/>
              <span className="font-script font-normal text-gold text-[1.2em] leading-tight block mt-2 px-4 italic-none">
                You Create.
              </span>
            </h1>
            
            <motion.p 
              className="text-muted text-[16px] md:text-[18px] font-body leading-relaxed mb-10 max-w-[60ch]"
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              Trademark · Patent · Copyright · Design — across India.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center w-full"
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              <Link to="/contact" className="btn-primary group !px-8 !py-4 text-[12px]">
                FREE CONSULTATION <ArrowRight className="ml-2 btn-arrow" size={16} />
              </Link>
              <a href="#services" className="btn-outline !px-8 !py-4 text-[12px]">
                EXPLORE SERVICES
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* 1px Gold hairline divider & Signature Element Marquee Ticker */}
      <TickerMarquee />

      {/* ── STATS ── */}
      <Section className="!py-0 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gold/20 -mt-[1px]">
          {[{ val: '100+', lbl: 'Clients Served' }, { val: '4+', lbl: 'Years of Excellence' }, { val: '500+', lbl: 'Cases Handled' }, { val: '6+', lbl: 'States Covered' }].map((s, i) => (
            <AnimatedCounter key={i} value={s.val} label={s.lbl} />
          ))}
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="services" className="bg-background relative">
        <div className="mb-16 flex flex-col items-start gap-4">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="label text-gold block mb-4 text-[11px] font-mono uppercase tracking-[0.15em]">OUR INTELLECTUAL PROPERTY SERVICES</span>
            <h2 className="font-semibold tracking-tight leading-none font-display text-clamp-3xl whitespace-pre-line">
              What We{"\n"}Protect
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  <div className="flex flex-col h-full liquid-glass p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/40">
                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-colors duration-500"></div>
                    
                    <div className="w-[40px] h-[1px] bg-gold mb-8 group-hover:w-[60px] transition-all duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-[22px] text-parchment transition-colors duration-300 group-hover:text-gold">{svc.title}</h3>
                      <Icon size={24} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <p className="flex-1 mb-8 text-[14px] text-muted font-body leading-relaxed group-hover:text-parchment/80 transition-colors duration-300">{svc.desc}</p>
                    <div className="flex items-center gap-2 text-[13px] font-body text-gold mt-auto group-hover:translate-x-2 transition-transform duration-500">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ── ABOUT STRIP SECTION ── */}
      <Section id="about" className="bg-background border-t border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">ABOUT MRINJOY PARTNERS</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
              className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[42px] lg:text-[56px] text-parchment relative"
            >
              <span className="absolute -left-6 top-0 text-gold/30 text-[80px] font-serif leading-none hidden md:block">"</span>
              Built for Innovators.{"\n"}Trusted by Businesses.
            </motion.h2>
            <div className="text-muted text-[16px] leading-[1.8] font-body max-w-[60ch]">
              <p>
                MRINJOY Partners is an Intellectual Property Law Firm providing Trademark Registration, Patent Filing, Copyright Registration, Design Protection, Brand Protection, and IP Consultation services for startups, businesses, creators, and enterprises across India.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                TALK TO AN EXPERT <ArrowRight className="ml-2 btn-arrow" size={16} />
              </Link>
            </div>
          </div>

          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="glass p-10 md:p-14 border border-gold/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
              <div className="flex flex-col gap-6 relative z-10">
                {['Patent Strategy', 'Trademark Protection', 'Copyright Enforcement', 'IP Litigation'].map((w, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <span className="w-8 h-[1px] bg-gold/50 group-hover:w-12 transition-all duration-500"></span>
                    <span className="font-display italic text-[22px] text-parchment group-hover:text-gold transition-colors duration-300">{w}</span>
                  </div>
                ))}
                <div className="mt-10 pt-10 border-t border-gold/20">
                  <span className="font-mono text-[11px] text-muted tracking-[0.2em] uppercase">
                    EST. 2022 — SERVING CLIENTS ACROSS INDIA.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── PROCESS SECTION ── */}
      <Section id="process" className="bg-surface border-y border-gold/10 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-24 text-center">
          <span className="label text-gold block mb-4 text-[11px] font-mono uppercase tracking-[0.15em]">OUR PROCESS</span>
          <h2 className="font-bold tracking-tight leading-none font-display text-clamp-3xl">
            How We Work
          </h2>
        </motion.div>
        
        <div ref={processRef} className="relative max-w-5xl mx-auto">
          {/* Desktop horizontal line */}
          <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-border-ui">
            <motion.div className="h-full bg-gold origin-left" style={{ scaleX: lineWidth }} />
          </div>
          
          {/* Mobile vertical line */}
          <div className="md:hidden absolute top-[24px] bottom-[10%] left-[24px] w-[1px] bg-border-ui">
            <motion.div className="w-full bg-gold origin-top" style={{ scaleY: lineHeight }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-row md:flex-col items-start gap-6 md:gap-0"
              >
                <div className="flex-shrink-0 w-12 h-12 md:mb-8 rounded-full bg-surface border-2 border-gold flex items-center justify-center font-mono text-[16px] text-gold font-bold z-10 shadow-[0_0_15px_rgba(200,169,110,0.15)]">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-display text-[20px] text-parchment mb-3">{s.title}</h3>
                  <p className="text-muted text-[14px] font-body leading-relaxed md:pr-4">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ SECTION ── */}
      <Section id="faq" className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">FAQ</span>
            <h2 className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[42px] lg:text-[56px] whitespace-pre-line text-parchment">
              Frequently{"\n"}<span className="text-gold italic">Asked</span>{"\n"}Questions
            </h2>
            <p className="text-muted text-[15px] font-body leading-relaxed max-w-[40ch]">
              Find answers to the most common questions about intellectual property protection in India.
            </p>
          </motion.div>
          <div className="lg:col-span-7">
            <div className="border-t border-gold/40">
              {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} isOpen={openFaq === i} onToggle={toggleFaq} />)}
            </div>
          </div>
        </div>
      </Section>
    </motion.main>
  );
};

export default Home;
