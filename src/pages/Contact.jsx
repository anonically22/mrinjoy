import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';

const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const MSG_MIN_LENGTH = 20;
const MSG_MAX_LENGTH = 2000;

const Contact = () => {
  const formRef = useRef(null);

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Trademark',
    message: '',
    consent: false,
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Form state: 'idle' | 'loading' | 'success' | 'error'
  const [formState, setFormState] = useState('idle');

  // Honeypot ref (hidden field for bots)
  const [honeypot, setHoneypot] = useState('');

  // Throttle: track last submission time
  const lastSubmitRef = useRef(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs = {};

    // Full Name required
    if (!formData.name.trim()) {
      errs.name = 'Full Name is required.';
    }

    // Email required + format
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    // Subject required
    if (!formData.subject) {
      errs.subject = 'Please select a subject.';
    }

    // Message required + min/max length
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < MSG_MIN_LENGTH) {
      errs.message = `Message must be at least ${MSG_MIN_LENGTH} characters.`;
    } else if (formData.message.trim().length > MSG_MAX_LENGTH) {
      errs.message = `Message must not exceed ${MSG_MAX_LENGTH} characters.`;
    }

    // Consent required
    if (!formData.consent) {
      errs.consent = 'You must consent before submitting.';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check — bots will fill this
    if (honeypot) return;

    // Throttle — prevent rapid re-submissions (5 second cooldown)
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      setErrors({ form: 'Please wait a few seconds before submitting again.' });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState('loading');
    lastSubmitRef.current = now;

    // Build mailto body
    const subject = encodeURIComponent(`[Website Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    try {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `mailto:anirbaan703@gmail.com?subject=${subject}&body=${body}`;
      } else {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=anirbaan703@gmail.com&su=${subject}&body=${body}`, '_blank');
      }

      // Show success after a brief delay to let the mail client open
      setTimeout(() => {
        setFormState('success');
      }, 1000);
    } catch {
      setFormState('error');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Trademark',
      message: '',
      consent: false,
    });
    setErrors({});
    setFormState('idle');
  };

  const inputBaseClass =
    'w-full bg-surface border-b border-gold/30 px-4 py-4 text-parchment focus:outline-none focus:border-gold focus:bg-background transition-all duration-300 rounded-none font-body shadow-sm';
  const errorClass = 'text-red-400 text-[12px] font-mono mt-2 block';

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
                  <a href="mailto:anirbaan703@gmail.com" className="font-body text-[16px] text-gold hover:text-parchment transition-colors">anirbaan703@gmail.com</a>
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

              {/* Success State */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-16 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-display text-[24px] text-parchment mb-4">Thank You</h3>
                  <p className="text-muted text-[15px] font-body leading-relaxed max-w-[40ch] mb-8">
                    Thank you. Your inquiry has been prepared successfully.
                  </p>
                  <button
                    onClick={resetForm}
                    className="btn-primary group"
                  >
                    SEND ANOTHER MESSAGE <ArrowRight className="ml-2 btn-arrow" size={16} />
                  </button>
                </motion.div>
              )}

              {/* Error State */}
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-16 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                    <AlertCircle size={32} className="text-red-400" />
                  </div>
                  <h3 className="font-display text-[24px] text-parchment mb-4">Something Went Wrong</h3>
                  <p className="text-muted text-[15px] font-body leading-relaxed max-w-[40ch] mb-8">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="btn-primary group"
                  >
                    TRY AGAIN <ArrowRight className="ml-2 btn-arrow" size={16} />
                  </button>
                </motion.div>
              )}

              {/* Form (visible in idle/loading states) */}
              {(formState === 'idle' || formState === 'loading') && (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-8 relative z-10"
                >
                  {/* Honeypot — hidden from real users, bots will fill it */}
                  <div className="absolute -left-[9999px]" aria-hidden="true" tabIndex={-1}>
                    <label htmlFor="contact-website">Website</label>
                    <input
                      type="text"
                      id="contact-website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`${inputBaseClass} ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <span id="error-name" className={errorClass} role="alert">{errors.name}</span>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="contact-email" className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`${inputBaseClass} ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && <span id="error-email" className={errorClass} role="alert">{errors.email}</span>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputBaseClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className={`${inputBaseClass} appearance-none cursor-pointer ${errors.subject ? 'border-red-400' : ''}`}
                    >
                      <option value="Trademark">Trademark Registration</option>
                      <option value="Patent">Patent Filing</option>
                      <option value="Copyright">Copyright Protection</option>
                      <option value="Design">Design Registration</option>
                      <option value="Brand">Brand Protection</option>
                      <option value="General">General Query</option>
                    </select>
                    {errors.subject && <span className={errorClass} role="alert">{errors.subject}</span>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-mono text-[11px] text-gold uppercase tracking-[0.2em] mb-3">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : 'message-hint'}
                      minLength={MSG_MIN_LENGTH}
                      maxLength={MSG_MAX_LENGTH}
                      className={`${inputBaseClass} resize-none ${errors.message ? 'border-red-400' : ''}`}
                    ></textarea>
                    <span id="message-hint" className="text-[11px] text-muted/60 font-mono mt-2 block">
                      {formData.message.length}/{MSG_MAX_LENGTH} characters (minimum {MSG_MIN_LENGTH})
                    </span>
                    {errors.message && <span id="error-message" className={errorClass} role="alert">{errors.message}</span>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="border-t border-gold/10 pt-6">
                    <label htmlFor="contact-consent" className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? 'error-consent' : undefined}
                          className="peer sr-only"
                        />
                        <div className={`w-5 h-5 border ${errors.consent ? 'border-red-400' : 'border-gold/40'} bg-surface peer-checked:bg-gold peer-checked:border-gold transition-all duration-300 flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-gold/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background`}>
                          {formData.consent && (
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-[#111111]">
                              <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-[13px] text-muted font-body leading-relaxed group-hover:text-parchment/80 transition-colors">
                        I consent to MRINJOY Partners using my information to respond to my inquiry. <span className="text-red-400">*</span>
                      </span>
                    </label>
                    {errors.consent && <span id="error-consent" className={errorClass} role="alert">{errors.consent}</span>}
                  </div>

                  {/* General form error (throttle) */}
                  {errors.form && (
                    <div className="text-red-400 text-[13px] font-mono text-center" role="alert">
                      {errors.form}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="btn-primary w-full group mt-4 !py-5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        SEND MESSAGE <ArrowRight className="ml-2 btn-arrow" size={16} />
                      </>
                    )}
                  </button>

                  {/* Data Collection Notice */}
                  <p className="text-[12px] text-muted/60 font-body text-center leading-relaxed pt-2">
                    Your information is collected solely for responding to your inquiry and providing requested services.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </Section>
    </motion.main>
  );
};

export default Contact;
