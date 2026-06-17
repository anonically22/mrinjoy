import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Contact Us — MRINJOY Partners"
        description="Get in touch with MRINJOY Partners for trademark, patent, copyright, and IP consultation."
        path="/contact"
      />

      <Section className="min-h-[90vh] flex flex-col justify-center relative !pt-40 !pb-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-0 right-[10%] w-[600px] h-[600px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.2" transform="rotate(45 50 50)" />
            <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="0.2" transform="rotate(45 50 50)" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          
          {/* Left Column: Contact Info */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-16">
            <div>
              <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">CONTACT</span>
              <motion.h1 
                variants={fadeUp}
                className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[56px] md:text-[72px]"
              >
                Get in <span className="text-gold italic font-normal">Touch.</span>
              </motion.h1>
              <motion.p 
                variants={fadeUp}
                className="text-muted text-[18px] md:text-[20px] font-body leading-[1.8] max-w-[45ch]"
              >
                Whether you need immediate infringement enforcement or long-term portfolio strategy, our team is ready to secure your assets.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative pl-8 border-l border-gold/30">
                  <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gold"></span>
                  <span className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] block mb-3">Contact Details</span>
                  <p className="font-body text-[16px] text-parchment mb-2">+91 89106 40567</p>
                  <a href="mailto:anirbaandsarkar@gmail.com" className="font-body text-[16px] text-gold hover:text-parchment transition-colors">anirbaandsarkar@gmail.com</a>
                </div>

                <div className="relative pl-8 border-l border-gold/30">
                  <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gold"></span>
                  <span className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] block mb-3">Working Hours</span>
                  <p className="font-body text-[16px] text-parchment">Mon–Fri, 10AM–6PM IST</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#111111] hover:border-gold transition-all duration-300 rounded-full">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#111111] hover:border-gold transition-all duration-300 rounded-full">
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-10 md:p-14 border border-gold/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-focus-within:bg-gold/20 transition-colors duration-500 pointer-events-none"></div>
              <form 
                action="mailto:anirbaandsarkar@gmail.com" 
                method="post" 
                encType="text/plain" 
                className="space-y-8 relative z-10"
              >
                <div>
                  <label className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body shadow-sm" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body shadow-sm" />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">Phone (Optional)</label>
                    <input type="tel" name="phone" className="w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body shadow-sm" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">Subject</label>
                  <select name="subject" className="w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body appearance-none shadow-sm cursor-pointer">
                    <option value="Trademark">Trademark Registration</option>
                    <option value="Patent">Patent Filing</option>
                    <option value="Copyright">Copyright Protection</option>
                    <option value="Design">Design Registration</option>
                    <option value="Brand">Brand Protection</option>
                    <option value="General">General Query</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">Message</label>
                  <textarea name="message" rows="4" required className="w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body resize-none shadow-sm"></textarea>
                </div>

                <button type="submit" className="btn-primary w-full group mt-4 !py-5">
                  SEND MESSAGE <ArrowRight className="ml-2 btn-arrow" size={16} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </Section>
    </motion.main>
  );
};

export default Contact;
