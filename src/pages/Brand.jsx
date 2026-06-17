import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Brand = () => {
  return (
    <PracticeAreaLayout
      slug="brand"
      eyebrow="Brand Protection"
      headline="Brand Protection & Enforcement"
      tagline="Active digital and physical market monitoring, and decisive cease and desist enforcement."
      covers={[
        'Infringement Monitoring',
        'Cease & Desist Actions',
        'Domain Name Disputes',
        'Anti-Counterfeiting'
      ]}
      matters="Registration is only half the battle. If you don't actively police your intellectual property, it dilutes over time. Aggressive brand protection maintains the exclusivity and premium value of your brand."
      approach={[
        { title: 'Market Monitoring', desc: 'We continuously scan digital marketplaces, registries, and physical markets for unauthorized use of your IP.' },
        { title: 'Notice & Takedown', desc: 'Upon finding infringement, we issue strong legal notices and coordinate with platforms for immediate takedowns.' },
        { title: 'Litigation Strategy', desc: 'When necessary, we initiate legal proceedings for injunctions and damages against serial infringers.' }
      ]}
      personas={['Established Franchises', 'Consumer Goods Brands', 'High-Profile Creators']}
    />
  );
};

export default Brand;
