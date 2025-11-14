import Image from 'next/image';
import UrlEncouragement from './UrlEncouragement';

export default function Home() {
  return (
    <>
      <UrlEncouragement />
      <Image
        src="/profile.jpg"
        alt="Greg Foster"
        width={200}
        height={200}
        className="profile-image"
        style={{ height: 'auto' }}
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
        <h2>Select things I wrote</h2>
        <ul className="link-list">
          <li>
            <a
              href="https://smalldiffs.gmfoster.com/p/the-human-code-context-problem"
              target="_blank"
              rel="noopener noreferrer"
            >
              The human-code-context problem
            </a>
          </li>
          <li>
            <a
              href="https://graphite.com/blog/invention-of-modern-ci"
              target="_blank"
              rel="noopener noreferrer"
            >
              From the 80's to 2024 - how CI tests were invented and optimized
            </a>
          </li>
          <li>
            <a
              href="https://graphite.com/blog/why-facebook-doesnt-use-git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why Facebook doesn't use Git
            </a>
          </li>
          <li>
            <a
              href="https://graphite.com/blog/github-monopoly-on-code-hosting"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub's monopoly on code hosting
            </a>
          </li>
          <li>
            <a
              href="https://graphite.com/blog/onboarding-roulette"
              target="_blank"
              rel="noopener noreferrer"
            >
              Onboarding roulette
            </a>
          </li>
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
            <a href="https://smalldiffs.gmfoster.com/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
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
