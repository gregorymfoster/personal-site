'use client';

import { useEffect } from 'react';

const encouragingMessages = [
  'thinks-you-can-do-it',
  'believes-in-you',
  'is-rooting-for-you',
  'appreciates-your-curiosity',
  'knows-youre-capable',
  'thinks-youre-great',
  'hopes-you-have-a-good-day',
  'wants-you-to-succeed',
];

export default function UrlEncouragement() {
  useEffect(() => {
    // Only run on client side and only if we haven't already added a message
    if (typeof window !== 'undefined' && !window.location.hash) {
      const randomMessage =
        encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
      const newUrl = `${window.location.pathname}#${randomMessage}`;

      // Use replaceState to update URL without reloading or adding to history
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  // This component doesn't render anything
  return null;
}
