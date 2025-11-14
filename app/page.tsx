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
        I'm a cofounder of{' '}
        <a href="https://graphite.com" target="_blank" rel="noopener noreferrer">
          Graphite
        </a>
        , where I obsess about the future of code review and code collaboration broadly.
      </p>
      <section>
        <h2>Select Writing</h2>
        <ul className="link-list">
          <li>
            <a
              href="https://smalldiffs.gmfoster.com/p/are-you-having-any-fun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Are you having any fun?
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Links</h2>
        <ul className="link-list">
          <li>
            <a href="https://x.com/gregmfoster" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gregmfoster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
