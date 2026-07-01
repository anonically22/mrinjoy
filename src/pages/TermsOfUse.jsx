import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import ProtectedMailto from '../components/ProtectedMailto';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const TermsOfUse = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Terms of Use — MRINJOY Partners"
        description="Read the terms and conditions governing the use of the MRINJOY Partners website."
        path="/terms-of-service"
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
            Terms of <span className="text-gold italic font-normal">Use.</span>
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
              <h2 className="font-display text-[24px] text-parchment mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the MRINJOY Partners website at{' '}
                <a href="https://mrinjoypartners.in" className="text-gold hover:underline">
                  mrinjoypartners.in
                </a>{' '}
                ("Website"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must discontinue use of this Website immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">2. Website Usage Conditions</h2>
              <p className="mb-4">By using this Website, you agree to the following:</p>
              <ul className="space-y-2 pl-6">
                {[
                  'You will use the Website only for lawful purposes and in compliance with all applicable laws and regulations.',
                  'You will not engage in any activity that disrupts, damages, or impairs the Website or its functionality.',
                  'You will not attempt to gain unauthorized access to any part of the Website, its servers, or connected systems.',
                  'You will not use any automated systems (bots, scrapers, etc.) to access or collect information from the Website without prior written consent.',
                  'You must be at least 18 years of age to use this Website or submit information through our contact forms.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">3. Intellectual Property Ownership</h2>
              <p>
                All content on this Website — including but not limited to text, graphics, logos, images, design elements, code, and branding — is the property of MRINJOY Partners or its licensors and is protected under Indian and international intellectual property laws. You may not reproduce, distribute, modify, display, or create derivative works from any content on this Website without prior written permission from MRINJOY Partners.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">4. No Attorney-Client Relationship</h2>
              <p>
                Use of this Website, including submission of inquiries through the contact form, does not create an attorney-client relationship between you and MRINJOY Partners. An attorney-client relationship is only established through a formal engagement agreement signed by both parties.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, MRINJOY Partners, its partners, associates, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use this Website. This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
              <p className="mt-4">
                The information on this Website is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">6. Third-Party Links</h2>
              <p>
                This Website may contain links to third-party websites or resources. MRINJOY Partners does not endorse and is not responsible for the content, accuracy, or practices of any third-party sites. Your interactions with such sites are solely between you and the respective third party.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">7. Modifications to Terms</h2>
              <p>
                MRINJOY Partners reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Website after any changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">8. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from or related to the use of this Website shall be subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat, India.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">9. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">10. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="glass p-6 border border-gold/20 space-y-2">
                <p className="text-parchment font-display">MRINJOY Partners</p>
                <p>Email:{' '}
                  <ProtectedMailto email="anirbaan703@gmail.com" className="text-gold hover:underline" />
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

export default TermsOfUse;
