import { checkRateLimit } from '../utils/rateLimiter';

const ProtectedMailto = ({ email, subject = '', body = '', className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Check global email rate limit (max 3 clicks per 10 mins)
    const isAllowed = checkRateLimit('email_link_limit', 3, 10 * 60 * 1000);
    
    if (!isAllowed) {
      alert("Spam Protection: You've initiated too many email requests recently. Please wait a few minutes before trying again.");
      return;
    }

    let href = `mailto:${email}`;
    if (subject || body) {
      href += `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    // Use window.open for better mail client handling in some browsers
    window.location.href = href;
  };

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children || email}
    </a>
  );
};

export default ProtectedMailto;
