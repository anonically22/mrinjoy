import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Trademark = () => {
  return (
    <PracticeAreaLayout
      slug="trademark"
      eyebrow="Trademark Registration"
      headline="Trademark Registration in India"
      tagline="Protect your brand identity, logos, and slogans from unauthorized use and infringement."
      covers={[
        'Comprehensive TM Search',
        'Filing across multiple classes',
        'Responding to Objections',
        'Opposition handling & Renewals'
      ]}
      matters="Your brand name is your most valuable asset. Registering a trademark gives you the exclusive legal right to use it nationwide and prevents competitors from exploiting your goodwill."
      approach={[
        { title: 'Conflict Search', desc: 'We conduct exhaustive searches across the IP India database to ensure your mark is unique and available.' },
        { title: 'Application & Prosecution', desc: 'We draft and file robust applications, handling any registry objections or examination reports swiftly.' },
        { title: 'Registration & Maintenance', desc: 'Upon grant, we monitor for infringement and ensure timely renewals to maintain your rights indefinitely.' }
      ]}
      personas={['Startups & Founders', 'E-commerce Brands', 'Agencies & Creators']}
    />
  );
};

export default Trademark;
