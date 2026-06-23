import PracticeAreaLayout from '../layouts/PracticeAreaLayout';
import SEOHead from '../seo/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <>
      <SEOHead
        title="Web Design & Development | MRINJOY Partners"
        description="Premium web design, scalable development, and digital experiences engineered for law firms, businesses, and creators."
        path="/web-development"
      />
      <PracticeAreaLayout
        slug="web-development"
        eyebrow="Web Design & Development"
        headline="Digital Excellence & Web Engineering"
        tagline="We build fast, secure, and visually stunning digital experiences that elevate your brand and drive results."
        covers={[
          'Custom Architecture & Engineering',
          'Responsive UI/UX Design',
          'Technical SEO Optimization',
          'High Security Infrastructure'
        ]}
        matters="A strong digital presence is crucial in today's business landscape. Our web development team focuses on creating product-first minimalist designs, balancing deep engineering with thoughtful UI/UX to create websites that convert and perform flawlessly."
        approach={[
          { title: "Discovery & Strategy", desc: "We analyze your brand, target audience, and business goals to map out a complete digital strategy." },
          { title: "UI/UX Design", desc: "Creating wireframes and high-fidelity mockups with a focus on modern, premium aesthetics." },
          { title: "Development", desc: "Writing clean, scalable code using the latest frameworks like React and Next.js." },
          { title: "Launch & Support", desc: "Rigorous testing followed by deployment and ongoing technical maintenance." }
        ]}
        personas={['Law Firms & Agencies', 'E-Commerce Brands', 'Tech Startups', 'Creators & Enterprises']}
      />
      {/* Developer Profile Link Section */}
      <div className="bg-surface py-16 border-t border-gold/10 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h3 className="font-display text-[28px] text-parchment mb-4">Meet The Developer</h3>
          <p className="text-muted text-[16px] font-body max-w-2xl mx-auto mb-8">
            Our digital experiences are crafted by Anirbaan Sarkar (anonically22), a Computer Science graduate specializing in AI research and full-stack engineering.
          </p>
          <Link to="/developer" className="btn-outline inline-flex items-center">
            VIEW DEVELOPER PROFILE <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
