import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, FileText, Shield, Copyright, Pencil, Gavel, Lightbulb,
  CheckCircle2, ChevronRight, Mail, ArrowLeft
} from 'lucide-react';
import Section from '../components/Section';

const serviceData = {
  'patent-filing': {
    title: 'Patent Filing',
    icon: FileText,
    heroTitle: 'Protect Innovation Before It\'s Copied',
    heroDesc: 'Secure exclusive legal rights over your inventions with strategic patent filing, prosecution, and long-term protection.',
    overview: 'A patent gives inventors exclusive legal rights to prevent unauthorized use, manufacturing, or sale of their inventions.',
    whoNeeds: [
      'Startup founders', 'Product innovators', 'Engineers', 
      'Technology companies', 'Researchers', 'Manufacturers'
    ],
    process: [
      'Patentability Assessment', 'Prior Art Search', 'Drafting', 'Filing', 'Prosecution'
    ],
    documents: [
      'Invention description', 'Technical drawings', 'Inventor details', 
      'Applicant details', 'Ownership proof'
    ],
    faqs: [
      { q: 'How long does patent registration take?', a: 'The timeline varies by jurisdiction, typically ranging from 2 to 4 years for final grant, though priority dates are secured upon filing.' },
      { q: 'Can software be patented?', a: 'Yes, if it meets the criteria of novelty, non-obviousness, and industrial application, often as a computer-implemented invention.' },
      { q: 'What makes an invention patentable?', a: 'It must be new (novelty), involve an inventive step (non-obvious), and be capable of industrial application.' }
    ],
    metaDesc: 'Secure exclusive legal rights over your inventions with Mrinjoy Partners. Strategic patent filing, prosecution, and protection.'
  },
  'trademark-registration': {
    title: 'Trademark Registration',
    icon: Shield,
    heroTitle: 'Protect the Identity Behind Your Brand',
    heroDesc: 'Register your brand name, logo, and identity to build stronger legal ownership.',
    overview: 'Trademark registration protects your brand identity and prevents unauthorized use.',
    whoNeeds: [
      'Startups', 'Small businesses', 'Founders', 'Agencies', 'E-commerce brands'
    ],
    process: [
      'Search', 'Classification', 'Filing', 'Examination', 'Registration'
    ],
    documents: [
      'Identity proof', 'Business proof', 'Logo', 'Address proof'
    ],
    faqs: [
      { q: 'How long does registration take?', a: 'Typically 12-18 months, but you can start using the ™ symbol immediately after filing.' },
      { q: 'Can I trademark my logo?', a: 'Yes, logos, brand names, and even unique shapes or colors can be trademarked.' },
      { q: 'What if someone copies my brand?', a: 'Registration gives you the legal standing to file for infringement and claim damages.' }
    ],
    metaDesc: 'Protect your brand identity and logos. Expert trademark registration and enforcement services by Mrinjoy Partners.'
  },
  'copyright-protection': {
    title: 'Copyright Protection',
    icon: Copyright,
    heroTitle: 'Protect Original Creative Work',
    heroDesc: 'Protect content, software, music, designs, and digital assets with legal copyright protection.',
    overview: 'Copyright protects original works from unauthorized reproduction or misuse.',
    whoNeeds: [
      'Content creators', 'Software developers', 'Designers', 'Writers', 'Artists', 'Media companies'
    ],
    process: [
      'Work Review', 'Documentation', 'Filing', 'Registration'
    ],
    faqs: [
      { q: 'Do I need copyright registration?', a: 'While copyright is automatic upon creation, registration is vital for legal enforcement and statutory damages.' },
      { q: 'Is software protected by copyright?', a: 'Yes, source code and literal elements of software are protected under copyright law as literary works.' }
    ],
    metaDesc: 'Protect your creative works, software, and digital assets. Professional copyright registration and advisory.'
  },
  'design-rights': {
    title: 'Design Rights',
    icon: Pencil,
    heroTitle: 'Protect the Way Your Product Looks',
    heroDesc: 'Secure exclusive legal rights over the visual and industrial appearance of your products.',
    overview: 'Design registration protects the visual identity, shape, and unique appearance of products.',
    whoNeeds: [
      'Product companies', 'Fashion brands', 'Industrial designers', 'Manufacturers'
    ],
    metaDesc: 'Secure exclusive rights for your product designs. Industrial design registration and protection strategies.'
  },
  'ip-litigation': {
    title: 'IP Litigation',
    icon: Gavel,
    heroTitle: 'Defend Your Rights When They\'re Challenged',
    heroDesc: 'Take legal action against infringement, unauthorized use, and intellectual property disputes.',
    overview: 'IP litigation helps enforce rights against misuse, counterfeiting, and infringement.',
    process: [
      'Case Assessment', 'Strategy Planning', 'Notice & Action', 'Resolution'
    ],
    metaDesc: 'Expert IP litigation and enforcement services. Defend your patents, trademarks, and copyrights against infringement.'
  },
  'ip-advisory': {
    title: 'IP Advisory',
    icon: Lightbulb,
    heroTitle: 'Strategic Legal Guidance for IP',
    heroDesc: 'Build stronger legal protection strategies with expert IP advisory.',
    overview: 'IP advisory helps businesses protect, structure, and grow their intellectual property strategically.',
    included: [
      'Portfolio strategy', 'Risk assessment', 'Licensing advice', 'IP audits', 'Protection planning'
    ],
    metaDesc: 'Strategic IP consultation and portfolio management. Align your intellectual property with business growth.'
  }
};

const GMAIL_LINK = "https://mail.google.com/mail/?view=cm&fs=1&to=mrinjoypartners@gmail.com";

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      document.title = `${data.title} | Mrinjoy Partners`;
      
      // Update Meta Description
      let meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', data.metaDesc);
      } else {
        meta = document.createElement('meta');
        meta.name = "description";
        meta.content = data.metaDesc;
        document.head.appendChild(meta);
      }

      // Update Canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', window.location.href);
      } else {
        canonical = document.createElement('link');
        canonical.rel = "canonical";
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }
    }
  }, [data, slug]);

  if (!data) return <div className="min-h-screen flex items-center justify-center">Service not found.</div>;

  const Icon = data.icon;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── HERO ── */}
      <Section className="!pt-32 !pb-24 border-bottom" borderBottom>
        <div className="mb-12">
          <Link to="/#services" className="inline-flex items-center gap-2 label group hover:text-[var(--accent)] transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div className="lg:col-span-8" variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="w-16 h-16 flex items-center justify-center mb-10" style={{ border: '1px solid var(--border-ui)', color: 'var(--accent)' }}>
              <Icon size={28} strokeWidth={1.5} />
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="font-extrabold uppercase tracking-tight leading-[1.1] mb-8" 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.444rem)', fontFamily: 'var(--font-heading)' }}
            >
              {data.heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "block" : ""}>{word} </span>
              ))}
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="max-w-[55ch] mb-12"
              style={{ fontSize: '1.111rem', lineHeight: '1.7', color: 'var(--text-muted)' }}
            >
              {data.heroDesc}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group px-8 py-4">
                Talk to an Expert <ArrowRight className="btn-arrow" size={14} />
              </a>
              <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline px-8 py-4 flex items-center gap-2">
                <Mail size={16} /> Mail Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* ── CONTENT ── */}
      <Section bg="var(--bg-surface)" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <div className="mb-20">
              <div className="label-accent mb-6">Overview</div>
              <p style={{ fontSize: '1.111rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                {data.overview}
              </p>
            </div>

            {data.process && (
              <div className="mb-20">
                <div className="label-accent mb-10">The Process</div>
                <div className="space-y-6">
                  {data.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 border border-ui bg-white/50">
                      <span className="font-mono font-bold text-[var(--accent)]">0{i+1}</span>
                      <span className="font-bold uppercase tracking-tight" style={{ fontSize: '1.1rem' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.faqs && (
              <div>
                <div className="label-accent mb-10">Common Questions</div>
                <div className="space-y-8">
                  {data.faqs.map((faq, i) => (
                    <div key={i}>
                      <h4 className="font-bold mb-3" style={{ fontSize: '1.111rem' }}>{faq.q}</h4>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:pl-12">
            <div className="sticky top-32 space-y-12">
              {data.whoNeeds && (
                <div className="p-10 border border-ui bg-white">
                  <div className="label-accent mb-8">Who Needs This</div>
                  <ul className="space-y-4">
                    {data.whoNeeds.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[var(--accent)]" />
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.documents && (
                <div className="p-10 border border-ui bg-white">
                  <div className="label-accent mb-8">Documents Required</div>
                  <ul className="space-y-4">
                    {data.documents.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.included && (
                <div className="p-10 border border-ui bg-white">
                  <div className="label-accent mb-8">Services Included</div>
                  <ul className="space-y-4">
                    {data.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ChevronRight size={16} className="text-[var(--accent)]" />
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-10 bg-[var(--bg-dark)] text-white">
                <h3 className="font-bold uppercase tracking-tight mb-4" style={{ fontSize: '1.2rem' }}>Ready to start?</h3>
                <p className="mb-8 text-sm opacity-70">Our experts are standing by to help you secure your intellectual property.</p>
                <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center py-4">
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </motion.main>
  );
};

export default ServiceDetail;
