import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Disclaimer = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Disclaimer — MRINJOY Partners"
        description="Important legal disclaimer regarding the content and use of the MRINJOY Partners website."
        path="/disclaimer"
        noindex={false}
      />

      <Section className="!pt-40 !pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-gold hover:text-parchment transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="label text-gold block mb-6 text-[11px] font-mono uppercase tracking-[0.15em]">
            LEGAL
          </span>
          <h1 className="font-bold tracking-tight leading-[1.1] mb-12 font-display text-[48px] md:text-[64px]">
            Legal <span className="text-gold italic font-normal">Disclaimer.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="glass p-10 md:p-14 border border-gold/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-10 text-muted text-[15px] leading-[1.8] font-body relative z-10 max-w-[75ch]">
            <p className="text-parchment/70 text-[14px] font-mono uppercase tracking-wider">
              Effective Date: June 23, 2026
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">1. Informational Purposes Only</h2>
              <p>
                The content on the MRINJOY Partners website at{' '}
                <a href="https://www.mrinjoypartners.com" className="text-gold hover:underline">
                  www.mrinjoypartners.com
                </a>{' '}
                ("Website") is provided for general informational and educational purposes only. The information presented on this Website is not intended to be, and should not be construed as, legal advice on any specific matter.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">2. No Legal Advice</h2>
              <p>
                Nothing on this Website constitutes legal advice. The information provided is general in nature and may not reflect the most current legal developments. Legal advice can only be provided after a thorough analysis of all relevant facts and circumstances specific to your situation. You should consult with a qualified legal professional before making any decisions based on the information presented on this Website.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">3. No Attorney-Client Relationship</h2>
              <p>
                Visiting this Website, reading its content, or submitting an inquiry through the contact form does not create an attorney-client relationship between you and MRINJOY Partners. An attorney-client relationship is established only through a formal, signed engagement agreement between the client and MRINJOY Partners. Until such an agreement is executed, no confidential or privileged relationship exists.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">4. No Guarantee of Outcomes</h2>
              <p>
                Any case studies, examples, results, or statistics discussed or referenced on this Website are provided for illustrative purposes only and do not guarantee similar or future outcomes. Every legal matter depends on its unique facts and circumstances, and past results are not indicative of future performance. MRINJOY Partners makes no representations or warranties regarding the outcome of any legal proceeding or filing.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">5. Applicability Limitations</h2>
              <p>
                The information on this Website may not apply to your specific legal situation. Intellectual property laws vary by jurisdiction and are subject to frequent changes. The content presented here is based on Indian law and may not be applicable or accurate for legal matters in other jurisdictions. You should always seek advice tailored to your particular circumstances.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">6. External Links</h2>
              <p>
                This Website may contain links to external websites or resources for your convenience. MRINJOY Partners does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. Accessing external links is at your own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">7. Changes to This Disclaimer</h2>
              <p>
                MRINJOY Partners reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be reflected on this page with an updated effective date. Your continued use of the Website after any changes constitutes acceptance of the updated Disclaimer.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">8. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about this Disclaimer, please contact us:
              </p>
              <div className="glass p-6 border border-gold/20 space-y-2">
                <p className="text-parchment font-display">MRINJOY Partners</p>
                <p>Email:{' '}
                  <a href="mailto:anirbaan703@gmail.com" className="text-gold hover:underline">
                    anirbaan703@gmail.com
                  </a>
                </p>
                <p>Phone: +91 89106 40567</p>
                <p>Location: Vadodara, Gujarat, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </motion.main>
  );
};

export default Disclaimer;
