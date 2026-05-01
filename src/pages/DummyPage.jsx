import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DummyPage = ({ title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[800px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-10 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <h1 className="font-extrabold uppercase tracking-tighter mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h1>
        <div className="space-y-6" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75' }}>
          <p>
            This is a placeholder page for <strong>{title}</strong>. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DummyPage;
