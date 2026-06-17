import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const IPConsultation = () => {
  return (
    <PracticeAreaLayout
      slug="ip-consultation"
      eyebrow="IP Consultation"
      headline="Strategic IP Consultation"
      tagline="Get business-first IP audits, portfolio structuring, and licensing advisory."
      covers={[
        'IP Audits & Due Diligence',
        'Strategic Portfolio Growth',
        'Technology Licensing',
        'Trade Secret Management'
      ]}
      matters="A scattered IP approach wastes capital and leaves blind spots. Strategic consultation aligns your intellectual property protection directly with your business goals, maximizing valuation and minimizing risk."
      approach={[
        { title: 'Initial Assessment', desc: 'We evaluate your current business operations, assets, and market position to understand your IP needs.' },
        { title: 'Gap Analysis & Audit', desc: 'We identify unprotected assets, potential infringement risks, and areas for strategic filings.' },
        { title: 'Implementation Roadmap', desc: 'We deliver a phased, budget-conscious action plan for securing and commercializing your IP.' }
      ]}
      personas={['Startups Raising Capital', 'Corporate Legal Teams', 'Investors (Due Diligence)']}
    />
  );
};

export default IPConsultation;
