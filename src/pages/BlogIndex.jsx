import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { blogPosts } from '../data/blogPosts';
import { SITE_URL, breadcrumbSchema } from '../seo/seoConfig';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const BlogIndex = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'IP Insights Blog', url: `${SITE_URL}/blog` },
  ]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background min-h-screen text-parchment"
    >
      <SEOHead
        title="Intellectual Property Blog & Legal Insights | MRINJOY Partners"
        description="Read the latest articles, legal updates, and strategic insights on Trademark, Patent, and Copyright laws in India."
        path="/blog"
        jsonLd={[breadcrumbs]}
      />

      <Section className="min-h-[50vh] flex flex-col justify-end relative !pt-40 !pb-24 overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-[10%] right-[10%] w-[600px] h-[600px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
             <polygon points="50,15 90,85 10,85" stroke="currentColor" strokeWidth="0.2" fill="none" />
          </svg>
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">IP INSIGHTS</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold tracking-tight leading-[1.1] mb-8 font-display text-[56px] md:text-[80px]"
          >
            Legal Strategy. <span className="text-gold italic">Distilled.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted text-[18px] md:text-[22px] font-body leading-[1.8] max-w-[55ch]"
          >
            Insights and updates on Trademark Registration, Patent Prosecution, and IP Litigation across India.
          </motion.p>
        </div>
      </Section>

      <Section className="!py-24 bg-surface relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp} className="group">
              <Link to={`/blog/${post.slug}`} className="block h-full glass p-8 md:p-10 border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-colors duration-500"></div>
                
                <div className="flex items-center gap-4 text-gold/60 font-mono text-[11px] uppercase tracking-widest mb-6 relative z-10">
                  <span className="flex items-center gap-2"><Calendar size={12} /> {post.publishDate}</span>
                  <span className="w-1 h-1 bg-gold/40 rounded-full"></span>
                  <span className="flex items-center gap-2"><Clock size={12} /> {post.readingTime}</span>
                </div>
                
                <h2 className="font-display text-[26px] md:text-[32px] text-parchment leading-[1.2] mb-6 group-hover:text-gold transition-colors duration-300 relative z-10">
                  {post.title}
                </h2>
                
                <p className="text-muted text-[15px] font-body leading-[1.8] mb-8 relative z-10 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-[13px] font-body text-gold mt-auto group-hover:translate-x-2 transition-transform duration-500 relative z-10">
                  Read Article <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </motion.main>
  );
};

export default BlogIndex;
