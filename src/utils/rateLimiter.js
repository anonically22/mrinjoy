export const checkRateLimit = (actionKey, maxAttempts, timeWindowMs) => {
  try {
    const now = Date.now();
    const historyStr = localStorage.getItem(actionKey);
    let history = historyStr ? JSON.parse(historyStr) : [];

    // Filter out old attempts
    history = history.filter(timestamp => now - timestamp < timeWindowMs);

    if (history.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }

    // Record new attempt
    history.push(now);
    localStorage.setItem(actionKey, JSON.stringify(history));
    return true; // Allowed
  } catch (error) {
    // If local storage fails (e.g. incognito mode), allow by default to not break functionality
    return true;
  }
};
