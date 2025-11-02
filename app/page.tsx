import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Your Name</h1>
      <p>
        Brief introduction about yourself. What you do, what you're interested in, or what
        you're working on.
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:you@example.com">Email</a>
        </li>
      </ul>
    </>
  );
}
