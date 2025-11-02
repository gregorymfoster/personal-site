import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image
        src="/profile.jpg"
        alt="Greg Foster"
        width={200}
        height={200}
        className="profile-image"
        priority
      />
      <h1>Greg Foster</h1>
      <p>
        I'm the cofounder of{' '}
        <a href="https://graphite.dev" target="_blank" rel="noopener noreferrer">
          Graphite
        </a>
        , where we're building the future of code review.
      </p>
      <p>I studied computer science at Harvard and hold a patent in video manipulation.</p>
      <p>
        I write{' '}
        <a href="https://smalldiffs.gmfoster.com/" target="_blank" rel="noopener noreferrer">
          Small Diffs
        </a>
        , a newsletter about engineering enablement, modern DevTools, and building better
        software.
      </p>
      <p className="links">
        <a href="https://x.com/gregmfoster" target="_blank" rel="noopener noreferrer">
          X
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/gregmfoster/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href="https://smalldiffs.gmfoster.com/" target="_blank" rel="noopener noreferrer">
          Small Diffs
        </a>
      </p>
    </>
  );
}
