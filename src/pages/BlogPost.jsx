import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import SEOHead from '../seo/SEOHead';
import { blogPosts } from '../data/blogPosts';
import { SITE_URL, breadcrumbSchema, organizationSchema } from '../seo/seoConfig';

const BlogPost = () => {
  const { slug } = useParams();
  
  const post = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: post.title, url: articleUrl },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: organizationSchema,
    datePublished: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id:': articleUrl
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background min-h-screen text-parchment"
    >
      <SEOHead
        title={`${post.title} | MRINJOY Partners`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={[breadcrumbs, articleSchema]}
      />

      <Section className="!pt-40 !pb-12 border-b border-gold/20">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 label text-xs uppercase tracking-[0.2em] text-gold hover:text-parchment transition-colors font-mono mb-12">
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <div className="flex items-center gap-4 text-gold/60 font-mono text-[11px] uppercase tracking-widest mb-8">
            <span className="flex items-center gap-2"><Calendar size={12} /> {post.publishDate}</span>
            <span className="w-1 h-1 bg-gold/40 rounded-full"></span>
            <span className="flex items-center gap-2"><Clock size={12} /> {post.readingTime}</span>
            <span className="w-1 h-1 bg-gold/40 rounded-full"></span>
            <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold tracking-tight leading-[1.1] mb-12 font-display text-[42px] md:text-[56px]"
          >
            {post.title}
          </motion.h1>
        </div>
      </Section>

      <Section className="!py-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          {/* Article Content Rendered */}
          <div 
            className="prose prose-invert prose-gold max-w-none font-body text-muted leading-[1.8] text-[17px]
              prose-headings:font-display prose-headings:text-parchment prose-headings:font-normal prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-8
              prose-p:mb-8 prose-li:mb-2 prose-ul:mb-8 prose-ol:mb-8
              prose-strong:text-parchment prose-strong:font-semibold
              prose-blockquote:border-l-2 prose-blockquote:border-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-parchment/80"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/## (.*?)<br \/>/g, '<h2>$1</h2>').replace(/> "(.*?)"/g, '<blockquote>"$1"</blockquote>') }}
          />

          <div className="mt-24 pt-12 border-t border-gold/20 flex items-center justify-between">
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gold/10 text-gold font-mono text-[11px] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </motion.main>
  );
};

export default BlogPost;
