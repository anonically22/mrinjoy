import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { SITE_URL, breadcrumbSchema } from '../seo/seoConfig';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const LocationServiceLayout = ({ 
  slug,
  serviceName,
  locationName,
  tagline,
  benefits,
  description,
}) => {
  const servicePath = `/${slug}`;
  
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
    { name: `${serviceName} in ${locationName}`, url: `${SITE_URL}${servicePath}` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}`,
    description: tagline,
    provider: {
      '@type': 'LegalService',
      name: 'MRINJOY Partners',
      url: SITE_URL,
    },
    areaServed: { '@type': 'City', name: locationName },
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
        title={`${serviceName} in ${locationName} | MRINJOY Partners`}
        description={tagline}
        path={servicePath}
        jsonLd={[breadcrumbs, serviceSchema]}
      />

      {/* Hero Section */}
      <Section className="min-h-[70vh] flex flex-col justify-center relative !pt-40 !pb-24 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] right-[10%] w-[600px] h-[600px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" />
             <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 label text-gold mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">
            <MapPin size={14} /> Local Expertise
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[56px] md:text-[80px] whitespace-pre-line"
          >
            {serviceName} in <span className="text-gold italic">{locationName}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-muted text-[18px] md:text-[22px] font-body leading-[1.8] max-w-[55ch]"
          >
            {tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
             <Link to="/contact" className="btn-primary">
                Book a Local Consultation
             </Link>
          </motion.div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="!py-32 bg-surface relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="lg:col-span-8 space-y-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em]">Overview</span>
              <p className="text-muted text-[16px] font-body leading-[1.8]">{description}</p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-16">
            <motion.div className="glass p-10 border border-gold/20 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500">
              <span className="label text-gold block mb-8 text-[11px] font-mono uppercase tracking-[0.15em] relative z-10">Key Benefits in {locationName}</span>
              <ul className="space-y-6 relative z-10">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-l-2 border-gold/40 group-hover:border-gold pl-6 py-1 transition-colors duration-300">
                    <span className="font-display text-[20px] text-parchment">{item}</span>
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

export default LocationServiceLayout;
