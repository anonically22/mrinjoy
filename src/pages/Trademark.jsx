import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Trademark = () => {
  return (
    <PracticeAreaLayout
      slug="trademark"
      eyebrow="Trademark Registration & Brand Protection"
      headline="Trademark Registration & Brand Protection"
      tagline="Protect your brand identity, logos, and slogans from unauthorized use and active infringement."
      covers={[
        'Comprehensive TM Search',
        'Filing across multiple classes',
        'Responding to Objections',
        'Opposition handling & Renewals',
        'Infringement Monitoring',
        'Cease & Desist Actions',
        'Domain Name Disputes',
        'Anti-Counterfeiting'
      ]}
      matters="Your brand name is your most valuable asset. Registering a trademark gives you the exclusive legal right to use it nationwide. If you don't actively police your intellectual property, it dilutes over time. Aggressive brand protection maintains the exclusivity and premium value of your brand."
      approach={[
        { title: 'Conflict Search', desc: 'We conduct exhaustive searches across the IP India database to ensure your mark is unique and available.' },
        { title: 'Application & Prosecution', desc: 'We draft and file robust applications, handling any registry objections or examination reports swiftly.' },
        { title: 'Registration & Maintenance', desc: 'Upon grant, we monitor for infringement and ensure timely renewals to maintain your rights indefinitely.' },
        { title: 'Market Monitoring', desc: 'We continuously scan digital marketplaces, registries, and physical markets for unauthorized use of your IP.' },
        { title: 'Notice & Takedown', desc: 'Upon finding infringement, we issue strong legal notices and coordinate with platforms for immediate takedowns.' },
        { title: 'Litigation Strategy', desc: 'When necessary, we initiate legal proceedings for injunctions and damages against serial infringers.' }
      ]}
      personas={['Startups & Founders', 'E-commerce Brands', 'Agencies & Creators', 'Established Franchises', 'Consumer Goods Brands', 'High-Profile Creators']}
    />
  );
};

export default Trademark;
