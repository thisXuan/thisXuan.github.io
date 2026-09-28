import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m an M.S. student in Computational Science and Engineering at{' '}
            <a href="https://www.gatech.edu" className="hero-highlight">
              {profile.employer}
            </a>
            , focused on backend systems, distributed infrastructure, and AI.
            I&apos;ve built production software at{' '}
            <a href="https://aws.amazon.com" className="hero-highlight">
              AWS
            </a>
            ,{' '}
            <a
              href="https://www.meituan.com/en-US/about-us"
              className="hero-highlight"
            >
              Meituan
            </a>
            ,{' '}
            <a href="https://www.momenta.cn/en/" className="hero-highlight">
              Momenta
            </a>
            , and the{' '}
            <a href="https://nus.edu.sg/" className="hero-highlight">
              National University of Singapore Research Institute
            </a>
            .
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
