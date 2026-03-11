import { motion } from 'framer-motion';
import { Shield, Copyright, Pencil, Rocket, Gavel, FileText } from 'lucide-react';
import Section from '../components/Section';

const Home = () => {
  const services = [
    { title: 'Patent Filing', icon: <FileText size={32} strokeWidth={1.5} />, desc: 'Global strategy and utility filings.' },
    { title: 'Trademark Registration', icon: <Shield size={32} strokeWidth={1.5} />, desc: 'Brand identity protection.' },
    { title: 'Copyright Protection', icon: <Copyright size={32} strokeWidth={1.5} />, desc: 'Creative works and software IP.' },
    { title: 'Design Rights', icon: <Pencil size={32} strokeWidth={1.5} />, desc: 'Safeguarding visual uniqueness.' },
    { title: 'Startup Advisory', icon: <Rocket size={32} strokeWidth={1.5} />, desc: 'Legal infrastructure for growth.' },
    { title: 'IP Litigation', icon: <Gavel size={32} strokeWidth={1.5} />, desc: 'Enforcement and defense.' }
  ];

  const processSteps = ['Discovery', 'Mapping', 'Execution', 'Monitoring', 'Enforcement'];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main>
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex flex-col justify-center" borderBottom>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] font-black uppercase tracking-tighter mb-12">
            Ideas Deserve <br/>
            <span className="text-[var(--accent)]">Defense.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <p className="text-xl md:text-3xl font-light text-gray-500 leading-tight">
              MRINJOY Partners protects innovation through strategic intellectual property law, patent protection, and trademark enforcement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start md:items-end md:justify-end">
              <button className="btn-primary w-full sm:w-auto">Start a Consultation</button>
              <button className="btn-outline w-full sm:w-auto">Explore Services</button>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Trust Strip */}
      <Section className="py-16 md:py-24" borderBottom>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">
          Trusted Global Strategy for Innovation-Driven Businesses
        </h2>
        <div className="flex flex-wrap gap-px bg-[var(--border-ui)] border border-[var(--border-ui)]">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="flex-1 min-w-[150px] bg-[var(--bg-surface)] h-32 flex items-center justify-center">
               <div className="w-24 h-6 bg-gray-200"></div> {/* Placeholder logo */}
             </div>
           ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" borderBottom bg="bg-[var(--bg-surface)]">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            What We <br/>
            <span className="text-[var(--accent)]">Protect</span>
          </h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-ui)] border border-[var(--border-ui)]"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: 'var(--accent)', color: 'white' }}
              className="bg-[var(--bg-surface)] p-12 aspect-square flex flex-col justify-between group transition-colors duration-300"
            >
              <div className="text-[var(--accent)] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-200 font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Expertise Section */}
      <Section id="about" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-gray-200 w-full"
          >
            {/* Placeholder for editorial image */}
            <div className="w-full h-full bg-slate-300 mix-blend-multiply"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              Intellectual Property, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Engineered.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-500 mb-16 leading-relaxed">
              We don't just file papers; we engineer defensive barriers around your most valuable assets. 
              Our methodology combines legal rigor with deep technical understanding.
            </p>
            
            <div className="grid grid-cols-2 gap-px bg-[var(--border-ui)] border border-[var(--border-ui)]">
              {[
                { val: '98%', label: 'Patent Success Rate' },
                { val: '12k+', label: 'Trademarks Managed' },
                { val: '$4B+', label: 'Client Value Protected' },
                { val: '45', label: 'Global Jurisdictions' }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-[var(--bg-primary)]">
                  <span className="block text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="clients" borderBottom bg="bg-[var(--bg-surface)]">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-center">
          How Protection <br/>
          <span className="text-[var(--accent)]">Happens</span>
        </h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-px bg-[var(--border-ui)] border border-[var(--border-ui)]"
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex-1 bg-[var(--bg-surface)] p-12 hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-bold text-[var(--accent)] mb-8 block font-mono">
                0{index + 1} //
              </span>
              <h3 className="text-2xl font-bold uppercase mb-4">{step}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Insights Section */}
      <Section id="insights" borderBottom>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Legal <br/><span className="text-[var(--accent)]">Intelligence</span>
          </h2>
          <button className="text-sm font-bold uppercase tracking-widest hover:text-[var(--accent)] transition-colors border-b-2 border-transparent hover:border-[var(--accent)] pb-1">
            View All Articles →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { cat: 'Patent Strategy', title: 'Navigating Intellectual Property in the Era of Generative AI' },
            { cat: 'Industrial Design', title: 'The Semiconductor Battleground: Why Design Rights Matter More Than Ever' }
          ].map((post, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] bg-gray-200 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-300 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
              </div>
              <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">{post.cat}</span>
              <h3 className="text-3xl font-black uppercase mt-4 mb-4 leading-tight group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 font-medium">Read the full excerpt highlighting the strategic business impacts...</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="py-32 md:py-48 text-center bg-[var(--accent)] text-white">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            Your Innovation <br/>
            Deserves Protection.
          </h2>
          <button className="bg-white text-[var(--accent)] px-10 py-5 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
        </motion.div>
      </Section>
    </main>
  );
};

export default Home;
