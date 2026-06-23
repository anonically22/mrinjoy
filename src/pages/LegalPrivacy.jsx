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

const LegalPrivacy = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background text-parchment min-h-screen"
    >
      <SEOHead
        title="Privacy Policy — MRINJOY Partners"
        description="Learn how MRINJOY Partners collects, uses, and protects your personal information."
        path="/privacy-policy"
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
            Privacy <span className="text-gold italic font-normal">Policy.</span>
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
              <h2 className="font-display text-[24px] text-parchment mb-4">1. Introduction</h2>
              <p>
                MRINJOY Partners ("we," "us," or "our") is committed to protecting the privacy of individuals who visit our website at{' '}
                <a href="https://www.mrinjoypartners.com" className="text-gold hover:underline">
                  www.mrinjoypartners.com
                </a>{' '}
                ("Website"). This Privacy Policy explains what information we collect, why we collect it, how we use and protect it, and your rights concerning your personal data.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide through our contact form, including:
              </p>
              <ul className="space-y-2 pl-6">
                {[
                  'Full Name',
                  'Email Address',
                  'Phone Number (optional)',
                  'Subject of Inquiry',
                  'Message Content',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We do not collect sensitive personal data such as financial information, government identification numbers, or health-related data through this Website.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">3. Purpose of Collection</h2>
              <p className="mb-4">We collect your personal information for the following purposes:</p>
              <ul className="space-y-2 pl-6">
                {[
                  'To respond to your inquiry or consultation request',
                  'To provide information about our intellectual property services',
                  'To communicate with you regarding your legal needs',
                  'To improve our Website and services',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">4. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, typically for a period of 12 months from the date of last interaction. After this period, your data will be securely deleted or anonymized unless retention is required by applicable law.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="space-y-2 pl-6">
                {[
                  'Request access to the personal data we hold about you',
                  'Request correction of any inaccurate or incomplete data',
                  'Request deletion of your personal data',
                  'Withdraw your consent for data processing at any time',
                  'Lodge a complaint with the relevant data protection authority',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at the details provided below.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">6. Third-Party Services</h2>
              <p>
                Our Website may use third-party services such as Google Fonts for typography rendering. These services may collect certain technical information (such as IP addresses) as part of their standard operation. We do not share your personal form data with any third party unless required by law or with your explicit consent.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">7. Security Measures</h2>
              <p>
                We implement reasonable technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These measures include secure data transmission, access controls, and regular security reviews. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">8. Cookies</h2>
              <p>
                This Website does not use cookies for tracking or advertising purposes. We may use essential cookies for basic Website functionality. No third-party advertising or analytics cookies are deployed.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display text-[24px] text-parchment mb-4">10. Contact Information</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

export default LegalPrivacy;
