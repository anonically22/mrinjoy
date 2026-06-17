import { motion } from 'framer-motion';
import { ArrowRight, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const Developer = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen relative"
    >
      <SEOHead
        title="Designed & Developed by Anirbaan Sarkar (anonically22)"
        description="Site credits and developer portfolio for Anirbaan Sarkar. Full-Stack Developer, UI/UX Designer, and Product Builder operating as anonically22."
        path="/developer"
      />

      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      ></div>

      <Section className="!pt-40 !pb-24 relative z-10 flex flex-col">
        <div className="max-w-4xl">
          <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">
            SITE CREDITS & DEVELOPER
          </span>
          
          <motion.div variants={stagger} initial="hidden" animate="show" className="mb-16">
            <motion.h2 
              variants={fadeUp}
              className="font-display text-[32px] md:text-[40px] text-muted mb-2"
            >
              Designed & Developed by
            </motion.h2>
            <motion.h1 
              variants={fadeUp}
              className="font-display font-bold text-[56px] md:text-[80px] leading-[1.1] mb-6 text-parchment"
            >
              Anirbaan <span className="text-gold italic font-normal">Sarkar.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="font-mono text-[13px] text-gold uppercase tracking-[0.15em] mb-12"
            >
              Full-Stack Developer • UI/UX Designer • Product Builder
            </motion.p>
            
            <motion.div variants={fadeUp} className="space-y-6 text-[18px] md:text-[20px] font-body leading-[1.8] text-muted max-w-[55ch]">
              <p>
                I design and develop modern digital experiences with a focus on clean interfaces, scalable systems, and user-centered products. My work spans web applications, design systems, research-driven products, and business-focused digital solutions.
              </p>
              <p>
                Operating under <span className="text-parchment font-medium">anonically22</span> (Creative Studio & Digital Identity), I explore typography-driven design, motion systems, and product experiences that balance aesthetics with functionality.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-32"
          >
            <a href="https://anirbaansarkar.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary !px-10">
              View Portfolio <ExternalLink className="ml-2 btn-arrow" size={16} />
            </a>
            <a href="mailto:anirbaandsarkar@gmail.com" className="py-4 px-8 text-[13px] tracking-wider uppercase font-mono bg-transparent border border-gold/30 text-parchment hover:border-gold hover:text-gold transition-colors duration-300 rounded-none inline-flex items-center group">
              Contact Me <Mail className="ml-3 opacity-50 group-hover:opacity-100 transition-opacity" size={16} />
            </a>
          </motion.div>
        </div>
      </Section>

      <Section className="!py-24 bg-surface border-y border-gold/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* About Column */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-8">About</span>
            <div className="space-y-6 text-[16px] font-body leading-[1.8] text-muted pr-0 lg:pr-12">
              <p>
                I am a Computer Science graduate from Techno India University and a full-stack developer passionate about building products that solve real-world problems.
              </p>
              <p>
                Through <span className="text-parchment font-medium">anonically22</span>, I document projects, experiments, and digital experiences focused on thoughtful design and modern web technologies.
              </p>
              
              <div className="pt-6">
                <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Expertise</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Product Design & UI/UX',
                    'Full-Stack Web Development',
                    'Design Systems',
                    'Frontend Engineering',
                    'Research & Experimental Interfaces',
                    'AI-Enhanced Digital Products'
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-parchment/80">
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services & Availability */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Services</span>
              <ul className="space-y-3 font-display text-[20px] text-parchment">
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>Design Systems</li>
                <li>Product Strategy</li>
                <li>Frontend Engineering</li>
              </ul>
            </div>
            
            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-6">Availability</span>
              <div className="glass p-8 border border-gold/20">
                <p className="font-body text-muted text-[15px] leading-relaxed mb-4">Currently available for:</p>
                <ul className="space-y-2 text-[15px] font-body text-parchment">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Freelance Projects</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Startup Collaborations</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!py-24 relative z-10 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] block mb-8">Connect</span>
            <div className="flex flex-col gap-6">
              <a href="mailto:anirbaandsarkar@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-body text-muted group-hover:text-parchment transition-colors">anirbaandsarkar@gmail.com</span>
              </a>
              <a href="https://anirbaansarkar.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  <ExternalLink size={16} />
                </div>
                <span className="font-body text-muted group-hover:text-parchment transition-colors">anirbaansarkar.vercel.app</span>
              </a>
              <a href="https://github.com/anonically22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  <Github size={16} />
                </div>
                <span className="font-body text-muted group-hover:text-parchment transition-colors">github.com/anonically22</span>
              </a>
              <a href="https://linkedin.com/in/anirbaan-sarkar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                  <Linkedin size={16} />
                </div>
                <span className="font-body text-muted group-hover:text-parchment transition-colors">linkedin.com/in/anirbaan-sarkar</span>
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 pt-8 border-t border-gold/20"
        >
          <p className="font-mono text-[10px] text-muted/60 uppercase tracking-widest max-w-3xl leading-relaxed">
            Website designed and developed by Anirbaan Sarkar (anonically22) for MRINJOY Partners. All branding, content, and intellectual property belong to MRINJOY Partners.
          </p>
        </motion.div>
      </Section>
    </motion.main>
  );
};

export default Developer;
