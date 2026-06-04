import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, FileText, Shield, Copyright, Pencil, Gavel, Lightbulb,
  CheckCircle2, ChevronRight, Mail, ArrowLeft
} from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { SITE_URL, servicePageSEO, breadcrumbSchema } from '../seo/seoConfig';

const serviceData = {
  'patent-filing': {
    title: 'Patent Filing',
    icon: FileText,
    heroTitle: 'Patent Filing Services — Protect Innovation Before It\'s Copied',
    heroDesc: 'Secure exclusive legal rights over your inventions with strategic patent filing, prosecution, and long-term protection across India.',
    overview: 'A patent gives inventors exclusive legal rights to prevent unauthorized use, manufacturing, or sale of their inventions. MRINJOY Partners provides comprehensive Patent Filing services in India, guiding innovators from patentability assessment through prosecution and grant.',
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
  },
  'trademark-registration': {
    title: 'Trademark Registration',
    icon: Shield,
    heroTitle: 'Trademark Registration — Protect the Identity Behind Your Brand',
    heroDesc: 'Register your brand name, logo, and identity to build stronger legal ownership and Brand Protection across India.',
    overview: 'Trademark Registration protects your brand identity and prevents unauthorized use. MRINJOY Partners provides expert Trademark Registration services in India, helping businesses secure their logos, brand names, and commercial identity.',
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
      { q: 'How long does Trademark Registration take?', a: 'Typically 12-18 months, but you can start using the ™ symbol immediately after filing.' },
      { q: 'Can I trademark my logo?', a: 'Yes, logos, brand names, and even unique shapes or colors can be trademarked.' },
      { q: 'What if someone copies my brand?', a: 'Registration gives you the legal standing to file for infringement and claim damages.' }
    ],
  },
  'copyright-protection': {
    title: 'Copyright Protection',
    icon: Copyright,
    heroTitle: 'Copyright Registration — Protect Original Creative Work',
    heroDesc: 'Protect content, software, music, designs, and digital assets with professional Copyright Registration services in India.',
    overview: 'Copyright Registration protects original works from unauthorized reproduction or misuse. MRINJOY Partners provides comprehensive Copyright Registration services in India for software, content, music, and digital assets.',
    whoNeeds: [
      'Content creators', 'Software developers', 'Designers', 'Writers', 'Artists', 'Media companies'
    ],
    process: [
      'Work Review', 'Documentation', 'Filing', 'Registration'
    ],
    faqs: [
      { q: 'Do I need Copyright Registration?', a: 'While copyright is automatic upon creation, registration is vital for legal enforcement and statutory damages.' },
      { q: 'Is software protected by copyright?', a: 'Yes, source code and literal elements of software are protected under copyright law as literary works.' }
    ],
  },
  'design-rights': {
    title: 'Design Rights',
    icon: Pencil,
    heroTitle: 'Design Registration — Protect the Way Your Product Looks',
    heroDesc: 'Secure exclusive legal rights over the visual and industrial appearance of your products with Design Registration services in India.',
    overview: 'Design Registration protects the visual identity, shape, and unique appearance of products. MRINJOY Partners provides Design Registration services across India, helping businesses safeguard the aesthetic aspects of their products.',
    whoNeeds: [
      'Product companies', 'Fashion brands', 'Industrial designers', 'Manufacturers'
    ],
  },
  'ip-litigation': {
    title: 'IP Litigation',
    icon: Gavel,
    heroTitle: 'IP Litigation — Defend Your Rights When They\'re Challenged',
    heroDesc: 'Take legal action against infringement, unauthorized use, and intellectual property disputes with expert IP litigation services.',
    overview: 'IP litigation helps enforce rights against misuse, counterfeiting, and infringement. MRINJOY Partners provides strategic IP litigation and enforcement services across India.',
    process: [
      'Case Assessment', 'Strategy Planning', 'Notice & Action', 'Resolution'
    ],
  },
  'ip-advisory': {
    title: 'IP Advisory',
    icon: Lightbulb,
    heroTitle: 'IP Consultation — Strategic Legal Guidance for Intellectual Property',
    heroDesc: 'Build stronger legal protection strategies with expert IP Consultation and advisory services from MRINJOY Partners.',
    overview: 'IP Consultation helps businesses protect, structure, and grow their intellectual property strategically. MRINJOY Partners provides comprehensive IP advisory services including portfolio management, risk assessment, and licensing advice.',
    included: [
      'Portfolio strategy', 'Risk assessment', 'Licensing advice', 'IP audits', 'Protection planning'
    ],
  }
};

const GMAIL_LINK = "https://mail.google.com/mail/?view=cm&fs=1&to=mrinjoypartners@gmail.com";

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceData[slug];
  const seoData = servicePageSEO[slug];

  if (!data) return <div className="min-h-screen flex items-center justify-center">Service not found.</div>;

  const Icon = data.icon;
  const servicePath = `/services/${slug}`;

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/#services` },
    { name: data.title, url: `${SITE_URL}${servicePath}` },
  ]);

  // Per-service JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.overview,
    provider: {
      '@type': 'LegalService',
      name: 'MRINJOY Partners',
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}${servicePath}`,
  };

  // FAQ Schema for this service page
  const faqSchema = data.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  const jsonLdSchemas = [breadcrumbs, serviceSchema];
  if (faqSchema) jsonLdSchemas.push(faqSchema);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEOHead
        title={seoData?.title || data.title}
        description={seoData?.description || data.heroDesc}
        keywords={seoData?.keywords}
        path={servicePath}
        jsonLd={jsonLdSchemas}
      />

      {/* ── HERO ── */}
      <Section className="!pt-32 !pb-24 border-bottom" borderBottom>
        <div className="mb-12">
          <Link to="/#services" className="inline-flex items-center gap-2 label group hover:text-[var(--accent)] transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>

        {/* Breadcrumb nav (visible) */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-light)' }}>
            <li><Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link to="/#services" className="hover:text-[var(--accent)] transition-colors">Services</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{data.title}</span></li>
          </ol>
        </nav>

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
                      <h3 className="font-bold mb-3" style={{ fontSize: '1.111rem' }}>{faq.q}</h3>
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
