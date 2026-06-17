import PracticeAreaLayout from '../layouts/PracticeAreaLayout';

const Design = () => {
  return (
    <PracticeAreaLayout
      slug="design"
      eyebrow="Design Protection"
      headline="Industrial Design Registration"
      tagline="Defend the unique visual appearance, shape, and aesthetic elements of your products."
      covers={[
        'Industrial Shape Designs',
        'UI/UX Screen Layouts',
        'Packaging & Form Factors',
        'Aesthetic Configurations'
      ]}
      matters="Consumers often buy products based on how they look. Design registration protects the distinct visual appeal of your products, stopping competitors from making cheap knock-offs that confuse your buyers."
      approach={[
        { title: 'Design Consultation', desc: 'We review your product to identify protectable aesthetic features separate from its functional utility.' },
        { title: 'Novelty Search', desc: 'We conduct a search to ensure your design is new and original before filing.' },
        { title: 'Filing & Representation', desc: 'We prepare precise technical drawings from multiple angles and file them with the Design Office for rapid registration.' }
      ]}
      personas={['Hardware Startups', 'Fashion & Furniture Brands', 'Industrial Designers']}
    />
  );
};

export default Design;
