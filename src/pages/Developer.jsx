import { motion } from 'framer-motion';
import { ArrowRight, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import ProtectedMailto from '../components/ProtectedMailto';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const Developer = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen relative font-body"
    >
      <SEOHead
        title="Designed & Developed by Anirbaan Sarkar (anonically22)"
        description="Site credits and developer profile for Anirbaan Sarkar. Computer Science graduate, AI researcher, and Full-Stack Developer."
        path="/developer"
      />

      {/* Hero Section */}
      <Section className="!pt-40 !pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">
            SITE CREDITS & DEVELOPER
          </span>
          
          <motion.div variants={stagger} initial="hidden" animate="show" className="mb-12">
            <motion.h2 
              variants={fadeUp}
              className="font-display text-[24px] md:text-[32px] text-muted mb-4"
            >
              Designed & Developed by
            </motion.h2>
            <motion.h1 
              variants={fadeUp}
              className="font-display font-bold text-[56px] md:text-[80px] leading-[1.1] mb-6 text-parchment"
            >
              Anirbaan Sarkar.
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="font-mono text-[13px] text-gold uppercase tracking-[0.15em] mb-10"
            >
              Computer Science • AI Research • Product Engineering
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="https://anirbaansarkar.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary !px-8 flex items-center">
              Formal Portfolio <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a href="https://anonical.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-outline !px-8 flex items-center bg-white/5 border-gold/30">
              Web Design Studio (anonically22) <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Main Profile Grid */}
      <Section className="!py-24 bg-surface border-y border-gold/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Bio & Skills */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">About</span>
              <div className="space-y-6 text-[16px] leading-[1.8] text-muted">
                <p>
                  I am a Computer Science graduate (B.Tech, Techno India University) with a strong foundation in Machine Learning, Algorithms, and Cloud Computing. I specialize in building "product-first minimalist" digital experiences, balancing deep engineering with thoughtful UI/UX design.
                </p>
                <p>
                  My professional background spans full-stack engineering, AI/ML research (including published work in cryptographic security), and direct experience as an IP Intern at the Office of the Controller General of Patents, Designs & Trade Marks (O/o CGPDTM). This unique intersection of technology and law allows me to build secure, scalable systems with intellectual property frameworks in mind.
                </p>
                <p>
                  I operate a creative digital identity, <strong className="text-parchment font-medium font-script text-xl align-middle mx-1">anonically22</strong>, for experimental web design, while pursuing formal software engineering and applied AI research under my own name.
                </p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Technical Skills</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <h4 className="font-semibold text-parchment mb-3 font-display">Languages</h4>
                  <p className="text-[14px] text-muted leading-relaxed">Python, Java, C++, JavaScript, SQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-parchment mb-3 font-display">Frameworks</h4>
                  <p className="text-[14px] text-muted leading-relaxed">React, Node.js, TensorFlow, Pandas, Framer Motion, Vite</p>
                </div>
                <div>
                  <h4 className="font-semibold text-parchment mb-3 font-display">Infrastructure</h4>
                  <p className="text-[14px] text-muted leading-relaxed">Git, AWS, PostgreSQL, Supabase, Vercel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-parchment mb-3 font-display">Domains</h4>
                  <p className="text-[14px] text-muted leading-relaxed">Machine Learning, Full-Stack Dev, Cryptography</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Connect */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Experience timeline */}
            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Experience</span>
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-gold/20">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></span>
                  <h4 className="font-bold text-parchment text-[16px] font-display">IP Intern</h4>
                  <p className="text-[14px] text-gold font-mono mb-2">O/o CGPDTM, Kolkata</p>
                  <p className="text-[14px] text-muted">Hands-on exposure to IPR law, patent classification, and trademark analysis. Produced academic research on IP filings.</p>
                </div>
                <div className="relative pl-6 border-l border-gold/20">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold/50"></span>
                  <h4 className="font-bold text-parchment text-[16px] font-display">AI/ML Research Intern</h4>
                  <p className="text-[14px] text-gold font-mono mb-2">Leonard Corporate Solutions</p>
                  <p className="text-[14px] text-muted">Developed and evaluated ML models end-to-end. Collaborated on applied AI research and data engineering.</p>
                </div>
              </div>
            </div>

            {/* Connect block */}
            <div className="glass p-8 border border-gold/20">
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Connect</span>
              <div className="flex flex-col gap-5">
                <ProtectedMailto email="anirbaandsarkar@gmail.com" className="flex items-center gap-4 group">
                  <Mail className="w-5 h-5 text-muted group-hover:text-gold transition-colors" />
                  <span className="text-[14px] text-muted group-hover:text-parchment transition-colors font-mono">
                    anirbaandsarkar@gmail.com
                  </span>
                </ProtectedMailto>
                <a href="https://github.com/anonically22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <Github className="w-5 h-5 text-muted group-hover:text-gold transition-colors" />
                  <span className="text-[14px] text-muted group-hover:text-parchment transition-colors font-mono">
                    github.com/anonically22
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </Section>

      <Section className="!py-16 bg-background">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gold/20 text-center"
        >
          <p className="font-mono text-[10px] text-muted/60 uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
            Website designed and developed by Anirbaan Sarkar (anonically22) for MRINJOY Partners. All branding, content, and intellectual property belong to MRINJOY Partners.
          </p>
        </motion.div>
      </Section>
    </motion.main>
  );
};

export default Developer;
