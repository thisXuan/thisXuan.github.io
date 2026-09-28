import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Minxuan Jin');
  });

  it('describes the current education and engineering focus', () => {
    const { container } = render(<Hero />);

    const gatechLink = screen.getByRole('link', { name: /georgia tech/i });
    expect(gatechLink).toHaveAttribute('href', 'https://www.gatech.edu');
    expect(gatechLink).toHaveClass('hero-highlight');

    const awsLink = screen.getByRole('link', { name: /aws/i });
    expect(awsLink).toHaveAttribute('href', 'https://aws.amazon.com');
    expect(awsLink).toHaveClass('hero-highlight');

    const meituanLink = screen.getByRole('link', { name: /meituan/i });
    expect(meituanLink).toHaveAttribute(
      'href',
      'https://www.meituan.com/en-US/about-us',
    );
    expect(meituanLink).toHaveClass('hero-highlight');

    const momentaLink = screen.getByRole('link', { name: /momenta/i });
    expect(momentaLink).toHaveAttribute('href', 'https://www.momenta.cn/en/');
    expect(momentaLink).toHaveClass('hero-highlight');

    const nusLink = screen.getByRole('link', {
      name: /national university of singapore research institute/i,
    });
    expect(nusLink).toHaveAttribute('href', 'https://nus.edu.sg/');
    expect(nusLink).toHaveClass('hero-highlight');

    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      "I'm an M.S. student in Computational Science and Engineering at Georgia Tech, focused on backend systems, distributed infrastructure, and AI. I've built production software at AWS, Meituan, Momenta, and the National University of Singapore Research Institute.",
    );
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Georgia Tech GPA')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
