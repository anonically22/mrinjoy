import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Patent = () => {
  return (
    <PracticeAreaLayout
      slug="patent"
      eyebrow="Patent Filing"
      headline="Patent Filing & Prosecution"
      tagline="Secure exclusive legal rights for your technology inventions and industrial processes."
      covers={[
        'Provisional & Complete Specs',
        'Prior Art & Novelty Search',
        'PCT International Filing',
        'Patent Prosecution & Grant'
      ]}
      matters="Innovation without protection is a gift to your competitors. A patent grants you a 20-year monopoly over your invention, creating a massive barrier to entry and increasing company valuation."
      approach={[
        { title: 'Patentability Assessment', desc: 'We analyze your invention against global databases to establish novelty and non-obviousness.' },
        { title: 'Strategic Drafting', desc: 'Our technical experts draft comprehensive claims that maximize the scope of your protection.' },
        { title: 'Prosecution & Grant', desc: 'We represent you before the patent office, defending your claims through rigorous examination to secure the grant.' }
      ]}
      personas={['Technology Startups', 'Engineers & Researchers', 'Manufacturing Firms']}
    />
  );
};

export default Patent;
