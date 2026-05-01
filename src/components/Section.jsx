import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  id = '',
  borderTop = false,
  borderBottom = false,
  bg = '',
  fullWidth = false,
  style = {},
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`
        w-full py-[72px] md:py-[96px] lg:py-[140px] px-6 md:px-12 lg:px-16
        ${borderTop ? 'border-t-ui' : ''}
        ${borderBottom ? 'border-b-ui' : ''}
        ${className}
      `}
      style={{
        backgroundColor: bg || 'var(--bg-primary)',
        ...style,
      }}
    >
      {fullWidth ? children : (
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      )}
    </motion.section>
  );
};

export default Section;
