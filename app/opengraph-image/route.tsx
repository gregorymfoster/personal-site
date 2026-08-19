const encouragingMessages = [
  'thinks you can do it',
  'believes in you',
  'is rooting for you',
  'appreciates your curiosity',
  "knows you're capable",
  "thinks you're great",
  'hopes you have a good day',
  'wants you to succeed',
];

export const dynamic = 'force-static';

export async function GET() {
  // Pick a random message
  const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];

  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="white"/>
      <text x="600" y="280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="600" fill="black" text-anchor="middle">
        Greg Foster
      </text>
      <text x="600" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="48" font-weight="400" fill="#666" text-anchor="middle">
        ${randomMessage}
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600, immutable',
    },
  });
}
