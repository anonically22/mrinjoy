import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Target, Zap, Award, Handshake, ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { SITE_URL, breadcrumbSchema } from '../seo/seoConfig';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const GMAIL_LINK = "https://mail.google.com/mail/?view=cm&fs=1&to=mrinjoypartners@gmail.com";

const values = [
  { icon: Target, title: 'Strategic', desc: 'Legal protection aligned with business growth and market positioning.' },
  { icon: Zap, title: 'Efficient', desc: 'Fast filing, registration, and compliance across jurisdictions.' },
  { icon: Award, title: 'Precise', desc: 'Deep domain expertise and meticulous legal precision.' },
  { icon: Handshake, title: 'Long-term', desc: 'Continuous support beyond registration and filing.' },
];

const About = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'About', url: `${SITE_URL}/about` },
  ]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <SEOHead
        title="About Us — Intellectual Property Law Firm"
        description="Learn about MRINJOY Partners — an Intellectual Property law practice dedicated to protecting innovation, creativity, and commercial identity across India."
        keywords="About MRINJOY Partners, IP Law Firm India, Intellectual Property Attorneys, Vadodara IP Lawyer"
        path="/about"
        jsonLd={[breadcrumbs]}
      />

      {/* Hero */}
      <Section className="!pt-32 !pb-24" borderBottom>
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 label group hover:text-[var(--accent)] transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="label-accent mb-5">About</motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-extrabold uppercase tracking-tighter leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(2.333rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)' }}
          >
            Built for Innovators.<br />
            <span style={{ color: 'var(--accent)' }}>Trusted by Businesses.</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="space-y-5 max-w-[65ch]" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
            <p>
              MRINJOY Partners is an intellectual property–focused legal practice dedicated to protecting innovation, creativity, and commercial identity across India. Established in 2022, we combine deep legal expertise with a client-first approach to deliver strategic Intellectual Property solutions.
            </p>
            <p>
              From <strong>Patent Filing</strong> and <strong>Trademark Registration</strong> to <strong>Copyright Registration</strong> and <strong>Design Protection</strong>, we provide end-to-end legal support for creators, startups, and enterprises seeking robust Brand Protection and IP Consultation services.
            </p>
            <p>
              Our team of experienced Intellectual Property Lawyers works closely with innovators across industries — technology, healthcare, fashion, manufacturing, and e-commerce — to build comprehensive IP strategies that protect and grow their most valuable assets.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Values */}
      <Section bg="var(--bg-surface)" borderBottom>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-16">
          <div className="label-accent mb-4">Our Values</div>
          <h2 className="font-extrabold uppercase tracking-tighter leading-none" style={{ fontSize: 'clamp(2.333rem, 5vw, 3.111rem)' }}>
            The MRINJOY <span style={{ color: 'var(--accent)' }}>Difference</span>
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px', background: 'var(--border-ui)', border: '1px solid var(--border-ui)' }}>
          {values.map((item, i) => {
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

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: 'var(--bg-cta)' }}>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group px-10 py-4">
                  Talk to an Expert <ArrowRight className="btn-arrow" size={15} />
                </a>
                <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline px-10 py-4 flex items-center gap-2" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Mail size={16} /> Mail Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
