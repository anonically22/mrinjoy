import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id = '', 
  borderTop = false, 
  borderBottom = false,
  bg = 'bg-[var(--bg-primary)]'
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`
        w-full py-24 md:py-32 px-6 md:px-12 lg:px-24
        ${bg} 
        ${borderTop ? 'editorial-border-t' : ''} 
        ${borderBottom ? 'editorial-border-b' : ''} 
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
