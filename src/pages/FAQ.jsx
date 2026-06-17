import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { generateFaqSchema } from '../seo/seoConfig';

const faqCategories = [
  {
    category: 'Trademark FAQs',
    questions: [
      { q: 'How long does trademark registration take in India?', a: 'Under the current system, a straightforward trademark application without objections or oppositions takes approximately 6 to 12 months for the registration certificate to be issued.' },
      { q: 'Can I trademark a logo that is similar to an existing one?', a: 'No. The Trademark Registry will object under Section 11 of the Trade Marks Act, 1999, if your mark is identical or deceptively similar to an earlier mark in the same class.' },
      { q: 'What is the difference between TM and ® symbols?', a: 'TM denotes that an application is pending or you are claiming rights to an unregistered mark. ® can only be used legally once the trademark is officially registered by the registry.' },
      { q: 'How long is a trademark valid for?', a: 'A trademark is valid for 10 years from the date of application. It can be renewed indefinitely for successive 10-year periods.' },
      { q: 'Do I need to file in multiple classes?', a: 'If your business provides goods or services that span across multiple NICE classification categories, filing in all relevant classes provides maximum protection.' },
      { q: 'What happens if someone infringes my registered trademark?', a: 'Registration grants you the statutory right to sue for infringement. You can seek an injunction, claim damages, and even demand the destruction of infringing goods.' }
    ]
  },
  {
    category: 'Patent FAQs',
    questions: [
      { q: 'Do I need a lawyer to file a patent in India?', a: 'While you can file independently, a registered patent agent or attorney significantly improves the technical claim drafting, ensuring your patent is robust and resilient to challenges.' },
      { q: 'What is the difference between a provisional and complete specification?', a: 'A provisional specification secures an early priority date when your invention is still in development. A complete specification contains full details and claims and must be filed within 12 months.' },
      { q: 'Can a software algorithm be patented in India?', a: 'Per Section 3(k) of the Indian Patents Act, algorithms "per se" are not patentable. However, software in combination with hardware that provides a "technical effect" may be patentable.' },
      { q: 'How long does patent registration take?', a: 'Standard examination takes 2 to 4 years. However, expedited examination is available for startups and female applicants, reducing the timeline to under 1 year in some cases.' },
      { q: 'Is my Indian patent valid worldwide?', a: 'No. Patents are territorial. To get international protection, you must file under the Patent Cooperation Treaty (PCT) or apply directly to individual countries within 12 months.' }
    ]
  },
  {
    category: 'Copyright FAQs',
    questions: [
      { q: 'What is the difference between a trademark and a copyright?', a: 'Trademarks protect brand identifiers (logos, names). Copyrights protect the expression of an idea, such as literary works, software source code, music, and art.' },
      { q: 'Do I have to register my copyright?', a: 'Copyright is inherent upon creation. However, statutory registration provides prima facie evidence of ownership in court and is required to claim statutory damages in litigation.' },
      { q: 'Can I copyright a business idea?', a: 'No. Copyright protects the "expression" of the idea (e.g., the written business plan or source code), not the idea or concept itself.' },
      { q: 'How long does copyright protection last?', a: 'In India, copyright for literary, dramatic, musical, and artistic works generally lasts for the lifetime of the author plus 60 years.' }
    ]
  },
  {
    category: 'General IP FAQs',
    questions: [
      { q: 'Why do startups need IP protection?', a: 'IP protection creates an asset out of an idea, prevents competitors from stealing your market share, and is a critical factor for investors during funding due diligence.' },
      { q: 'What is an IP Audit?', a: 'An IP audit is a systematic review of a company\'s IP assets, related risks, and opportunities. It ensures all IP is legally protected and identifies gaps in ownership.' },
      { q: 'Can a founder own IP instead of the company?', a: 'Yes, but investors usually require the IP to be assigned to the company. Without formal assignment agreements, the company may face legal hurdles later.' },
      { q: 'How much does IP registration cost?', a: 'Costs vary significantly depending on the type of IP, the complexity of the filing, and government fees (which are lower for recognized MSMEs and startups).' },
      { q: 'What is an NDA and is it enough?', a: 'A Non-Disclosure Agreement (NDA) protects trade secrets temporarily. However, it does not prevent reverse engineering. Formal IP registration is required for absolute protection.' }
    ]
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="faq-item border-b border-gold/40 hover:border-gold transition-colors">
    <button className="w-full flex items-center justify-between gap-8 py-8 text-left group" onClick={onToggle} aria-expanded={isOpen}>
      <span className={`font-display text-[20px] transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-parchment group-hover:text-gold'}`}>{faq.q}</span>
      <div className={`faq-icon ${isOpen ? 'bg-gold text-[#FFFFFF] border-gold rotate-45 rounded-full' : 'bg-transparent text-gold border-gold/40 rounded-none group-hover:border-gold'}`}>
        <ChevronDown size={18} strokeWidth={2} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <p className="pb-8 text-[15px] leading-relaxed text-muted font-body max-w-[65ch] pl-2">{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState(null);

  // Filter categories and questions based on search term
  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="FAQ — MRINJOY Partners"
        description="Frequently Asked Questions about Trademark, Patent, Copyright, and General IP laws in India."
        path="/faq"
        jsonLd={[generateFaqSchema(faqCategories.flatMap(c => c.questions))]}
      />

      <Section className="min-h-[60vh] flex flex-col justify-center relative !pt-32 !pb-24 border-b border-gold/20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -top-10 -right-10 w-[500px] h-[500px] opacity-[0.03] text-parchment" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">KNOWLEDGE BASE</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight leading-[1.1] mb-12 font-display text-[64px] md:text-[80px]"
          >
            Frequently <span className="text-gold italic font-normal">Asked.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <input 
              type="text" 
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass bg-transparent border-b border-gold/30 p-6 pl-14 text-parchment font-body text-[16px] rounded-none focus:outline-none focus:border-gold focus:bg-background transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/60" size={20} />
          </motion.div>
        </div>
      </Section>

      <Section className="!py-32 bg-background">
        <div className="max-w-4xl mx-auto space-y-24">
          {filteredCategories.length === 0 ? (
            <div className="text-center text-muted font-body text-[16px]">No questions found matching your search.</div>
          ) : (
            filteredCategories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass p-10 md:p-14 border border-gold/20"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-8 h-[1px] bg-gold"></span>
                  <h3 className="font-display font-bold text-[32px] text-parchment">
                    {category.category}
                  </h3>
                </div>
                <div className="border-t border-gold/40">
                  {category.questions.map((faq, qIndex) => {
                    const uniqueId = `${catIndex}-${qIndex}`;
                    return (
                      <FAQItem 
                        key={qIndex} 
                        faq={faq} 
                        isOpen={openId === uniqueId} 
                        onToggle={() => setOpenId(openId === uniqueId ? null : uniqueId)} 
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </Section>

    </motion.main>
  );
};

export default FAQ;
