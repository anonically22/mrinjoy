import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const steps = [
  {
    title: 'Initial Consultation',
    desc: 'We begin with a deep dive into your business model, identifying existing intellectual assets and unprotected vulnerabilities.',
    timeline: '1–2 Days'
  },
  {
    title: 'IP Audit & Strategy',
    desc: 'Our team conducts comprehensive prior art, trademark, and novelty searches to assess viability and formulate a robust filing strategy.',
    timeline: '1–2 Weeks'
  },
  {
    title: 'Documentation & Filing',
    desc: 'We draft precise technical specifications, coordinate required NOCs, and submit error-free applications to the respective registries.',
    timeline: '1–3 Weeks'
  },
  {
    title: 'Examination & Response',
    desc: 'We monitor registry feedback, rapidly respond to examination reports, and represent you in hearings to overcome objections.',
    timeline: '6–18 Months'
  },
  {
    title: 'Registration & Protection',
    desc: 'Upon securing the grant or registration certificate, we help you leverage your new monopoly rights for business growth.',
    timeline: 'Varies by IP Type'
  },
  {
    title: 'Ongoing Monitoring',
    desc: 'We actively scan the market for potential infringers and manage your renewal schedules to ensure perpetual protection.',
    timeline: 'Continuous'
  }
];

const faqs = [
  { q: 'Will I be kept updated during the long waiting periods?', a: 'Yes. We maintain a proactive communication policy. You will receive automated status updates whenever there is a shift in your application status at the registry.' },
  { q: 'What happens if my application faces an objection?', a: 'Objections are common. Our attorneys are highly experienced in drafting strong legal replies and attending hearings to defend your claims and overcome registry rejections.' },
  { q: 'Do you offer expedited filing?', a: 'Yes. For certain categories like patents (specifically for startups or female applicants), the Indian Patent Office allows expedited examination which we can facilitate.' }
];

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

const Process = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(p => p === i ? null : i);

  // Vertical timeline scroll setup
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 70%", "end 30%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Our Process — MRINJOY Partners"
        description="Learn about our rigorous methodology for securing and enforcing your intellectual property rights."
        path="/process"
      />

      <Section className="min-h-[70vh] flex flex-col justify-center relative !pt-32 !pb-24 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.2" />
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">METHODOLOGY</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[64px] md:text-[80px]"
          >
            How We <span className="text-gold italic font-normal">Work.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-muted text-[18px] md:text-[20px] font-body leading-[1.8] max-w-[55ch]"
          >
            A transparent, rigorous, and highly systematic approach to intellectual property protection.
          </motion.p>
        </div>
      </Section>

      {/* ── Timeline ── */}
      <Section className="!py-32 bg-surface relative">
        <div ref={processRef} className="max-w-5xl mx-auto relative">
          
          {/* Central Vertical Line (Desktop & Mobile) */}
          <div className="absolute top-[40px] bottom-[40px] left-[40px] lg:left-1/2 lg:-translate-x-1/2 w-[1px] bg-border-ui">
            <motion.div className="w-full bg-gold origin-top" style={{ scaleY: lineHeight }} />
          </div>

          <div className="space-y-16 lg:space-y-32 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`lg:w-1/2 pl-24 lg:pl-0 ${i % 2 !== 0 ? 'lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                  <div className={`glass p-8 md:p-10 border border-gold/20 group hover:border-gold/50 transition-colors duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,_var(--accent),_transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
                    <span className="font-mono font-bold text-[64px] text-gold/20 leading-none block mb-6 group-hover:text-gold/40 transition-colors duration-500">0{i + 1}</span>
                    <h3 className="font-display font-bold text-[26px] text-parchment mb-4">{step.title}</h3>
                    <p className="text-muted text-[15px] font-body leading-relaxed mb-6">{step.desc}</p>
                    <div className="inline-flex border border-gold/30 px-4 py-2 bg-background">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">Timeline: {step.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[40px] lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface border-2 border-gold flex items-center justify-center shadow-[0_0_15px_rgba(200,169,110,0.15)] z-20">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ Block ── */}
      <Section className="!py-32 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">WHAT TO EXPECT</span>
            <h2 className="font-bold tracking-tight leading-[1.1] mb-6 font-display text-[48px]">
              Process FAQs
            </h2>
            <p className="text-muted text-[16px] font-body leading-relaxed max-w-[40ch]">
              Common questions about our timelines, examination reports, and registry communications.
            </p>
          </div>
          <div className="lg:col-span-7 border-t border-gold/40">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} isOpen={openFaq === i} onToggle={toggleFaq} />
            ))}
          </div>
        </div>
      </Section>

    </motion.main>
  );
};

export default Process;
