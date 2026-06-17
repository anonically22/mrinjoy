import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Copyright = () => {
  return (
    <PracticeAreaLayout
      slug="copyright"
      eyebrow="Copyright Registration"
      headline="Copyright Protection for Creators"
      tagline="Safeguard original creative works including software source code, digital assets, and texts."
      covers={[
        'Software & App Source Code',
        'Literary & Textual Works',
        'Artistic & Graphic Designs',
        'Musical & Audiovisual Content'
      ]}
      matters="While copyright exists from the moment of creation, statutory registration is crucial. It acts as prima facie evidence of ownership and enables you to claim statutory damages in infringement lawsuits."
      approach={[
        { title: 'Work Review', desc: 'We analyze your creative assets to determine the correct category and scope of protection.' },
        { title: 'Documentation & Filing', desc: 'We prepare the necessary No-Objection Certificates (NOCs) and file the applications seamlessly.' },
        { title: 'Diary & Registration', desc: 'We manage the waiting period, clear any discrepancies, and secure the final extracts from the Register of Copyrights.' }
      ]}
      personas={['Software Developers', 'Writers & Authors', 'Media & Entertainment Agencies']}
    />
  );
};

export default Copyright;
