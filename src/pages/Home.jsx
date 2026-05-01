import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Shield, Copyright, Pencil, Gavel, Lightbulb,
  Target, Zap, Award, Handshake,
  ArrowRight, Plus, Quote, ChevronRight,
} from 'lucide-react';
import Section from '../components/Section';

/* ─── Data ─── */
const services = [
  { title: 'Patent Filing', icon: FileText, desc: 'Secure exclusive rights over your inventions through strategic patent filing and prosecution.' },
  { title: 'Trademark Registration', icon: Shield, desc: 'Protect your brand identity, logos, and market reputation with trademark solutions.' },
  { title: 'Copyright Protection', icon: Copyright, desc: 'Protect original creative works — software, content, music, and digital assets.' },
  { title: 'Design Rights', icon: Pencil, desc: 'Safeguard the visual identity and industrial appearance of your products.' },
  { title: 'IP Litigation', icon: Gavel, desc: 'Enforce your rights against infringement, counterfeiting, and unauthorized use.' },
  { title: 'IP Advisory', icon: Lightbulb, desc: 'Strategic IP consultation for startups, enterprises, and innovators.' },
];

const whyUs = [
  { icon: Target, title: 'Strategic', desc: 'Legal protection aligned with business growth and market positioning.' },
  { icon: Zap, title: 'Efficient', desc: 'Fast filing, registration, and compliance across jurisdictions.' },
  { icon: Award, title: 'Precise', desc: 'Deep domain expertise and meticulous legal precision.' },
  { icon: Handshake, title: 'Long-term', desc: 'Continuous support beyond registration and filing.' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your business, goals, and IP landscape.' },
  { num: '02', title: 'Evaluation', desc: 'Defining protection scope and building a strategy.' },
  { num: '03', title: 'Filing', desc: 'Documentation, submission, and legal processing.' },
  { num: '04', title: 'Protection', desc: 'Ongoing monitoring, enforcement, and renewals.' },
];

const industries = ['Startups', 'Technology', 'Healthcare', 'Fashion', 'Consumer Brands', 'Media', 'Manufacturing', 'E-Commerce'];

const faqs = [
  { q: 'How long does trademark registration take?', a: 'The trademark registration process typically takes 12–18 months, depending on jurisdiction and whether objections arise during examination.' },
  { q: 'What can be patented?', a: 'Any novel, non-obvious invention with industrial applicability — processes, machines, compositions, and certain software innovations.' },
  { q: 'Do I need copyright registration?', a: 'Copyright is automatic, but registration provides legal evidence of ownership and is required for court enforcement in most jurisdictions.' },
  { q: 'How do design rights work?', a: 'Design rights protect visual appearance — shape, pattern, or ornamentation — with exclusive rights for up to 15 years depending on jurisdiction.' },
  { q: 'What happens in infringement cases?', a: 'We investigate, issue cease-and-desist notices, negotiate settlements, and pursue litigation when necessary to protect your rights.' },
  { q: 'Can startups protect ideas early?', a: 'Yes. Provisional patents, trademark applications, and NDA frameworks are critical for early-stage IP protection and fundraising.' },
];

const testimonials = [
  { quote: "Mrinjoy Partners transformed how we think about intellectual property. Their strategic approach gave us a competitive edge we didn't know was possible.", name: 'Ananya Mehta', role: 'CTO, TechVenture Labs' },
  { quote: "The team's precision in trademark registration is unmatched. They protected our brand across 12 international markets seamlessly.", name: 'Rajiv Sharma', role: 'Founder, NovaBrand Co.' },
  { quote: "From consultation to enforcement, Mrinjoy Partners has been invaluable in safeguarding our creative assets and design innovations.", name: 'Priya Kapoor', role: 'Head of Design, Luxe Studios' },
];

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

/* ─── Counter Component ─── */
const AnimatedCounter = ({ value, label }) => (
  <motion.div variants={fadeUp} className="relative">
    <span className="block font-extrabold tracking-tighter" style={{ fontSize: '1.778rem', fontFamily: 'var(--font-heading)' }}>{value}</span>
    <span className="label mt-2 block">{label}</span>
  </motion.div>
);

/* ─── FAQ Item ─── */
const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <div className="faq-item border-b-ui" data-open={isOpen}>
    <button className="faq-trigger" onClick={() => onToggle(index)}>
      <div className="flex items-center gap-4">
        <span className="font-medium font-mono" style={{ fontSize: '0.667rem', color: 'var(--text-light)' }}>0{index + 1}</span>
        <span className="font-semibold tracking-tight" style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>{faq.q}</span>
      </div>
      <div className="faq-icon"><Plus size={13} strokeWidth={1.5} /></div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <p className="pb-8 pl-10" style={{ fontSize: '0.889rem', lineHeight: '1.7', color: 'var(--text-muted)', maxWidth: '65ch' }}>{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTesti, setActiveTesti] = useState(0);
  const toggleFaq = useCallback((i) => setOpenFaq(p => p === i ? null : i), []);

  useEffect(() => {
    const t = setInterval(() => setActiveTesti(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* ── HERO ── */}
      <Section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden !pt-16 !pb-24" borderBottom>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-14 relative z-10">
          <div className="label-accent">Intellectual Property Law</div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end relative z-10">
          <motion.div className="lg:col-span-7" variants={stagger} initial="hidden" animate="show">
            <h1 className="font-extrabold uppercase tracking-[-0.04em] leading-[0.9]" style={{ fontSize: 'clamp(3rem, 7.5vw, 5.333rem)' }}>
              <motion.span className="block" variants={fadeUp}>Protect</motion.span>
              <motion.span className="block" variants={fadeUp}>What You</motion.span>
              <motion.span className="block" variants={fadeUp} style={{ color: 'var(--accent)' }}>Build.</motion.span>
            </h1>
          </motion.div>

          <motion.div className="lg:col-span-5 flex flex-col gap-8" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', maxWidth: '65ch' }}>
              We help businesses, founders, and innovators secure their intellectual property through strategic legal protection — from patents and trademarks to copyrights and design rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary group">
                Book Consultation <ArrowRight className="btn-arrow" size={14} />
              </a>
              <a href="#services" className="btn-outline">Explore Services</a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mt-28 pt-10 border-t-ui grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[{ val: '500+', lbl: 'Patents Filed' }, { val: '2,000+', lbl: 'Trademarks Registered' }, { val: '98%', lbl: 'Success Rate' }, { val: '15+', lbl: 'Years Experience' }].map((s, i) => (
            <AnimatedCounter key={i} value={s.val} label={s.lbl} />
          ))}
        </motion.div>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="services" borderBottom bg="var(--bg-surface)">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="label-accent mb-4">Services</div>
            <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.333rem, 5vw, 3.111rem)' }}>
              What We<br /><span style={{ color: 'var(--accent)' }}>Protect</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ fontSize: '0.889rem', lineHeight: '1.7', color: 'var(--text-muted)', maxWidth: '24rem' }}>
            Comprehensive IP solutions built to protect every dimension of your innovation.
          </motion.p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px', background: 'var(--border-ui)', border: '1px solid var(--border-ui)' }}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i} variants={fadeUp}
                className="flex flex-col justify-between min-h-[300px] group cursor-pointer transition-all duration-400"
                style={{ padding: '1.778rem', backgroundColor: 'var(--bg-surface)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-dark)'; e.currentTarget.style.color = 'var(--text-inverse)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-surface)'; e.currentTarget.style.color = 'var(--text-main)'; }}>
                <div className="mb-10">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-400"
                    style={{ border: '1px solid var(--border-ui)', color: 'var(--accent)' }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-medium font-mono" style={{ fontSize: '0.667rem', color: 'var(--text-light)' }}>0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold tracking-tight mb-3" style={{ fontSize: '1.222rem', fontFamily: 'var(--font-heading)' }}>{svc.title}</h3>
                  <p style={{ fontSize: '0.833rem', lineHeight: '1.65', color: 'var(--text-muted)' }}>{svc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ── ABOUT ── */}
      <Section id="about" borderBottom bg="var(--bg-alternate)">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <div className="label-accent mb-5">About</div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-extrabold uppercase tracking-tighter leading-[0.95] mb-10" style={{ fontSize: 'clamp(1.889rem, 4.5vw, 2.778rem)' }}>
              Built for Innovators.<br />
              <span style={{ color: 'var(--accent)' }}>Trusted by Businesses.</span>
            </motion.h2>
            <div className="space-y-5" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', maxWidth: '65ch' }}>
              <p>Mrinjoy Partners is an intellectual property–focused legal practice dedicated to protecting innovation, creativity, and commercial identity.</p>
              <p>From patents and trademarks to copyrights and industrial designs, we provide end-to-end legal support for creators, startups, and enterprises.</p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <a href="#contact" className="btn-outline">Learn More <ChevronRight size={14} /></a>
              <div className="accent-line" />
            </div>
          </div>

          <motion.div className="lg:col-span-5" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
            <div className="flex flex-col gap-0" style={{ padding: '1.778rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-ui)' }}>
              <div className="label mb-6">Est. 2023 · Kolkata</div>
              {['Patent Strategy', 'Trademark Protection', 'Copyright Enforcement', 'IP Litigation'].map((w, i) => (
                <div key={i} className="flex items-center gap-4 border-b-ui" style={{ padding: '0.889rem 0' }}>
                  <span className="font-mono font-medium" style={{ fontSize: '0.667rem', color: 'var(--text-light)' }}>0{i + 1}</span>
                  <span className="font-bold uppercase tracking-tight" style={{ fontSize: '1.111rem', fontFamily: 'var(--font-heading)' }}>{w}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-6">
                <div className="w-1.5 h-1.5" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="label">Mrinjoy Partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── WHY US ── */}
      <Section id="why-us" borderBottom bg="var(--bg-surface)">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
          <div className="label-accent mb-4">Why Choose Us</div>
          <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.333rem, 5vw, 3.111rem)' }}>
            The Mrinjoy <span style={{ color: 'var(--accent)' }}>Difference</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px', background: 'var(--border-ui)', border: '1px solid var(--border-ui)' }}>
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="card-lift" style={{ padding: '1.778rem', backgroundColor: 'var(--bg-surface)' }}>
                <div className="w-12 h-12 flex items-center justify-center mb-8"
                  style={{ border: '1px solid var(--border-ui)', color: 'var(--accent)' }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold tracking-tight mb-3" style={{ fontSize: '1.222rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.833rem', lineHeight: '1.65', color: 'var(--text-muted)' }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ── PROCESS ── */}
      <Section id="process" borderBottom bg="var(--bg-alternate)">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
          <div className="label-accent mb-4">Our Process</div>
          <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.333rem, 5vw, 3.111rem)' }}>
            How We <span style={{ color: 'var(--accent)' }}>Work</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="relative card-lift"
              style={{ padding: '1.778rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-ui)' }}>
              <span className="font-extrabold block leading-none mb-8"
                style={{ fontSize: '2.667rem', color: 'var(--border-light)', fontFamily: 'var(--font-heading)' }}>{s.num}</span>
              <div className="accent-line mb-5" />
              <h3 className="font-bold tracking-tight mb-3" style={{ fontSize: '1.222rem', fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
              <p style={{ fontSize: '0.833rem', lineHeight: '1.65', color: 'var(--text-muted)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── INDUSTRIES ── */}
      <Section id="industries" borderBottom bg="var(--bg-surface)">
        <div className="mb-14">
          <div className="label-accent mb-4">Industries</div>
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.667rem)' }}>
              Industries We <span style={{ color: 'var(--accent)' }}>Serve</span>
            </h2>
          </motion.div>
        </div>
        
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((ind, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center cursor-default transition-all duration-400"
              style={{ padding: '1.333rem', backgroundColor: 'var(--bg-alternate)', border: '1px solid var(--border-ui)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-dark)'; e.currentTarget.style.color = 'var(--text-inverse)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-alternate)'; e.currentTarget.style.color = 'var(--text-main)'; }}>
              <span className="font-medium font-mono block mb-2" style={{ fontSize: '0.611rem', color: 'var(--text-light)' }}>0{i + 1}</span>
              <span className="font-semibold tracking-tight" style={{ fontSize: '0.833rem' }}>{ind}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq" borderBottom bg="var(--bg-alternate)">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <motion.div className="lg:col-span-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="label-accent mb-5">FAQ</div>
            <h2 className="font-extrabold uppercase tracking-tighter leading-[0.95] mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.667rem)' }}>
              Frequently<br />Asked<br /><span style={{ color: 'var(--accent)' }}>Questions</span>
            </h2>
          </motion.div>
          <div className="lg:col-span-8 border-t-ui">
            {faqs.map((f, i) => <FAQItem key={i} faq={f} index={i} isOpen={openFaq === i} onToggle={toggleFaq} />)}
          </div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section id="testimonials" className="pb-0 lg:pb-0" borderBottom bg="var(--bg-surface)">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-14">
          <div className="label-accent mb-4">Testimonials</div>
          <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.111rem)' }}>
            Trusted by<br />Founders <span style={{ color: 'var(--accent)' }}>&amp; Innovators</span>
          </h2>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTesti}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            style={{ padding: '2rem 2.222rem', backgroundColor: 'var(--bg-alternate)', border: '1px solid var(--border-ui)' }}>
            <Quote size={32} strokeWidth={1} style={{ color: 'var(--accent)', opacity: 0.25 }} className="mb-8" />
            <blockquote className="font-semibold tracking-tight leading-snug mb-12 max-w-3xl" style={{ fontSize: 'clamp(1.111rem, 2.5vw, 1.556rem)', fontFamily: 'var(--font-heading)' }}>
              "{testimonials[activeTesti].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-white font-bold" style={{ fontSize: '0.778rem', background: 'var(--accent)' }}>
                {testimonials[activeTesti].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold" style={{ fontSize: '0.889rem' }}>{testimonials[activeTesti].name}</div>
                <div className="font-medium" style={{ fontSize: '0.778rem', color: 'var(--text-muted)' }}>{testimonials[activeTesti].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-2 mt-8 pb-10">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTesti(i)} className={`testimonial-dot ${i === activeTesti ? 'active' : ''}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section id="contact" className="relative overflow-hidden" style={{ background: 'var(--bg-cta)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 relative z-10" style={{ color: 'var(--text-inverse)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex flex-col items-start text-left">
              <div className="accent-line mb-8" />
              <h2 className="font-extrabold uppercase tracking-tighter leading-[0.92] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.333rem)', fontFamily: 'var(--font-heading)' }}>
                Protect Your IP<br />Before Someone<br />Else Claims It.
              </h2>
              <p className="font-medium mb-12 max-w-md leading-relaxed" style={{ fontSize: '0.889rem', color: 'rgba(255,255,255,0.55)' }}>
                Our team of IP experts is ready to help you build a robust protection strategy.
              </p>
              <a href="#contact" className="btn-primary group px-10 py-4">
                Talk to an Expert <ArrowRight className="btn-arrow" size={15} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
        </div>
      </section>

    </main>
  );
};

export default Home;
